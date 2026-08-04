import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ResumeData } from "../EditorForms/types";
type GenerateFieldRequest = {
  type: string;
  aiFormData: Record<string, any>;
};

export interface SavedResume extends ResumeData {
  _id: string;
  user: string;
  template: string;
  createdAt?: string;
  updatedAt?: string;
}

type SaveResponse = {
  message: string;
  resume: SavedResume;
};

type GetAllResponse = {
  message: string;
  resume: SavedResume[];
};

export const resumeApi = createApi({
  reducerPath: "resumeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/resume", credentials: "include" }),
  tagTypes: ["resume"],
  endpoints: (builder) => ({
    generateFiled: builder.mutation<any, GenerateFieldRequest>({
      query: (body) => ({
        url: "/ai/generate",
        method: "POST",
        body,
      }),
      invalidatesTags: ["resume"]
    }),
    saveResume: builder.mutation<SaveResponse, { formData: ResumeData, template: string }>({
      query: ({ formData, template }) => ({
        body: { formData, template },
        url: "/save-user-resume",
        method: "POST",
      }),
      invalidatesTags: ["resume"]
    }),
    getAllResume: builder.query<GetAllResponse, void>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["resume"]
    }),
    deleteResume: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["resume"]
    })
  }),
});

export const { useGenerateFiledMutation, useSaveResumeMutation, useGetAllResumeQuery, useDeleteResumeMutation } = resumeApi;