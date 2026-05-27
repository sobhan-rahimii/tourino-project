import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../config/api";
import { setCookie } from "../utils/cookie";
import { da } from "zod/v4/locales";

export const useSendOtp = () => {
  const mutationFn = (data) => api.post("/auth/send-otp", data);
  return useMutation({ mutationFn });
};

export const useCheckOtp = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("/auth/check-otp", data);
  const onSuccess = (data) => {
    console.log(data);
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["user-data"] });

};
return useMutation({ mutationFn, onSuccess });
};

export const useAddToBasket = ()=>{
  const mutationFn = (id)=>api.put(`/basket/${id}`)

  return useMutation({mutationFn})
}

export const useCheckout = ()=>{
  const mutationFn = (data) => api.post("/order",data)
  return useMutation({mutationFn})
}

export const useSendUSerInformation = ()=>{
  const queryClient = useQueryClient()
  const mutationFn = (data)=>api.put("/user/profile",data)

  const onSuccess = (data)=>{
    queryClient.invalidateQueries({queryKey:["user-data"]})
  }

  return useMutation({mutationFn,onSuccess})
}