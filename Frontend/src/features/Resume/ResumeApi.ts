import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ResumeData } from "../EditorForms/types";
type GenerateFieldRequest = {
  type: string;
  aiFormData: any;
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
    updateResume: builder.mutation<SaveResponse, { id: string, formData: ResumeData }>({
      query: ({ id, formData }) => ({
        body: { resumeData: formData },
        url: `/${id}`,
        method: "PUT",
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
    }),

    getSingleResume: builder.query<{ resume: SavedResume }, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: ["resume"]
    }),
    exportResume: builder.mutation<Blob, string>({
      query: (id) => ({
        url: `/${id}/export/pdf`,
        method: "GET",
        responseHandler: (response) => response.blob(),
      }),
    })
  }),
});

export const { useGenerateFiledMutation, useSaveResumeMutation, useGetAllResumeQuery, useDeleteResumeMutation, useGetSingleResumeQuery, useUpdateResumeMutation, useExportResumeMutation } = resumeApi;