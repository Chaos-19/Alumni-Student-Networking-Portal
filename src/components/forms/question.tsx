"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { toast } from "@/components/ui/use-toast";
import { title } from "process";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";
import { Image } from "lucide-react";
import {
  FileUploader,
  FileInput,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/extension/file-upload";
import { DropzoneOptions } from "react-dropzone";
import { cn } from "@/lib/utils";
import { AspectRatio } from "../ui/aspect-ratio";

const FormSchema = z.object({
  contentCatagory: z.string({
    required_error: "Please select an catagory to display.",
  }),
  title: z.string({}),
  question: z.string({}),
  isPublished: z.boolean({}),
});

export default function QuestionForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      contentCatagory: "",
      title: "",
      question: "",
      isPublished: false,
    },
  });

  const dropzone = {
    multiple: true,
    maxFiles: 2,
    maxSize: 4 * 1024 * 1024,
  } satisfies DropzoneOptions;



  // Function to handle form submission
  const handleFormSubmit = async (event: React.FormEvent, isDraft: boolean) => {
    event.preventDefault();

    // Create a copy of formData with the updated isPublished value
    const formData = form.getValues();
    formData.isPublished = !isDraft;

    const uID = localStorage.getItem("user-id") || "";


    // Send the POST request
    try {
      const response = await fetch('http://localhost:8081/v1/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "x-user-id": uID,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }

      const result = await response.json();
      console.log('Form Submission Successful:', result);
    } catch (error) {
      console.error('Form Submission Error:', error);
    }
  };

   // Handler for "Save as draft" button click
   const handleSaveAsDraft = (event: React.FormEvent) => {
    handleFormSubmit(event, true);
  };

  // Handler for "Submit" button click
  const handleSubmit = (event: React.FormEvent) => {
    handleFormSubmit(event, false);
  };



  return (
    <Card className="rounded-sm p-10">
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            control={form.control}
            name="contentCatagory"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="rounded">
                    <SelectTrigger>
                      <SelectValue placeholder="Choose categories" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="golang">golang</SelectItem>
                    <SelectItem value="machine_learning">machine_learning</SelectItem>
                    <SelectItem value="java">java</SelectItem>
                    <SelectItem value="C">C</SelectItem>
                    <SelectItem value="software architecture">Software Architecture</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input
                    placeholder="Type catching attention title"
                    className="rounded"
                    {...field}
                    
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="question"
            render={({ field })  => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Textarea
                    placeholder="Type your question"
                    className="rounded"
                    rows={10}
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between w-full">

            {/* <FormField
              control={form.control}
              name="files"
              render={({ field }) => (
                <FormItem>
                  <FileUploader
                    value={field.value}
                    onValueChange={field.onChange}
                    dropzoneOptions={dropzone}
                    reSelect={true}
                  >
                    <FileInput
                      className={""}
                    >
                      <Button className="bg-blue-700 text-white flex items-center gap-2 rounded relative z-10">
                        <Image /> Add Image
                      </Button>
                    </FileInput>
                  </FileUploader>
                </FormItem>
              )}
            /> */}
            <div className="flex items-center gap-2">
              <Button variant="secondary" className="rounded" onClick={handleSaveAsDraft}>Save as draft</Button>
              <Button type="submit" className="rounded">publish</Button>
            </div>
          </div>
        </form>
      </Form>
    </Card>
  );
}
