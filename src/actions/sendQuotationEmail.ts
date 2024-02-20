"use server";

import { z } from "zod";
import { Resend } from "resend";
import QuotationFormEmail from "@/components/emails/quotation-form-email";
import { QuotationFormSchema } from "@/lib/schema";
import { getErrorMessage } from "@/lib/utils";
import { renderAsync } from "@react-email/render";

type FormInputs = z.infer<typeof QuotationFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendQuotationEmail = async (formData: FormInputs) => {
  const result = QuotationFormSchema.safeParse(formData);
  let data;

  if (result.success) {
    const { name, email, phone, website, service, message } = result.data;

    const html = await renderAsync(
      QuotationFormEmail({
        name,
        email,
        phone,
        website,
        service,
        message,
      }) as React.ReactElement,
    );

    try {
      data = await resend.emails.send({
        from:
          process.env.EMAIL_FROM_ADDRESS ||
          "Contact Form <onboarding@resend.dev>",
        to: process.env.EMAIL_TO_ADDRESS || "",
        subject: "Message from quotation form",
        reply_to: email,
        html: html,
        // react: QuotationFormEmail({
        //   name,
        //   email,
        //   phone,
        //   website,
        //   service,
        //   message,
        // }),
      });

      return { success: true, data };
    } catch (error: unknown) {
      console.log(error);
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  }

  return {
    data,
  };
};
