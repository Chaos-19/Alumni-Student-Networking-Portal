"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
  files: z
    .array(
      z.instanceof(File).refine((file) => file.size < 4 * 1024 * 1024, {
        message: "File size must be less than 4MB",
      })
    )
    .max(5, {
      message: "Maximum 2 files are allowed",
    })
    .nullable(),
});

export default function QuestionForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      contentCatagory: "",
      title: "",
      question: "",
    },
  });

  const dropzone = {
    multiple: true,
    maxFiles: 2,
    maxSize: 4 * 1024 * 1024,
  } satisfies DropzoneOptions;

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
    <Card className="rounded-sm p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={() => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input
                    placeholder="Type catching attention title"
                    className="rounded"
                    {...form}
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
            render={() => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Textarea
                    placeholder="Type your question"
                    className="rounded"
                    rows={10}
                    {...form}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between w-full">

            <FormField
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
            />
            <div className="flex items-center gap-2">
              <Button variant="secondary" className="rounded">Save as draft</Button>
              <Button type="submit" className="rounded">publish</Button>
            </div>
          </div>
        </form>
      </Form>
    </Card>
  );
}
