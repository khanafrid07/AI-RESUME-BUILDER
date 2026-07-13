import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type GenerateFieldRequest = {
    type: string;
    aiFormData: Record<string, any>;
};
export const resumeApi = createApi({
  reducerPath: "resumeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/resume" }),
  tagTypes: ["resume"],
  endpoints: (builder) => ({
    generateFiled: builder.mutation<any, GenerateFieldRequest>({
      query: (body) => ({
        url: "/ai/generate",
        method: "POST",
        body,
      }),
      invalidatesTags:["resume"]
    }),
  }),
});

export const { useGenerateFiledMutation } = resumeApi;