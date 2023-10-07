"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/modules/auth/authSlice";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username is Required",
  }),
  password: z.string().min(1, {
    message: "Password is Required",
  }),
});

export const LoginComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const isLoading = form?.formState?.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      dispatch(login(values));

      if (typeof window !== "undefined") {
        localStorage.setItem("isLoggedIn", String(true));
      }

      router.push("/post");
      setTimeout(() => {
        form.reset();
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  if (!isMounted) return null;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-6">
        <h2 className="text-xl font-semibold text-center text-zinc-500 dark:text-secondary/70 mb-4">
          Login
        </h2>
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                Username
              </FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  placeholder="Enter Username"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  disabled={isLoading}
                  className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  placeholder="Enter Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button variant={"primary"} disabled={isLoading}>
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
};
