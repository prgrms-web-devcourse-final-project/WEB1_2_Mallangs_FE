import { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

import Remix from './Remix';

import 'swiper/scss';
import 'photoswipe/style.css';

import Image1 from '../../assets/images/jeong-sin-cha-ryeo-1.png';
import Image2 from '../../assets/images/jeong-sin-cha-ryeo-2.png';
import Image3 from '../../assets/images/jeong-sin-cha-ryeo-3.png';
import Image4 from '../../assets/images/jeong-sin-cha-ryeo-4.png';

const images = [
    {
        src: Image1,
        alt: '정신차려 갤러리 이미지 1',
        width: 1200,
        height: 800,
    },
    {
        src: Image2,
        alt: '정신차려 갤러리 이미지 2',
        width: 800,
        height: 600,
    },
    {
        src: Image3,
        alt: '정신차려 갤러리 이미지 3',
        width: 1600,
        height: 900,
    },
    {
        src: Image4,
        alt: '정신차려 갤러리 이미지 4',
        width: 1024,
        height: 768,
    },
    {
        src: Image4,
        alt: '정신차려 갤러리 이미지 4',
        width: 1024,
        height: 768,
    },
    {
        src: Image4,
        alt: '정신차려 갤러리 이미지 4',
        width: 1024,
        height: 768,
    },
];

const ImageGallery = ({
    imageArray = images,
    galleryID = 'basic-gallery-container',
    maxItem = 1.2,
}) => {
    useEffect(() => {
        const lightBox = new PhotoSwipeLightbox({
            gallery: `#${galleryID}`,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });

        lightBox.init();

        return () => {
            lightBox.destroy();
        };
    }, []);

    return (
        <div className="gallery-container">
            <div className="pswp-gallery" id={galleryID}>
                <Swiper
                    className="image-gallery-slider"
                    modules={[Navigation, Pagination]}
                    slidesPerView={maxItem}
                    spaceBetween={8}
                    centeredSlides={true}
                    navigation={{
                        enabled: true,
                        prevEl: '.button-slider-prev',
                        nextEl: '.button-slider-next',
                    }}
                    pagination={{
                        enabled: true,
                        type: 'bullets',
                        el: '.image-gallery-slider-pagination',
                        bulletElement: 'li',
                        bulletClass: 'gallery-slider-pagination-bullet',
                        clickable: true,
                    }}
                >
                    {imageArray.map((image, index) => (
                        <SwiperSlide
                            key={`gallery-image-${index}`}
                            className="image-gallery-slide-item"
                        >
                            <a
                                href={image.src}
                                data-pswp-width={image.width}
                                data-pswp-height={image.height}
                            >
                                <img src={image.src} alt={image.alt} />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="image-gallery-slider-controls">
                <button
                    type="button"
                    className="button-slider-prev"
                    title="이전"
                >
                    <Remix iconName={'arrow-left-s-line'} />
                </button>

                <button
                    type="button"
                    className="button-slider-next"
                    title="다음"
                >
                    <Remix iconName={'arrow-right-s-line'} />
                </button>
            </div>

            <ul className="image-gallery-slider-pagination"></ul>
        </div>
    );
};

export default ImageGallery;
