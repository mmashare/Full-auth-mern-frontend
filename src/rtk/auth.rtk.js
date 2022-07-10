import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:5000/user/"
    }),
    endpoints:(builder)=>({
        loginUser:builder.mutation({
            query:(body)=>{
                
                return {
                    url:"/login",
                    method:"POST",
                    body:body,
                }

            }
        }),
        signUpUser:builder.mutation({
            query:(body)=>{
                
                return {
                    url:"/signup",
                    body:body,
                    method:"POST",
                    
                }

            }
        }),
    }),
    
}) 

export const {useLoginUserMutation,useSignUpUserMutation} = authApi