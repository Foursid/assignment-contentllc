import { RouterProvider, StoreProvider } from '@/providers';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';

const root = document.getElementById('root') as HTMLElement;

if (root) {
    createRoot(root).render(
        <React.StrictMode>
            <StoreProvider>
                <RouterProvider />
            </StoreProvider>
        </React.StrictMode>
    );
}
