import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserType } from "../../../types/user.types"
export const myUserAPI = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),

    endpoints: (builder) => ({
        getUser: builder.query<UserType, void>({
            query: () => `user`,
        }),

        createUser: builder.mutation<UserType[], UserType>({
            query: (user) => ({
                url: `user`,
                method: 'POST',
                body: user,
            })
        })
        
    }),
})


export const { useGetUserQuery } = myUserAPI