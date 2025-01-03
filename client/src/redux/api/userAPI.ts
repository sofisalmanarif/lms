import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserType } from "../../../types/user.types"
export const myUserAPI = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/user/" }),

    endpoints: (builder) => ({
        getUser: builder.query<UserType, void>({
            query: () => `user`,
        }),

        createUser: builder.mutation<UserType[], UserType>({
            query: (user) => ({
                url: `user`,
                method: "POST",
                body: user,
            }),
        }),
    }),
});


export const { useGetUserQuery } = myUserAPI