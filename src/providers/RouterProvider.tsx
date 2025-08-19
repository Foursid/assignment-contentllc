import { Fallback } from '@/components/ui/Fallback';
import { HomeAsync } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

interface RouterProviderProps {
    children?: React.ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Fallback />}>
                <Routes>
                    {/* Lazy Routes */}
                    <Route path="/" element={<HomeAsync />} />
                    {/* Not Lazy Routes */}
                    <Route path="*" element={<NotFound />} />
                    {children}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
