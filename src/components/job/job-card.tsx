import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Bookmark, MapPin } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  post: {
    img: string;
    name: string;
    feild: string;
    title: string;
    type: string;
    company: string;
    location: string;
    salaryRange: string;
  };
};

const JobCard = ({ post }: Props) => {
  return (
    <Card>
      <CardHeader className="py-4">
        <div className="flex items-end gap-4">
          <Image src={post.img} width={60} height={60} alt="profile pic" />
          <div className="flex flex-col justify-center gap-1">
            <h6 className="text-base font-semibold capitalize">{post.name}</h6>
            <p className="text-sm">{post.feild}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-base font-medium capitalize">{post.title}</h3>
        <div className="flex items-center gap-2">
          <Badge className="rounded p-1 text-[#0BA02C] bg-[#E7F6EA] hover:bg-[#0BA02C] hover:text-white uppercase">
            {post.type}
          </Badge>
          <p className="text-sm">{post.salaryRange}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <h6 className="font-semibold">{post.company}</h6>
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={15} /> {post.location}
            </p>
          </div>
          <Bookmark size={20} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        <Button className="text-white bg-[#57AEF5] text-lg px-11 py-4 rounded-full">
          Applay
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
