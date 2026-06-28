import {configureStore} from "@reduxjs/toolkit"
import { resumeApi } from "../features/Dashboard/ResumeApi"


 const store = configureStore({
    reducer:{[resumeApi.reducerPath]:resumeApi.reducer

    },
    middleware:(getDefaultMiddleware)=>(
        getDefaultMiddleware()
        .concat(resumeApi.middleware)
    )
}
)

export default store