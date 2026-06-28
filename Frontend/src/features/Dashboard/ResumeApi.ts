import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type CreateResumePayload = {
  personalInfo: Record<string, string>;
  aiFormData: Record<string, string>;
};

export const resumeApi = createApi({
  reducerPath: "resumeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/resume" }),
  tagTypes: ["resume"],
  endpoints: (builder) => ({
    createResume: builder.mutation<Record<string, string>, CreateResumePayload>({
      query: (body) => ({
        url: "/templates/create/:slug",
        method: "POST",
        body,
      }),
      invalidatesTags:["resume"]
    }),
  }),
});

export const { useCreateResumeMutation } = resumeApi;