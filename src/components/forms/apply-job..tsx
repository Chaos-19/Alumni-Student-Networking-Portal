"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { DropzoneOptions } from "react-dropzone";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button, buttonVariants } from "../ui/button";

import Image from "next/image";
import { toast } from "sonner";
import { DialogClose } from "../ui/dialog";
import Modal from "../modal";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Textarea } from "../ui/textarea";

export const formSchema = z.object({
  coverLatter: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  resume: z.instanceof(FileList).optional(),
});

type Props = {
  users: {}[];
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  title: string;
  discription: string;
};

const ApplyJob = ({ users, trigger, title, discription }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coverLatter: "",
    },
  });

  const fileRef = form.register("resume");

  const dropzone = {
    multiple: true,
    maxFiles: 2,
    maxSize: 4 * 1024 * 1024,
  } satisfies DropzoneOptions;

  async function onsubmit(values: z.infer<typeof formSchema>) {
    try {
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <Modal trigger={trigger} title={title} discription={discription}>
      <div className="p-3 overflow-auto text-sm sm:text-base">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onsubmit)}
            className="space-ysm:pace-y-2 font-mono capitalize"
          >
            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-lg"></FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      placeholder="upload resume"
                      {...fileRef}
                      onChange={(event) => {
                        field.onChange(event.target?.files?.[0] ?? undefined);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="coverLatter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-lg">
                    Cover Latter
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="type your cover latter" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-start items-center py-2 gap-3">
              <DialogClose asChild>
                <Button type="button" variant={"destructive"} className="curs">
                  Cancle
                </Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default ApplyJob;
