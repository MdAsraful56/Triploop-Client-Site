import { baseApi } from '@/redux/baseApi';

export const divisionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addDivision: builder.mutation({
            query: (divisionData) => ({
                url: '/division/create',
                method: 'POST',
                data: divisionData,
            }),
            invalidatesTags: ['Division'],
        }),

        getDivisions: builder.query({
            query: () => ({
                url: `/division`,
                method: 'GET',
            }),
            providesTags: ['Division'],
            transformResponse: (response) => response.data,
        }),
    }),
});

export const { useAddDivisionMutation, useGetDivisionsQuery } = divisionApi;
