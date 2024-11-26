import { useMutation } from "@tanstack/react-query"
import { FieldValues } from "react-hook-form"
import { registerUser } from "../services/AuthService"
import toast from "react-hot-toast"

export const useUserRegistration = () =>{
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_REGISTATION"],
        mutationFn: async (userData) => await registerUser(userData),
        onSuccess: () =>{
            toast.success("User registation successfully")
        },
        onError: (error) =>{
            toast.error(error.message)
        }
    })
}