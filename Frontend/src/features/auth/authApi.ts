
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "http://localhost:8080/api/auth"

type SendOtpProps = {
    email: string;
    password: string;
    username: string;
}

type SendOtpResponse = {
    statusCode: number;
    message: string;

}


const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: url, credentials: "include" }),
    tagTypes: ["auth"],
    endpoints: (builder) => ({
        sendOtp: builder.mutation<SendOtpResponse, SendOtpProps>({
            query: (data: SendOtpProps) => {
                return {
                    url: "/register/send-otp",
                    method: "POST",
                    body: data
                }

            },
            invalidatesTags: ["auth"]
        })
    })
})

export const { useSendOtpMutation } = authApi;

export default authApi;