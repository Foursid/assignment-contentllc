import cn from 'classnames';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './list.scss';

interface ListProps {
    children: React.ReactNode;
    onReachEnd: () => void;
    className?: string;
}

export const List: React.FC<ListProps> = React.memo(({ children, onReachEnd, className }) => {
    const [ sentinelRef, inView ] = useInView();

    useEffect(() => {
        if (inView) {
            onReachEnd();
        }
    }, [inView]);

    return (
        <div className={cn('list', className)}>
            {children}
            <div ref={sentinelRef} />
        </div>
    );
});
