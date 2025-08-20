import { baseApi } from '@/redux/baseApi';

export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addTourType: builder.mutation({
            query: (tourTypeName) => ({
                url: '/tour/create-tour-type',
                method: 'POST',
                data: tourTypeName,
            }),
            invalidatesTags: ['TourType'],
        }),

        removeTourType: builder.mutation({
            query: (tourTypeId) => ({
                url: `/tour/tour-types/${tourTypeId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['TourType'],
        }),

        getTourTypes: builder.query({
            query: () => ({
                url: `/tour/tour-types`,
                method: 'GET',
            }),
            providesTags: ['TourType'],
            transformResponse: (response) => response.data,
        }),

        addTour: builder.mutation({
            query: (tourData) => ({
                url: '/tour/create',
                method: 'POST',
                data: tourData,
            }),
            invalidatesTags: ['Tour'],
        }),
    }),
});

export const {
    useAddTourTypeMutation,
    useGetTourTypesQuery,
    useRemoveTourTypeMutation,
    useAddTourMutation,
} = tourApi;
