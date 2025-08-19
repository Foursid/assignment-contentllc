import React from 'react';
import './header.scss';

export const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper centered">
                <div className="header__inner">
                    <div className="header__company">
                        <div className="header__logo">
                            <a href="/">
                                <img src="/logo.svg" alt="logo" />
                            </a>
                        </div>
                        <div className="header__slogan">
                            Лучший способ путешествовать дешевле
                        </div>
                    </div>
                    <div className="header__user">
                        <a href="#" className="header__icon">
                            <img src="/chat.svg" alt="Сообщения" />
                        </a>
                        <a href="#" className="header__icon">
                            <img src="/notifications.svg" alt="Уведомления" />
                        </a>
                        <div className="header__chip">
                            <div className="header__avatar">
                                <img src="/avatar.jpg" alt="Аватар" />
                            </div>
                            <div className="header__username">Оксана</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
