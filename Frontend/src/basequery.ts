import {
    fetchBaseQuery,
    type BaseQueryFn,
} from "@reduxjs/toolkit/query";

const BASE_URL = "http://localhost:8080/api/auth";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
});

export const baseQueryWithRefresh: BaseQueryFn = async (
    args,
    api,
    extraOptions
) => {
    console.log("➡️ API REQUEST:", args);

    let result = await baseQuery(args, api, extraOptions);

    console.log("⬅️ API RESULT:", result);

    if (result.error?.status === 401) {
        console.log("🔴 401 detected. Trying refresh...");

        const refreshResult = await baseQuery(
            {
                url: "/refresh",
                method: "GET",
            },
            api,
            extraOptions
        );

        console.log("🔄 REFRESH RESULT:", refreshResult);

        if (refreshResult.data) {
            console.log("🟢 Refresh successful. Retrying request...");

            result = await baseQuery(args, api, extraOptions);

            console.log("🔁 RETRY RESULT:", result);
        } else {
            console.log("❌ Refresh failed");

            // DON'T REDIRECT YET
            // window.location.href = "/";
        }
    }

    return result;
};