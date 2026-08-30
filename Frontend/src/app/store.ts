import { configureStore } from "@reduxjs/toolkit"
import { resumeApi } from "../features/Resume/ResumeApi"
import authApi from "../features/auth/authApi"
import { atsApi } from "../features/ATS-Checker/AtsApi"


const store = configureStore({
    reducer: {
        [resumeApi.reducerPath]: resumeApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [atsApi.reducerPath]: atsApi.reducer,

    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware()
            .concat(resumeApi.middleware)
            .concat(authApi.middleware)
            .concat(atsApi.middleware)
    )
}
)

export default store