import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import Image1 from '../../assets/images/jeong-sin-cha-ryeo-1.png';
import Image2 from '../../assets/images/jeong-sin-cha-ryeo-2.png';
import Image3 from '../../assets/images/jeong-sin-cha-ryeo-3.png';
import Image4 from '../../assets/images/jeong-sin-cha-ryeo-4.png';
import 'photoswipe/style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

const ImageSlideItem = (imageObject, index) => {
    <SwiperSlide key={`gallery-image-${index}`} className="gallery-slide">
        <a
            href={imageObject.src}
            data-pswp-width={imageObject.width}
            data-pswp-height={imageObject.height}
        >
            <img src={imageObject.src} alt={imageObject.alt} />
        </a>
    </SwiperSlide>;
};

const ImageGallery = () => {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#gallery--getting-started',
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });

        lightbox.init();

        return () => {
            lightbox.destroy();
        };
    }, []);

    return (
        <div className="gallery-container">
            <div className="pswp-gallery" id="gallery--getting-started">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={8}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    className="gallery-swiper"
                    style={{
                        '--swiper-theme-color': 'rgb(var(--clr-info))',
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide
                            key={`gallery-image-${index}`}
                            className="gallery-slide"
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
        </div>
    );
};

export default ImageGallery;
