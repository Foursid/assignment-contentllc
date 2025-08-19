import type { Trip } from '@/types/trip';
import cn from 'classnames';
import React from 'react';
import './card.scss';

interface CardProps {
    trip: Trip;
    className?: string;
}

export const Card: React.FC<CardProps> = React.memo(({ trip, className }) => {
    const cargoVisible = trip.cargoTypes.slice(0, 3).join(', ');
    const cargoHidden = trip.cargoTypes.length - 3;

    return (
        <div className={cn('card', className)}>
            <div className="card__inner">
                <div className="card__photo">
                    <a href="#">
                        <img src={trip.image ?? '/vehicle.jpg'} alt="Фото автомобиля" />
                    </a>
                </div>
                <div className="card__content">
                    <div className="card__info">
                        <div className="card__name">
                            <a href="#">
                                {trip.carManufacturer} {trip.carModel}
                            </a>
                        </div>
                        <div className="card__from">
                            <div className="card__icon">
                                <img src="/marker.svg" alt="marker-icon" />
                            </div>
                            <span className="card__label">{trip.fromCity}</span>
                            <span className="card__date">{trip.dateLabel}</span>
                        </div>
                        <div className="card__cargo">
                            <div className="card__icon">
                                <img src="/box.svg" alt="box-icon" />
                            </div>
                            <div className="card__label">
                                Тип груза:
                                <span className="card__cargo-primary"> {cargoVisible}</span>
                                {cargoHidden > 0 && <>
                                    <span className="card__cargo-primary"> и </span>
                                    <span className="card__cargo-more">
                                        <a href="#">ещё {cargoHidden} типов</a>
                                    </span>
                                </>}
                            </div>
                        </div>
                    </div>
                    <div className="card__offer">
                        <div className="card__cost">
                            <div className="card__duration">за 1 час</div>
                            <div className="card__value">
                                от {trip.cost.toLocaleString('ru-RU')} ₽
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
