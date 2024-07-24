"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { FaGooglePlusG } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { SignInIcon } from "@/components/icons/bookp-icon";

const FormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  role: z.enum(["ADMIN", "USER"]).default("USER"),
});

export default function SignUp() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "USER",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(JSON.stringify(data))
    try {
        const response = await fetch('http://localhost:8081/v1/users/login', {
            headers: {
              "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const rd = await response.json()
        localStorage.setItem('user-id', rd.data.user_id);

        toast({
          title: "user logged in successfully",
        });
    } catch (error) {
      toast({
        title: "Unable to sign in user",
      });
    }
}

  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:w-2/3 bg-slate-50 overflow-y-auto md:grid grid-cols-1 md:grid-cols-2 border rounded-md shadow-2xl"
        >
          <div className="py-5 pt-8 order-2 divide-x-2 divide-yellow-400 divide-solid flex flex-col  h-full justify-center  ">
            <div>
              <Button
                variant="outline"
                className="sm:w-4/5 mx-auto flex items-center justify-start gap-2.5 px-1 rounded bg-white"
              >
                <FaGooglePlusG
                  size={34}
                  className="bg-primary text-white rounded p-1.5"
                />{" "}
                Signin with Google
              </Button>
              <div className="flex items-center justify-center p-2 gap-0.5 text-gray-700 font-light text-sm sm:text-base">
                <div className="w-3 h-0.5 bg-gray-800" /> Or signin with your
                email <div className="w-3 h-0.5 bg-gray-800" />
              </div>
            </div>
            <div className="p-10 pt-0 flex flex-col justify-center gap-3">
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

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" className="rounded" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ADMIN">ADMIN</SelectItem>
                        <SelectItem value="USER">USER</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="md:text-2xl font-black text-white rounded"
              >
                Sign in
              </Button>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 py-2">
                  <Checkbox id="terms" className="rounded" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    keep me signed in
                  </label>
                </div>
                <p className="text-secondary text-sm text-gray-500">
                  Forgot password?
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-full h-full bg-white p-8 space-y-2 order-1">
            <h2 className="text-3xl font-black text-[#0A033C] text-balance">
              Welcome to
              <br />
              Eduvi Online
              <br />
              Learning Platform
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
