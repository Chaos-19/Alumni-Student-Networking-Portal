import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {
  title: string;
  total: number;
  date: string;
  img: string;
};

const AdminCard = ({ title, total, date, img }: Props) => {
  return (
    <Card className="rounded-sm lg:w-[160px]">
      <CardHeader className="py-2">
        <div className="flex flex-col justify-center">
          <h4 className="text-2xl font-medium text-gray-600">{total}</h4>
          <p>{date}</p>
        </div>
      </CardHeader>
      <CardContent className="py-2">
        <Image src={img} alt="image" width={40} height={40} />
      </CardContent>
      <CardFooter className="pb-2">
        <h6 className="text-lg">{title}</h6>
      </CardFooter>
    </Card>
  );
};

export default AdminCard;
