import type React from 'react';

interface CounterProps {
    value: number;
}

export const Counter: React.FC<CounterProps> = ({ value }) => {
    return value;
};
