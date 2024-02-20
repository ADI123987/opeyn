"use client";

import { sendQuotationEmail } from "@/actions/sendQuotationEmail";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { QuotationFormSchema } from "@/lib/schema";
import { Spinner } from "@/components/icons/icons";
import SectionTitle from "@/components/sections/section-title";

type FormInputs = z.infer<typeof QuotationFormSchema>;

export default function QuotationForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormInputs>({
    resolver: zodResolver(QuotationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(formData: FormInputs) {
    startTransition(async () => {
      const response = await sendQuotationEmail(formData);

      if (response.success) {
        toast.success("Email sent!");
        form.reset();
        return;
      }

      if (response.error) {
        toast.error(response.error);
      }
    });
  }

  return (
    <div className="relative z-[1] mx-auto max-w-4xl rounded bg-white px-[12%] py-[8%] dark:bg-slate-900">
      <SectionTitle
        subtitle="You deserve more. We're proven to deliver"
        sectionClasses="mx-auto max-w-xl text-center mb-12"
        titleClasses="mb-3 text-center"
        subtitleClasses="text-md font-medium"
      >
        Get Free SEO Analysis
      </SectionTitle>
      <Form {...form}>
        <form
          className="mt-10 flex flex-col dark:text-black"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-wrap lg:flex-nowrap lg:space-x-8">
            <div className="mb-6 w-full lg:w-1/2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white">Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-6 w-full lg:w-1/2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white">Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap lg:space-x-8">
            <div className="mb-6 w-full lg:w-1/2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white">Phone</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-6 w-full lg:w-1/2">
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white">Website</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mb-6">
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">
                    Service(s) Interested In
                  </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Please choose an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="SEO">SEO</SelectItem>
                      <SelectItem value="PPC">PPC</SelectItem>
                      <SelectItem value="Content Marketing">
                        Content Marketing
                      </SelectItem>
                      <SelectItem value="Google Ads">Google Ads</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-6">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="How can we help your business grow?"
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" size="lg" disabled={isPending}>
            {isPending ? (
              <>
                <Spinner className="mr-2 h-5 w-5 animate-spin" />
                <span>Sending</span>
              </>
            ) : (
              <span>Get free quotation</span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
