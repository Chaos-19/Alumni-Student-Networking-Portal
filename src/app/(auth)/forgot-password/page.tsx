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
import { FaCircleCheck } from "react-icons/fa6";
import BookIcon, { SignInIcon } from "@/components/icons/bookp-icon";
import { ArrowLeft } from "lucide-react";

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

export default function ForgotPassword() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstName: "",
            email: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }

    return (
        <div className="bg-gray-100 w-screen h-screen flex justify-center items-center overflow-y-scroll scroll-pt-10">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="md:w-full lg:w-2/3 bg-slate-50 overflow-y-auto md:grid grid-cols-1 md:grid-cols-2 border rounded-md shadow-2xl"
                >
                    <div className="py-5 pt-8 order-2 divide-x-2 divide-yellow-400 divide-solid flex flex-col justify-center gap-8">
                        <div>
                            <Button
                                variant="outline"
                                className="sm:w-4/5 mx-auto bg-[#57AEF5] flex items-center justify-start gap-2.5 px-3 rounded-3xl text-white py-6 text-2xl"
                            >
                                Verification email sent
                                <FaCircleCheck
                                    size={34}
                                    className="bg-[#57AEF5] text-white rounded-full"
                                />
                            </Button>
                        </div>
                        <div className="p-10 pt-0 flex flex-col gap-3 justify-center">
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

                            <Button
                                type="submit"
                                className="md:text-2xl font-black text-white rounded"
                            >
                                Reset Password
                            </Button>
                            <Button
                                variant="link"
                                className="font-blackrounded flex itenms-center gap-2"
                            >
                                <ArrowLeft size={20} />  back to login
                            </Button>
                        </div>
                    </div>
                    <div className="hidden md:flex w-full h-full bg-white p-8 space-y-2 order-1 flex-col gap-2 ">
                        <div className="flex items-center">
                            <BookIcon />
                        </div>
                        <h2 className="text-lg sm:text-base md:text-2xl lg:text-4xl font-black text-[#0A033C] text-balance">
                            Forgot Password?
                        </h2>
                        <p className="text-sm sm:text-xs md:text-sm lg:text-lg font-medium text-[#0A033C] text-balance">Enter the email associated with your account and we'll send an email with instructions to reset your password.</p>
                        <div className="">
                            <SignInIcon />
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
}
