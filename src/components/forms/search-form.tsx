"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "../icons/icons";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SearchFormSchema } from "@/lib/schema";

type FormInputs = z.infer<typeof SearchFormSchema>;

const SearchForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<FormInputs>({
    resolver: zodResolver(SearchFormSchema),
    defaultValues: {
      query: "",
    },
  });

  function onSubmit(data: FormInputs) {
    startTransition(async () => {
      router.push(`/search/${data.query}/`);
    });
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full space-x-3 p-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Type anything to search" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="md" disabled={isPending}>
          {isPending ? (
            <>
              <Spinner className="mr-2 h-5 w-5 animate-spin" />
              <span>Searching</span>
            </>
          ) : (
            <span>Search</span>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SearchForm;
