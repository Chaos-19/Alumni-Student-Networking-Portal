"use client";
import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";
import { Folder } from "lucide-react";


const UploadHistory = ({ data }: {
    data: {
        reciever: string;
        type: string;
        date: string;
    }[]
}) => {
    return (
        <Table className="max-w-[90%]" aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Reciever</TableColumn>
                <TableColumn>Type</TableColumn>
                <TableColumn>Date</TableColumn>
            </TableHeader>
            <TableBody>
                {data.map((val, idx) => (
                    <TableRow key={idx + "-key"}>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <Folder />
                                {val?.reciever}
                            </div>
                        </TableCell>
                        <TableCell>{val.type}</TableCell>
                        <TableCell>{val.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default UploadHistory;
