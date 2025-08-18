import { baseApi } from '@/redux/baseApi';

export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addTourType: builder.mutation({
            query: (tourTypeName) => ({
                url: '/tour/create-tour-type',
                method: 'POST',
                data: tourTypeName,
            }),
        }),

        removeTourType: builder.mutation({
            query: (tourTypeId) => ({
                url: `/tour/tour-types/${tourTypeId}`,
                method: 'DELETE',
            }),
        }),

        getTourTypes: builder.query({
            query: () => ({
                url: `/tour/tour-types`,
                method: 'GET',
            }),
            transformResponse: (response) => response.data,
        }),
    }),
});

export const {
    useAddTourTypeMutation,
    useGetTourTypesQuery,
    useRemoveTourTypeMutation,
} = tourApi;
