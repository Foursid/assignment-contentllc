import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import React from 'react';
import './page-wrapper.scss';

interface PageWrapperProps {
    children: React.ReactNode;
    meta?: string[];
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    return (
        <div className="page-wrapper">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};
