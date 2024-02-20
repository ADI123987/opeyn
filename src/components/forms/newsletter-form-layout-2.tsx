"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTransition } from "react";
import { NewsletterFormSchema } from "@/lib/schema";
import { Spinner } from "@/components/icons/icons";
import SendPlaneFillIcon from "remixicon-react/SendPlaneFillIcon";

export type FormInputs = z.infer<typeof NewsletterFormSchema>;

const NewsletterFormLayout2 = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormInputs>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: FormInputs) {
    startTransition(async () => {
      const res = await fetch("/api/mailchimp", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        switch (res.status) {
          case 400:
            toast.error("You are already subscribed to our newsletter.");
            break;

          case 500:
            toast.error("Something went wrong. Please try again later.");

            break;

          default:
            toast.error("Something went wrong. Please try again later.");
            break;
        }
        return;
      }

      toast.success("You have been subscribed to our newsletter.");
      form.reset();
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-nowrap">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative mb-5 flex-1 space-y-0">
              <div className="relative mb-2">
                <FormControl>
                  <Input
                    className="rounded-r-none dark:border-slate-600 dark:bg-transparent"
                    type="email"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <span className="material-input__underline"></span>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isPending}
          className="w-12 rounded-l-none bg-gradient-to-l from-[#FB4A99] to-[#F8875F] px-3 shadow-none"
        >
          {isPending ? (
            <>
              <Spinner className="mr-2 h-5 w-5 animate-spin" />
            </>
          ) : (
            <SendPlaneFillIcon size={20} />
          )}
        </Button>
      </form>
    </Form>
  );
};

export default NewsletterFormLayout2;
