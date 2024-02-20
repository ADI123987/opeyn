"use server";

import { z } from "zod";
import { Resend } from "resend";
import ContactFormEmail from "@/components/emails/contact-form-email";
import { ContactFormSchema } from "@/lib/schema";
import { getErrorMessage } from "@/lib/utils";
import { renderAsync } from "@react-email/render";

type FormInputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormInputs) => {
  const result = ContactFormSchema.safeParse(formData);
  let data;

  if (result.success) {
    const { name, email, message } = result.data;
    const html = await renderAsync(
      ContactFormEmail({
        name,
        email,
        message,
      }) as React.ReactElement,
    );

    try {
      data = await resend.emails.send({
        from:
          process.env.EMAIL_FROM_ADDRESS ||
          "Contact Form <onboarding@resend.dev>",
        to: process.env.EMAIL_TO_ADDRESS || "",
        subject: "Message from contact form",
        reply_to: email,
        html: html,
        // react: ContactFormEmail({
        //   name: name,
        //   email: email,
        //   message: message,
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
