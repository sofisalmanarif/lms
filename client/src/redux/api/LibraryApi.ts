import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LibraryType } from "../../../types/library.types";
import { ApiResponse, ErrorResponse } from "../../../types/ApiResponse";

export const myLibraryAPI = createApi({
    reducerPath: "libraryApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/v1/libraries/",
    }),

    endpoints: (builder) => ({
        getLibraryRequests: builder.query<LibraryType, void>({
            query: () => `library-requests`,
        }),

        createLibrary: builder.mutation<
            ApiResponse<string> | ErrorResponse,
            FormData
        >({
            query: (library) => ({
                url: `register`,
                method: "POST",
                body: library,
            }),
        }),
    }),
});

export const { useCreateLibraryMutation } = myLibraryAPI;
