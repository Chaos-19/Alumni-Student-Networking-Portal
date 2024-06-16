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

type Props = {};

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  picture: z.instanceof(FileList).optional(),
  email: z.string().min(10, {
    message: "email must be at least 10.",
  }),
  currentJob: z.string(),
  currentEmployer: z.string(),
  phone: z.string(),
  lastname: z.string(),
  graduationYear: z.string().min(4, {
    message: "year must be at least 4 digit.",
  }),
  department: z.string(),
});

const AddStudent = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      currentJob: "",
      currentEmployer: "",
      phone: "",
      lastname: "",
      graduationYear: "",
      department: "",
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
                      <div className="flex items-center gap-5 justify-around">
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
                                  className="flex-1 w-60"
                                  //className="rounded-none py-2 sm:py-[20px] text-sm sm:text-lg"
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
                                  //className="rounded-none py-2 sm:py-[20px] text-sm sm:text-lg"
                                  className="w-60"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex items-center gap-5 px-4 justify-around">
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
                                  //className="rounded-none py-2 sm:py-[20px] text-sm sm:text-lg"
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
                                  //className="rounded-none py-2 sm:py-[20px] text-sm sm:text-lg"
                                  className="w-60"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex items-center gap-5 px-4 justify-around">
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
                                  //className="rounded-none py-2 sm:py-[20px] text-sm sm:text-lg"
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
                          name="graduationYear"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm sm:text-lg">
                                Graduation Year
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="graduation year"
                                  //className="rounded-none py-2 sm:py-[20px] text-sm sm:text-lg"
                                  className="w-60"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex items-center gap-5 px-4 justify-around">
                        <FormField
                          control={form.control}
                          name="currentJob"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm sm:text-lg">
                                Current Job
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="currentJob"
                                  //className="rounded-none py-2 sm:py-[20px] text-sm sm:text-lg"
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
                          name="currentEmployer"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm sm:text-lg">
                                Current Employer
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="current employer"
                                  //className="rounded-none py-2 sm:py-[20px] text-sm sm:text-lg"
                                  className="w-60"
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
