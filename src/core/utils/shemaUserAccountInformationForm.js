import {email, z} from "zod"

export const userAccountInformationSchema = z.object({
    email:z.string().min(5,"ایمیل باید حدااقل 5کاراکتر باشد")
})