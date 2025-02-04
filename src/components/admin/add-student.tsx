"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

type Props = {};

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  picture: z.instanceof(FileList).optional(),
  email: z.string().min(10, {
    message: "email must be at least 10.",
  }),
  phone: z.string(),
  lastname: z.string(),
  yerarofstudy: z.string().min(4, {
    message: "year must be at least 4 digit.",
  }),
  department: z.string(),
  interest: z.string(),
});

const AddStudent = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      lastname: "",
      yerarofstudy: "",
      department: "",
      interest: "",
    },
  });

  const fileRef = form.register("picture");

  async function onsubmit(values: z.infer<typeof formSchema>) {
    try {
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onsubmit)}
          className="flex flex-col gap-8 mb-24 capitalize"
        >
          <Card className="overflow-hidden">
            <div>
              <h3 className="text-2xl font-semibold text-white bg-[#57AEF5] w-full px-10 py-3">
                Student Details
              </h3>
              <div className="w-full">
                <div className="w-full">
                  <div className="grid grid-cols-[20%_80%] gap-3 pt-7 px-10 py-20">
                    <FormField
                      control={form.control}
                      name="picture"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-lg text-[#303972] font-bold capitalize">
                            photo
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              placeholder="upload picture"
                              {...fileRef}
                              className="rounded  py-2 sm:py-[20px] text-sm sm:text-lg h-32"
                              onChange={(event) => {
                                field.onChange(
                                  event.target?.files?.[0] ?? undefined
                                );
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex flex-col w-full gap-3">
                      <div className="grid grid-cols-2 gap place-content-stretch gap-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm sm:text-lg">
                                Full name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="full name"
                                  className="flex-1 w-60 "
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastname"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm sm:text-lg">
                                Last name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="lastname"
                                  className="w-60"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="yerarofstudy"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm sm:text-lg capitalize">
                                year of study
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="graduation year"
                                  className="w-60"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="department"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm sm:text-lg">
                                Task Title
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="department"
                                  className="w-60"
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
                              <FormLabel className="text-sm sm:text-lg">
                                Email
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="email number"
                                  className="w-60"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm sm:text-lg">
                                Phone
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="phone number"
                                  className="w-60"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="interest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Interest</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us a little bit about yourself"
                                  className="resize-none w-64"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <div className="w-full flex justify-end items-center gap-3">
            <Button
              variant="outline"
              className="text-[#57AEF5] border border-[#57AEF5] hover:bg-[#57AEF5] hover:text-white"
            >
              Delete
            </Button>
            <Button type="submit" className="bg-[#57AEF5] text-white ">
              save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddStudent;
