import type React from 'react';
import { lazy } from 'react';

export const HomeAsync = lazy(async () => {
    return await new Promise<{ default: React.ComponentType<any> }>((resolve) => {
        resolve(import('./Home'));
    });
});
