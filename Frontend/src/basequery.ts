import { fetchBaseQuery, type BaseQueryFn } from "@reduxjs/toolkit/query";
const BASE_URL = "http://localhost:8080/api/auth";


const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" })


export const baseQueryWithRefresh: BaseQueryFn = async (args, api, extaoptions) => {
    const result = await baseQuery(args, api, extaoptions)

    if (result.error?.status == 401) {
        const refreshResult = await baseQuery({ url: "/refresh", method: "GET" }, api, extaoptions)
        if (refreshResult.data) {

            await baseQuery(args, api, extaoptions)

        } else {
            // api.dispatch(logout())
            window.location.href = "/login"

        }

    }
    return result
}

