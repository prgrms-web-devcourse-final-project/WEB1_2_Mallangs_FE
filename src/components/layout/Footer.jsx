import { Link } from 'react-router-dom';
import Remix from '../common/Remix';

const Footer = () => {
    const thisYear = new Date().getFullYear();

    return (
        <footer id="foot-primary" className="inner-wrapper">
            <ul className="footer-service-menu">
                <li className="service-menu-item">
                    <Link>고객센터</Link>
                </li>
                <li className="service-menu-item">
                    <Link>이용약관</Link>
                </li>
                <li className="service-menu-item">
                    <Link>개인정보보호방침</Link>
                </li>
                <li className="service-menu-item">
                    <Link>이메일주소수집거부</Link>
                </li>
            </ul>

            <div className="footer-company-informations">
                <dl className="footer-information-table">
                    <dt className="footer-table-label">
                        <Remix iconName={'building-fill'} />
                        주식회사 말랑스
                    </dt>
                    <dd className="footer-table-row">
                        <span className="footer-table-row-header">
                            대표이사
                        </span>
                        <span className="footer-table-row-values">김땅콩</span>
                    </dd>
                    <hr />
                    <dd className="footer-table-row">
                        <span className="footer-table-row-header">
                            사업자등록번호
                        </span>
                        <span className="footer-table-row-values">
                            123-45-67890
                        </span>
                    </dd>
                    <hr />
                    <dd className="footer-table-row">
                        <span className="footer-table-row-header">
                            통신판매업신고번호
                        </span>
                        <span className="footer-table-row-values">
                            제2024-부산해운대-0000호
                        </span>
                    </dd>
                    <hr />
                    <dd className="footer-table-row">
                        <span className="footer-table-row-header">주소</span>
                        <span className="footer-table-row-values">
                            부산광역시 해운대구 해운대로 570번길 00, 0
                        </span>
                    </dd>
                    <dd className="footer-table-disclaimer">
                        (주) 말랑스는 통신판매중개자로서 각 사업체의 주 거래
                        당사자가 아니며, 해당 업체에서 제공한 서비스 및 제품
                        등에 대한 일체의 책임을 지지 않습니다. 단, 당사의
                        서비스인 “말랑플레이스” 이용 중에 발생한 오류로 인한
                        정정 등의 업무는 (주) 말랑스에서 처리하며, 이에 대한
                        책임 또한 (주) 말랑스에 있습니다.
                    </dd>
                </dl>

                <dl className="footer-information-table">
                    <dt className="footer-table-label">
                        <Remix iconName={'phone-fill'} />
                        말랑플레이스 콜센터
                    </dt>
                    <dd className="company-call-center">
                        <h5>1111-5555</h5>
                    </dd>
                    <dd className="footer-table-row">
                        <span className="footer-table-row-header">
                            운영시간
                        </span>
                        <span className="footer-table-row-values">
                            평일 오전 10:00 ~ 오후 06:00
                        </span>
                    </dd>
                    <hr />
                    <dd className="footer-table-row">
                        <span className="footer-table-row-header">
                            점심시간
                        </span>
                        <span className="footer-table-row-values">
                            오후 12:00 ~ 오후 01:00
                        </span>
                    </dd>
                    <dd className="footer-table-disclaimer">
                        토 / 일 / 공휴일은 휴무입니다.
                    </dd>
                </dl>
            </div>

            <ul className="footer-social-links">
                <li>
                    <Link>
                        <Remix iconName={'facebook-circle-fill'} />
                    </Link>
                </li>
                <li>
                    <Link>
                        <Remix iconName={'instagram-fill'} />
                    </Link>
                </li>
                <li>
                    <Link>
                        <Remix iconName={'youtube-fill'} />
                    </Link>
                </li>
                <li>
                    <Link>
                        <Remix iconName={'github-fill'} />
                    </Link>
                </li>
                <li>
                    <Link>
                        <Remix iconName={'vuejs-fill'} />
                    </Link>
                </li>
            </ul>

            <div className="footer-copyright">
                <div>로고</div>

                <p>
                    Copyright © {thisYear} MallangPlace Inc. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
