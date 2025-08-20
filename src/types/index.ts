import type { ComponentType } from 'react';

export type { ILogin, ISendOtp, IVerifyOtp } from './auth.type';

export interface IResponse<T> {
    statusCode: number;
    success: boolean;
    message: string;
    data: T;
}

export interface ISidebarItem {
    title: string;
    items: {
        title: string;
        url: string;
        component: ComponentType;
    }[];
}

export type TRole = 'SUPER_ADMIN' | 'ADMIN' | 'USER';

type ZodIssue = {
    code: string;
    expected: string;
    received: string;
    path: string[];
    message: string;
};

type ErrorSource = {
    path: string;
    message: string;
};

export interface IErrorResponse {
    success: boolean;
    message: string;
    errorSources?: ErrorSource[];
    err?: {
        issues: ZodIssue[];
        name: string;
    };
    stack?: string;
}
