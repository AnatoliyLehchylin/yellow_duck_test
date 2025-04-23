import './style/style.scss'
import {useState} from "react";
import Card from "../../components/card/card.jsx";
import Calendar from "../../components/calendar/calendar.jsx";

import Data from "../../../src/data";
import Country from "../../../src/data/country.js";

import logoHeader from '../../assets/Logo-header.png';
import logoCompany from '../../assets/Logo-company.png';
import site from '../../assets/Icon-site.png';
import phone from '../../assets/icon-phone.png';
import fire from '../../assets/Icon-fire.png';
import people from '../../assets/Icon-people.png';
import busPark from '../../assets/Icon-busPark.png';
import location from '../../assets/Icon-location.png';
import city from '../../assets/Icon-city.png';
import twitter from '../../assets/Icon-twitter.png';
import facebook from '../../assets/Icon-facebook.png';
import bus1 from '../../assets/bus1.png';
import bus2 from '../../assets/bus2.png';
import bus3 from '../../assets/bus3.png';
import cond from '../../assets/cond.png';
import wifi from '../../assets/wifi.png';
import tv from '../../assets/tv.png';
import wc from '../../assets/wc.png';
import weekend from '../../assets/weekend.png';
import animals from '../../assets/animals.png';
import logoFooter from '../../assets/Logo-footer.png';
import phoneFooter from '../../assets/phone-footer.png';
import email from '../../assets/email.png';
import facebookFooter from '../../assets/Facebook.png';
import inst from '../../assets/Instagram.png';
import dribble from '../../assets/Dribbble.png';
import inFooter from '../../assets/LinkedIn.png';
import twitterFooter from '../../assets/Twitter.png';
import Ben from '../../assets/Ben.png';
import Craig from '../../assets/Craig.png';
import Stars from '../../assets/stars.png';
import Circles from '../../assets/Frame 30.png';
import Up from '../../assets/up.png';
import Dawn from '../../assets/dawn.png';

function Profile() {

    const driversInfo = Data;
    const countryInfo = Country;

    const [showAllDrivers, setShowAllDrivers] = useState(false);
    const visibleDrivers = showAllDrivers ? driversInfo : driversInfo.slice(0, 5);

    const [showAllCountry, setShowAllCountry] = useState(false);
    const visibleCountry = showAllCountry ? countryInfo : countryInfo.slice(0, 5);

    return (
        <div className='main-container'>
            <div className='header-container'>

                <div className='top-container'>
                    <div className='top-menu'>
                        <img src={logoHeader} className='top-logo' alt='Logo'/>
                        <div className='nav-menu'>
                            <a className='nav-item'>Головна</a>
                            <a className='nav-item'>Перевізникам</a>
                            <a className='nav-item'>Про нас</a>
                            <a className='nav-item'>Профіль перевізника</a>
                        </div>
                    </div>

                    <div className='top-buttons'>
                        <a className='button-item'>Створити профіль</a>
                        <div className='line'></div>
                        <button className='button'>Увійти</button>
                    </div>
                </div>

                <div className='header'>
                    <p className='breadcrumbs'>Головна / Профіль перевізника / <span>Stripe</span></p>
                    <div className='header-content'>
                        <img src={logoCompany} className='logo-company' alt='logo'/>

                        <div className='company-container'>

                            <div className='company-name'>
                                <h2 className='title'>Stripe</h2>
                                <div className='trip'>43 Поїздок</div>
                            </div>

                            <div className='company-contacts'>
                                <div className='contact-item'>
                                    <img src={site} alt='site'/>
                                    <p className='contact'>https://stripe.com</p>
                                </div>
                                <div className='contact-item'>
                                    <img src={phone} alt='site'/>
                                    <p className='contact'>+38 (073) 555 55 55</p>
                                </div>
                            </div>

                            <div className='company-description'>
                                <div className='description-item'>
                                    <div className='logo-wrapp'>
                                        <img src={fire} alt='logo'/>
                                    </div>
                                    <div className='company-info'>
                                        <p className='info-name'>На ринку від:</p>
                                        <p className='info-text'>Травень 31, 2011</p>
                                    </div>
                                </div>
                                <div className='description-item'>
                                    <div className='logo-wrapp'>
                                        <img src={people} alt='logo'/>
                                    </div>
                                    <div className='company-info'>
                                        <p className='info-name'>Перевезених пасажирів</p>
                                        <p className='info-text'>4000+</p>
                                    </div>
                                </div>
                                <div className='description-item'>
                                    <div className='logo-wrapp'>
                                        <img src={busPark} alt='logo'/>
                                    </div>
                                    <div className='company-info'>
                                        <p className='info-name'>Автопарк</p>
                                        <p className='info-text'>8 бусів</p>
                                    </div>
                                </div>
                                <div className='description-item'>
                                    <div className='logo-wrapp'>
                                        <img src={location} alt='logo'/>
                                    </div>
                                    <div className='company-info'>
                                        <p className='info-name'>Обслуговуємо</p>
                                        <p className='info-text'>8 країн</p>
                                    </div>
                                </div>
                                <div className='description-item'>
                                    <div className='logo-wrapp'>
                                        <img src={city} alt='logo'/>
                                    </div>
                                    <div className='company-info'>
                                        <p className='info-name'>Місто</p>
                                        <p className='info-text'>Львів</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-info'>
                <div className='carrier'>
                    <h3 className='chapter-title'>Опис перевізника</h3>
                    <p className='chapter-text'>Stripe is a software platform for starting and running internet
                        businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand
                        globally, and manage their businesses online. Stripe has been at the forefront of expanding
                        internet commerce, powering new business models, and supporting the latest platforms, from
                        marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a
                        problem rooted in code and design, not finance. Stripe is built for developers, makers, and
                        creators. We work on solving the hard technical problems necessary to build global economic
                        infrastructure—from designing highly reliable systems to developing advanced machine learning
                        algorithms to prevent fraud.</p>

                    <h3 className='chapter-title'>Ми у соц. мережах</h3>
                    <div className='cos-net'>
                        <div className='cos-item'>
                            <img src={twitter} alt='logo'/>
                            <p>twitter.com/stripe</p>
                        </div>
                        <div className='cos-item'>
                            <img src={facebook} alt='logo'/>
                            <p>facebook.com/StripeHQ</p>
                        </div>
                    </div>
                    <div className='bus-wrapp'>
                        <img src={bus1} alt='photo'/>
                        <img src={bus2} alt='photo'/>
                        <img src={bus3} alt='photo'/>
                    </div>
                </div>

                <div className='aside'>
                    <h3 className='chapter-title'>Обслуговуємо країни</h3>
                    <div className='country-wrapp'>
                        {visibleCountry.map((country) => (
                            <div key={country.id} className='country-item'>
                                <img src={country.photo} alt='flag'/>
                                <p>{country.name}</p>
                            </div>
                        ))}
                    </div>
                    {countryInfo.length > 5 && (
                        <button className='button-country' onClick={() => setShowAllCountry(!showAllCountry)}>
                            {showAllCountry ? (
                                <div className='show-country'>
                                    <p>Меньше</p>
                                    <img className='arrow' src={Up} alt="Arrow Down" />
                                </div>
                            ) : (
                                <div className='show-country'>
                                    <p>Усі країни</p>
                                    <img className='arrow' src={Dawn} alt="Arrow Up" />
                                </div>
                            )}
                        </button>
                    )}
                    <div className='line'></div>
                    <h3 className='chapter-title'>Календар поїздок</h3>
                    <div className='calendar-wrapp'>
                        <Calendar/>
                    </div>
                </div>
            </div>

            <div className='drivers-wrapp'>
                <div className='drivers-title-wrapp'>
                    <h3 className='chapter-title'>Наші водії</h3>
                    {driversInfo.length > 5 && (
                        <button onClick={() => setShowAllDrivers(!showAllDrivers)}>
                            {showAllDrivers ? 'Меньше' : `Усі водії (${driversInfo.length})`}
                        </button>
                    )}
                </div>
                <div className='driver-item-wrapp'>
                    {visibleDrivers.map((driver) => (
                        <Card key={driver.id} driver={driver}/>
                    ))}
                </div>
                <div className='line'></div>
            </div>

            <div className='services-wrapp'>
                <h3 className='chapter-title' style={{marginBottom: '8px'}}>Сервіс</h3>
                <p>Найкращі умови для вашого комфорту</p>
                <div className='services-info-wrapp'>
                    <div className='services-item'>
                        <img src={cond} alt='logo'/>
                        <p>Кондиціонер</p>
                    </div>
                    <div className='services-item'>
                        <img src={wifi} alt='logo'/>
                        <p>WIFI</p>
                    </div>
                    <div className='services-item'>
                        <img src={tv} alt='logo'/>
                        <p>TV</p>
                    </div>
                    <div className='services-item'>
                        <img src={wc} alt='logo'/>
                        <p>Туалет</p>
                    </div>
                    <div className='services-item'>
                        <img src={weekend} alt='logo'/>
                        <p>Зручні<br/>сидіння</p>
                    </div>
                    <div className='services-item'>
                        <img src={animals} alt='logo'/>
                        <p>Перевозимо<br/>тварин</p>
                    </div>
                </div>
            </div>

            <div className='people-wrapp'>
                <div className='people-say'>
                    <h2>Що <span>кажуть люди?</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className='button button-people'>Залишити відгук</button>
                </div>

                <div className='response-wrapp'>
                    <div className='response'>
                        <div className='response-item'>
                            <div className='response-item-top'>
                                <div className='response-title-wrapp'>
                                    <img src={Ben} alt='photo'/>
                                    <div className='response-description'>
                                        <p className='response-name'>Ben Yardley</p>
                                        <p className='response-city'>Київ - Кишинів</p>
                                        <p className='response-date'>1 May 2023</p>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                            <img src={Stars} alt='stars'/>
                        </div>

                        <div className='response-item'>
                            <div className='response-item-top'>
                                <div className='response-title-wrapp'>
                                    <img src={Craig} alt='photo'/>
                                    <div className='response-description'>
                                        <p className='response-name'>Ben Yardley</p>
                                        <p className='response-city'>Львів - Париж</p>
                                        <p className='response-date'>3 May 2023</p>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                            <img src={Stars} alt='stars'/>
                        </div>
                    </div>
                    <img src={Circles} alt='circle'/>
                </div>
            </div>

            <footer>
                <div className='footer-content-wrapp'>
                    <div className='footer-logo-wrapp'>
                        <img src={logoFooter} alt='Logo'/>
                        <p>Платформа пошуку перевізників та бронювання поїздок</p>
                    </div>

                    <div className='footer-column'>
                        <p className='footer-text'>Клієнтам</p>
                        <p className='footer-text'>Головна</p>
                        <p className='footer-text'>Про нас</p>
                        <p className='footer-text'>Ціни</p>
                        <p className='footer-text'>Маршрути</p>
                        <p className='footer-text'>Політика приватності</p>
                    </div>

                    <div className='footer-column'>
                        <p className='footer-text'>Перевізникам</p>
                        <p className='footer-text'>Help Docs</p>
                        <p className='footer-text'>Особистий кабінет</p>
                        <p className='footer-text'>Оновлення</p>
                        <p className='footer-text'>клнтакти</p>
                    </div>

                    <div className='footer-column'>
                        <p className='footer-text'>Зворотній зв'язок</p>
                        <p className='footer-text' style={{cursor: 'default'}}>Маєш пропозиції щодо покращення сервісу -
                            пиши нам!</p>
                        <div className='input-wrapp'>
                            <input placeholder='Email Address' type='email'/>
                            <button className='button' style={{marginTop: 0}}>Надіслати</button>
                        </div>
                        <div className='footer-phone'>
                            <img src={phoneFooter} alt='logo'/>
                            <p>+ 38 (073) 555 55 55</p>
                        </div>
                        <div className='footer-phone'>
                            <img src={email} alt='logo'/>
                            <p>gmail@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='footer-line'></div>
                <div className='footer-copyright'>
                    <p>2024 @ Sprinters. All rights reserved.</p>
                    <div className='footer-link'>
                        <img src={facebookFooter} alt='logo'/>
                        <img src={inst} alt='logo'/>
                        <img src={dribble} alt='logo'/>
                        <img src={inFooter} alt='logo'/>
                        <img src={twitterFooter} alt='logo'/>
                    </div>
                </div>

            </footer>

        </div>
    )
}

export default Profile