import { useEffect, useRef, useState } from 'react';
import shortid from 'shortid';
import Remix from './Remix';

const MultipleImageUploader = ({ onCallFiles }) => {
    const inputElement = useRef();
    const maxImageLimit = 4;

    const [selectedfile, setSelectedFile] = useState([]);
    const [imageFiles, setFiles] = useState([]);

    useEffect(() => {
        console.log(selectedfile);
    }, [selectedfile]);

    const filesizes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return (
            parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
        );
    };

    const handleInputChange = (e) => {
        let images = [];

        if (selectedfile.length + e.target.files.length > maxImageLimit)
            return alert('파일 최대 갯수를 초과했어요.');

        for (let i = 0; i < e.target.files.length; i++) {
            images.push(e.target.files[i]);

            let reader = new FileReader();
            let file = e.target.files[i];

            reader.onloadend = () => {
                setSelectedFile((preValue) => {
                    return [
                        ...preValue,
                        {
                            id: shortid.generate(),
                            filename: e.target.files[i].name,
                            filetype: e.target.files[i].type,
                            fileimage: reader.result,
                            datetime:
                                e.target.files[
                                    i
                                ].lastModifiedDate.toLocaleString('ko-KR'),
                            filesize: filesizes(e.target.files[i].size),
                        },
                    ];
                });
            };

            if (e.target.files[i]) {
                reader.readAsDataURL(file);
            }
        }
    };

    const handleDeleteFile = (id) => {
        if (confirm('이 이미지를 삭제하시겠어요?')) {
            const result = selectedfile.filter((data) => data.id !== id);

            setSelectedFile(result);
        } else {
            console.log('삭제가 취소되었어요.');
        }
    };

    const handleFileUpload = async (e) => {
        // 파일 업로더 - 요청 없음
        e.preventDefault();
        e.target.reset();

        if (selectedfile.length > 0) {
            for (let index = 0; index < selectedfile.length; index++) {
                setFiles((preValue) => {
                    return [...preValue, selectedfile[index]];
                });
            }

            setSelectedFile([]);
        } else {
            alert('업로드할 파일이 존재하지 않아요!');
        }
    };

    return (
        <div>
            <input
                type="file"
                id="input-multiple-image-uploader"
                accept="image/jpeg, image/jpg, image/png, image/gif"
                multiple
                ref={inputElement}
                onChange={(e) => handleInputChange(e)}
            />

            <div id="image-uploader-body">
                <label
                    htmlFor="input-multiple-image-uploader"
                    id="input-multiple-image-uploader-label"
                    className={`image-uploader-block ${selectedfile.length === maxImageLimit && 'limited'}`}
                    title="파일 업로드"
                >
                    <Remix
                        iconName={
                            selectedfile.length < maxImageLimit
                                ? 'share-2-line'
                                : 'forbid-fill'
                        }
                        iconSize={1.8}
                    />

                    <span>{`${selectedfile.length} / ${maxImageLimit}`}</span>
                </label>

                <div id="image-preview-wrapper">
                    {selectedfile.map((item, index) => {
                        const {
                            id,
                            filename,
                            filetype,
                            fileimage,
                            datetime,
                            filesize,
                        } = item;

                        return (
                            <div
                                className="image-uploader-block"
                                key={index}
                                onClick={() => console.log(item)}
                            >
                                <img src={fileimage} alt={filename} />

                                <button
                                    type="button"
                                    className="button-delete-preview-image"
                                    onClick={() => handleDeleteFile(id)}
                                >
                                    <Remix
                                        iconName={'delete-bin-fill'}
                                        iconSize={1.4}
                                    />

                                    <span>이 이미지 삭제</span>
                                </button>
                            </div>
                        );
                    })}

                    {selectedfile.length < maxImageLimit && (
                        <div className="image-uploader-block empty">
                            <Remix iconName={'image-fill'} iconSize={1.4} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MultipleImageUploader;
