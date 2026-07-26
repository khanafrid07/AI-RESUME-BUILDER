import { configureStore } from "@reduxjs/toolkit"
import { resumeApi } from "../features/Dashboard/ResumeApi"
import authApi from "../features/auth/authApi"


const store = configureStore({
    reducer: {
        [resumeApi.reducerPath]: resumeApi.reducer,
        [authApi.reducerPath]: authApi.reducer,

    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware()
            .concat(resumeApi.middleware)
            .concat(authApi.middleware)
    )
}
)

export default store