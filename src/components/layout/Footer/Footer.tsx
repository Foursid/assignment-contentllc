import React from 'react';
import './footer.scss';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper centered">
                <div className="footer__inner">
                    <div className="footer__content">
                        <nav className="footer__nav">
                            <ul className="footer__list">
                                <li><a href="#">О проекте</a></li>
                                <li><a href="#">Блог</a></li>
                                <li><a href="#">Безопасность</a></li>
                            </ul>
                            <ul className="footer__list">
                                <li><a href="#">Способы оплаты</a></li>
                                <li><a href="#">Обратная связь</a></li>
                                <li><a href="#">Вопросы и ответы</a></li>
                            </ul>
                            <ul className="footer__list">
                                <li><a href="#">Автовокзалы России</a></li>
                                <li><a href="#">Автобусные направления</a></li>
                                <li><a href="#">Расписание автобусов</a></li>
                            </ul>
                            <ul className="footer__list">
                                <li><a href="#">Популярные маршруты</a></li>
                                <li><a href="#">СМИ и Рекламодателям</a></li>
                            </ul>
                        </nav>
                        <ul className="footer__stores">
                            <li>
                                <a href="https://apple.com/app-store" target="_blank" rel="noopener noreferrer">
                                    <img src="/source/appstore.svg" alt="Скачать в App Store" />
                                </a>
                            </li>
                            <li>
                                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/source/googleplay.svg" alt="Скачать в Google Play" />
                                </a>
                            </li>
                        </ul>
                        <ul className="footer__social">
                            <li>
                                <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/social/vk.svg" alt="ВКонтакте" />
                                </a>
                            </li>
                            <li>
                                <a href="https://ok.ru" target="_blank" rel="noopener noreferrer">
                                    <img src="/social/ok.svg" alt="Одноклассники" />
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                                    <img src="/social/tg.svg" alt="Telegram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__copyright">
                        <div className="footer__company">
                            © {new Date().getFullYear()} ООО «КОНТЕНТ»
                        </div>
                        <a href="#" className="footer__docs">Политика конфиденциальности</a>
                        <a href="#" className="footer__docs">Пользовательское соглашение</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
