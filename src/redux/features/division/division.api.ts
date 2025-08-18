import { baseApi } from '@/redux/baseApi';

export const divisionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addDivision: builder.mutation({
            query: (divisionData) => ({
                url: '/division/create',
                method: 'POST',
                data: divisionData,
            }),
        }),

        getDivision: builder.query({
            query: () => ({
                url: `/division`,
                method: 'GET',
            }),
            transformResponse: (response) => response.data,
        }),
    }),
});

export const { useAddDivisionMutation, useGetDivisionQuery } = divisionApi;
