import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://server.meteoto.in/api/'

    }),
    //  tagTypes: ["User", "News", "Language"],

    endpoints: (build) => ({

        venderLogin: build.mutation({
            query(data) {
                return {
                    url: 'vendor/login',
                    method: 'POST',
                    body: data,
                }
            },
        }),

        sendOtpVendor: build.mutation({
            query(data) {
                return {
                    url: 'vendor/otpsent',
                    method: 'POST',
                    body: data,
                }
            },
        }),

    }),
})

export const {
    useVenderLoginMutation,
    useSendOtpVendorMutation,
} = profileApi