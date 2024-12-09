import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/scss';

import Remix from '../components/common/Remix';
import TermsOfService from '../components/common/TernsOfService';

import loginBgImage from '../assets/images/login-background-image.png';
import logoImage from '../assets/images/logo.png';

const RegisterPage = () => {
    const [currentIndex, setStepIndex] = useState(0);
    const [registerFormData, setFormData] = useState({
        termsAgree: false,
        userAccount: null,
        userPassword: null,
        userName: null,
        userMail: null,
    }); // 약관 동의

    const navigate = useNavigate();
    const thisYear = new Date().getFullYear();

    const MAX_STEPS = [
        // 회원 가입 최대 단계
        { step: 0, label: '이용약관' },
        { step: 1, label: '기본정보' },
        { step: 2, label: '동네 설정' },
        { step: 3, label: '말랑이 설정' },
    ];

    const handleRegisterState = () => {
        // 회원 가입 단계 이동 - 이후 무결성 검사시 form data 객체를 여기서 단계별로 검사한다.
        // 약관 동의 단계

        if (currentIndex === 0 && registerFormData.termsAgree === false) {
            console.log('동의 안됨');
        }
    };

    return (
        <section id="full-page-wrapper">
            <img
                src={loginBgImage}
                style={{
                    width: '100%',
                    height: '100%',
                    userSelect: 'none',
                    pointerEvents: 'none',
                }}
            />

            <div
                id="register-form-wrapper"
                className="service-container-wrapper"
            >
                <div id="register-form-container" className="service-container">
                    <div className="service-logo-container">
                        <button
                            type="button"
                            id="button-service-go-back"
                            title="돌아가기"
                            onClick={() =>
                                Swal.fire({
                                    icon: 'question',
                                    title: '지금까지의 진행상황이 모두 삭제돼요!',
                                    showCancelButton: true,
                                    cancelButtonText: '아랏서 가입할게',
                                    confirmButtonText: '어쩔',
                                }).then((result) => {
                                    if (result.isConfirmed) navigate(-1);
                                })
                            }
                        >
                            <Remix
                                iconName={'corner-up-left-line'}
                                iconSize={1}
                            />
                        </button>

                        <div id="login-service-name">
                            <p>말랑이와 함께하는 말랑한 세상</p>

                            <h1>말랑플레이스</h1>
                        </div>

                        <img id="login-logo-image" src={logoImage} />
                    </div>

                    <form id="form-register">
                        {/** 회원 가입 단계에 따라 form 내부 컨테이너를 이동시킨다. */}

                        <ul className="current-register-state">
                            <span></span>

                            {MAX_STEPS.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={`register-state-item ${currentIndex === item.step ? 'current' : undefined}`}
                                    >
                                        <p className="step-name">
                                            {item.label}
                                        </p>

                                        <div className="step-indicator"></div>
                                    </li>
                                );
                            })}
                        </ul>

                        <Swiper
                            id="register-step-slider"
                            modules={[Navigation]}
                            allowTouchMove={false}
                            autoHeight={true}
                            navigation={{
                                enabled: true,
                                prevEl: '.prev-step',
                                nextEl: '.next-step',
                            }}
                            onSlideChange={(swiper) => {
                                setStepIndex(swiper.activeIndex);

                                console.log(swiper);
                            }}
                        >
                            <SwiperSlide>
                                <div className={`register-state-container`}>
                                    <TermsOfService />

                                    <div id="check-terms-confirmed">
                                        <input
                                            type="checkbox"
                                            id="input-check-agree-terms"
                                        />

                                        <label htmlFor="input-check-agree-terms">
                                            <div className="check-round-indicator">
                                                <Remix
                                                    iconName={'check-line'}
                                                    iconSize={0.6}
                                                />
                                            </div>

                                            <span>
                                                나는 위의 약관을 읽었으며, 모든
                                                사항에 동의합니다.
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={`register-state-container`}>
                                    <div className="register-form-element-container">
                                        <input
                                            type="text"
                                            id="input-text-register-account"
                                            placeholder="ID"
                                            required
                                        />

                                        <input
                                            type="password"
                                            id="input-text-register-password"
                                            placeholder="비밀번호"
                                            required
                                        />

                                        <input
                                            type="password"
                                            id="input-text-register-password-confirm"
                                            placeholder="비밀번호 확인"
                                            required
                                        />

                                        <input
                                            type="text"
                                            id="input-text-register-username"
                                            placeholder="사용자명"
                                            required
                                        />

                                        <input
                                            type="email"
                                            id="input-text-register-email"
                                            placeholder="E-Mail"
                                            required
                                        />

                                        <div className="register-check-wrapper">
                                            <input
                                                type="checkbox"
                                                id="input-check-agree-private"
                                                required
                                            />

                                            <label htmlFor="input-check-agree-private">
                                                <div className="toggles-indicator">
                                                    <Remix
                                                        iconName={'check-line'}
                                                        iconSize={0.6}
                                                    />
                                                </div>

                                                <span className="toggles-label">
                                                    <span className="register-check-quote must">
                                                        (필수)
                                                    </span>

                                                    <span>
                                                        개인정보 수집 및 이용에
                                                        동의? 어 동의
                                                    </span>
                                                </span>
                                            </label>
                                        </div>

                                        <div className="register-check-wrapper">
                                            <input
                                                type="checkbox"
                                                id="input-check-agree-commercial"
                                            />

                                            <label htmlFor="input-check-agree-commercial">
                                                <div className="toggles-indicator">
                                                    <Remix
                                                        iconName={'check-line'}
                                                        iconSize={0.6}
                                                    />
                                                </div>

                                                <span className="toggles-label">
                                                    <span className="register-check-quote choice">
                                                        (선택)
                                                    </span>

                                                    <span>
                                                        뉴스레터 및 광고성 정보
                                                        "받을게"
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={`register-state-container`}>
                                    내 동네 설정
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={`register-state-container`}>
                                    말랑이 추가하기 / 대표 말랑이 설정 (선택
                                    입력사항)
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </form>
                </div>

                <div className="service-controls register-state-controls">
                    <button
                        className={`button-service-control prev-step ${currentIndex === 0 ? 'drop-progress' : undefined}`}
                        onClick={handleRegisterState}
                    >
                        <span>{currentIndex === 0 ? '가입 취소' : '이전'}</span>
                    </button>

                    <button
                        className={`button-service-control next-step ${currentIndex === MAX_STEPS.length - 1 ? 'done' : undefined}`}
                        onClick={handleRegisterState}
                    >
                        <span>
                            {currentIndex === MAX_STEPS.length - 1
                                ? '가입완료'
                                : '다음'}
                        </span>
                    </button>
                </div>

                <div className="service-copyright">
                    Copyright © {thisYear} MallangPlace Inc. All Rights
                    Reserved.
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;
