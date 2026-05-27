import {z} from "zod"

export const personalInformationSchema = z.object({
    fullName:z.string().min(3,"نام ونام خانواگی الزامی است"),
    gender:z.enum(["male","female"],{
        reqired_error:'جنسیت را انتخاب کنید'
    }),
    birthDate:z.any().refine((val)=>val,"تاریخ تولد الزامی است"),
    nationalCode:z.string()
    .regex(/^\d{10}$/,"کد ملی باید 10 رقم باشد"),

})