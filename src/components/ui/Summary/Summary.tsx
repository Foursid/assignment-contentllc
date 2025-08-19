import { Counter } from '@/components/ui/Counter';
import cn from 'classnames';
import React from 'react';

interface SummaryProps {
    value: number;
    className?: string;
}

export const Summary: React.FC<SummaryProps> = React.memo(({ value, className }) => {
    return (
        <span className={cn('summary', className )}>
            Найдено: <Counter value={value} /> грузоперевозок
        </span>
    );
});
