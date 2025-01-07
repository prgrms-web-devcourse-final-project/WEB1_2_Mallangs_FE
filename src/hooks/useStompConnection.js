import { useRef, useState, useCallback } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const useStompConnection = () => {
    const [isConnected, setIsConnected] = useState(false);
    const stompClientRef = useRef(null);

    const connect = useCallback((url, token, onMessageReceived, chatRoomId) => {
        if (stompClientRef.current) {
            stompClientRef.current.deactivate();
        }

        try {
            const sock = new SockJS(url);

            const client = new Client({
                webSocketFactory: () => sock,
                connectHeaders: {
                    Authorization: token,
                },
                debug: (str) => {
                    if (
                        str.includes('heart-beat') ||
                        str.includes('CONNECTED') ||
                        str.includes('DISCONNECT')
                    ) {
                        console.log('STOMP Debug:', str);
                    }
                },
                reconnectDelay: 5000,
                heartbeatIncoming: 10000,
                heartbeatOutgoing: 10000,
                onConnect: () => {
                    console.log('웹소켓 연결 성공!');
                    setIsConnected(true);

                    if (chatRoomId) {
                        // 채팅방 구독
                        client.subscribe(
                            `/sub/api/chat/room/${chatRoomId}`,
                            (message) => {
                                if (message.body) {
                                    const newMessage = JSON.parse(message.body);
                                    onMessageReceived(newMessage);
                                }
                            },
                            {
                                Authorization: token,
                            },
                        );
                    }
                },
                onStompError: (frame) => {
                    console.error('브로커 에러:', frame.headers['message']);
                    setIsConnected(false);
                },
                onWebSocketClose: () => {
                    console.log('웹소켓 연결 종료!');
                    setIsConnected(false);
                },
            });

            client.activate();
            stompClientRef.current = client;
        } catch (error) {
            console.error('웹소켓 연결 에러!:', error);
        }
    }, []);

    // 메시지 전송
    const sendMessage = useCallback(
        (messageData, token) => {
            if (!isConnected) {
                console.error('메시지 전송 불가 - 연결되지 않음');
                return;
            }

            try {
                stompClientRef.current.publish(
                    {
                        destination: '/pub/api/chat/send-message',
                        body: JSON.stringify(messageData),
                        headers: {
                            Authorization: token,
                        },
                    },
                    (error) => {
                        if (error) {
                            console.error('메시지 전송 실패:', error);
                        } else {
                            console.log('메시지가 서버에 전달됨');
                        }
                    },
                );
            } catch (error) {
                console.error('메시지 전송 에러:', error);
            }
        },
        [isConnected],
    );

    const disconnect = useCallback(() => {
        if (stompClientRef.current) {
            console.log('웹소켓 연결 해제!');
            stompClientRef.current.deactivate();
            setIsConnected(false);
        }
    }, []);

    return {
        isConnected,
        connect,
        sendMessage,
        disconnect,
    };
};

export default useStompConnection;
