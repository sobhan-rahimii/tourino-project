import {z} from "zod"

export const checkoutSchema = z.object({
    fullName:z
    .string()
    .min(3,"نام و نام خانئادگی حدااقل باید3 کاراکتر باشد"),
    nationalCode:z
    .string()
    .regex(/^\d{10}$/,"کد ملی باید 10 رقم باشد"),
    gender:z.string().min(1,"جنسیت را انتخاب کنید"),
    birthDate:z.any().refine((val)=> val,"تاریخ تولد الزامی است")
})