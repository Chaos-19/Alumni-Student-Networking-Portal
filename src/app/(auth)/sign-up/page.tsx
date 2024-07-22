"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { FaGooglePlusG } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import BookIcon, { SignInIcon } from "@/components/icons/bookp-icon";

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "firstName must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z
    .string()
    .min(8, { message: "must be match the password." }),
});

export default function SignUp() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
  
    try {
        const response = await fetch('http://localhost:8081/v1/users', {
            method: 'POST',
            body: JSON.stringify(data, null, 2),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        toast({
          title: "User registered successfully",
        });
    } catch (error) {
      toast({
        title: "Unable to signup user",
      });
    }
}

  return (
    <div className="bg-gray-100 w-screen h-screen flex justify-center items-center overflow-y-scroll scroll-pt-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:w-full lg:w-2/3 bg-slate-50 overflow-y-auto md:grid grid-cols-1 md:grid-cols-2 border rounded-md shadow-2xl"
        >
          <div className="py-5 pt-8 order-2 divide-x-2 divide-yellow-400 divide-solid">
            <div>
              <Button
                variant="outline"
                className="sm:w-4/5 mx-auto flex items-center justify-start gap-2.5 px-1 rounded bg-white"
              >
                <FaGooglePlusG
                  size={34}
                  className="bg-primary text-white rounded p-1.5"
                />{" "}
                Signup with Google
              </Button>
              <div className="flex items-center justify-center p-2 gap-0.5 text-gray-700 font-light text-sm sm:text-base">
                <div className="w-3 h-0.5 bg-gray-800" /> Or signup with your
                email <div className="w-3 h-0.5 bg-gray-800" />
              </div>
            </div>
            <div className="p-10 pt-0 flex flex-col gap-3">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Full name"
                        className="rounded"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Example@gimail.com"
                        className="rounded"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
                        type="password"
                        className="rounded"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center space-x-2 py-2">
                <Checkbox id="terms" className="rounded" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agreed to the{" "}
                  <span className="font-black capitalize">
                    terms and conditions
                  </span>
                </label>
              </div>
              <Button
                type="submit"
                className="md:text-2xl font-black text-white rounded"
              >
                Sign Up
              </Button>
              <p className="text-sm md:text-base">Alreay have account?  <Button variant="link">Sign in</Button></p>
            </div>
          </div>
          <div className="hidden md:block w-full h-full bg-white p-8 space-y-2 order-1">
            <div className="flex items-center">
              <BookIcon />
            </div>
            <h2 className="text-lg sm:text-base md:text-2xl lg:text-4xl font-black text-[#0A033C] text-balance">
              Welcome to
              <br />
              Bahirdar Networking
              <br />
              Platform
            </h2>
            <div className="">
              <SignInIcon />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
