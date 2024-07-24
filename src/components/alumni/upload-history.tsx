"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Folder } from "lucide-react";

interface UploadHistoryItem {
  name: string;
  first_name: string;
  skill: string;
  created_at: string;
}

interface UploadHistoryProps {
  data: UploadHistoryItem[];
}

const UploadHistory: React.FC<UploadHistoryProps> = ({ data }) => {
  return (
    <Table className="max-w-[90%]" aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Mentor</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Type</TableColumn>
        <TableColumn>Date</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((val, idx) => (
          <TableRow key={idx + "-key"}>
            <TableCell>{val.first_name}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Folder />
                {val?.name}
              </div>
            </TableCell>
            <TableCell>{val.skill}</TableCell>
            <TableCell>{new Date(val.created_at).toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UploadHistory;
