"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
    trigger: React.ReactNode;
    discription: string;
    title: string;
    children?: React.ReactNode;
};

const Modal = ({ discription, title, children, trigger }: Props) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="my-15 max-h-[calc(100dvh_-_20px)]">
                <DialogHeader>
                    <DialogTitle className="text-xl capitalize font-medium">
                        {title}
                    </DialogTitle>
                    <DialogDescription>{discription}</DialogDescription>
                </DialogHeader>
                {children}
                {/*  <DialogFooter>
                    <Button type="submit">Submit</Button>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    );
};

export default Modal;
