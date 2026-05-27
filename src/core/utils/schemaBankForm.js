import { z} from "zod"

export const bankFormSchema = z.object({
    shaba_code:z.string().regex(/^IR[0-9]{24}$/,"شماره شبا را  وارد کنید"),
    debitCard_code:z.string().regex(/^\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}$/,"شماره کارت باید 16 رقم باشد"),
    accountIdentifier:z.string().regex(/^(IR|ir)\d{24}$/,"شماره حساب را وارد کنید")
})