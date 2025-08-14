import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';
// import { createApi } from '@reduxjs/toolkit/query';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: axiosBaseQuery(),
    tagTypes: ['USER'],
    endpoints: () => ({}),
});
