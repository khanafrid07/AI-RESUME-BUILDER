
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type ATSResult = {
    message: string
    resumeQualityScore: any
}

type CheckATSWithDesc = {
    jobDescription?: string
    jobRole?: string
    companyName?: string
    id: string
}


export const atsApi = createApi({
    reducerPath: "atsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/ats", credentials: "include" }),
    endpoints: (builder) => ({
        checkATS: builder.mutation<ATSResult, CheckATSWithDesc>({
            query: ({ jobDescription, jobRole, companyName, id }) => ({
                url: `/check/${id}`,
                method: "POST",
                body: { jobDescription, jobRole, companyName }
            }),
        }),
    }),
});

export const {
    useCheckATSMutation,
} = atsApi;