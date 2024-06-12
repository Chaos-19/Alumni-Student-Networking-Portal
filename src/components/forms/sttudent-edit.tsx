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

export const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    picture: z.instanceof(FileList).optional(),
    phone: z.string().min(10, {
        message: "phone must be at least 10.",
    }),
    currentJob: z.string(),
    currentEmployer: z.string(),
    industry: z.string(),
    department: z.string(),
    graduationYear: z.string().min(4, {
        message: "year must be at least 4 digit.",
    }),
    location: z.string(),
});

type Props = {
    users: {}[];
    children?: React.ReactNode;
    trigger?: React.ReactNode;
    title: string;
    discription: string;
};

const StudentEditeProfile = ({ users, trigger, title, discription }: Props) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            currentJob: "",
            currentEmployer: "",
            industry: "",
            department: "",
            graduationYear: "",
            location: "",
        },
    });

    const fileRef = form.register("picture");

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
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm sm:text-lg">
                                        Full name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Task Title"
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
                            name="picture"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm sm:text-lg">
                                        Task Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            placeholder="upload picture"
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
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm sm:text-lg">
                                        Task Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="phone number"
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
                            name="currentJob"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm sm:text-lg">
                                        Task Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="currrent job"
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
                            name="currentEmployer"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm sm:text-lg">
                                        Task Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="current employer"
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
                            name="industry"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm sm:text-lg">
                                        Task Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="industry"
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
                                        Task Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="graduation year"
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
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm sm:text-lg">
                                        Task Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="location"
                                            //className="rounded-none py-2 sm:py-[20px] text-sm sm:text-lg"
                                            {...field}
                                        />
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

export default StudentEditeProfile;
