import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryWithRefresh } from "../../basequery";

const BASE_URL = "http://localhost:8080/api/auth";

type SendOtpProps = {
    email: string;
    password: string;
    username: string;
};

type SendOtpResponse = {
    statusCode: number;
    message: string;
};

type VerifyOtpProps = {
    email: string;
    otp: string;
};

type ResendOtpProps = {
    email: string;
};

type ResendOtpResponse = {
    statusCode: number;
    message: string;
};
type User = {
    _id: string;
    username: string;
    email: string;
};

type GetCurrentUserResponse = {
    user: User;
};
type LoginUserProps = {
    email: string;
    password: string;
};
type LoginUserResponse = {
    statusCode: number;
    message: string;
    user: User;
};


const authApi = createApi({
    reducerPath: "authApi",
    tagTypes: ["auth"],
    baseQuery: baseQueryWithRefresh,

    endpoints: (builder) => ({
        sendOtp: builder.mutation<SendOtpResponse, SendOtpProps>({
            query: (data) => ({
                url: "/register/send-otp",
                method: "POST",
                body: data,
            }),
        }),

        verifyOtp: builder.mutation<SendOtpResponse, VerifyOtpProps>({
            query: (data) => ({
                url: "/register/verify-otp",
                method: "POST",
                body: data,
            }),
        }),

        registerResendOtp: builder.mutation<
            ResendOtpResponse,
            ResendOtpProps
        >({
            query: (data) => ({
                url: "/register/resend-otp",
                method: "POST",
                body: data,
            }),
        }),
        loginUser: builder.mutation<LoginUserResponse, LoginUserProps>({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),
        }),
        getCurrentUser: builder.query<GetCurrentUserResponse, void>({
            query: () => ({
                url: "/me",
                method: "GET",
            }),
            providesTags: ["auth"]
        })
    }),
});

export const {
    useSendOtpMutation,
    useVerifyOtpMutation,
    useRegisterResendOtpMutation,
    useGetCurrentUserQuery,
    useLoginUserMutation
} = authApi;

export default authApi;