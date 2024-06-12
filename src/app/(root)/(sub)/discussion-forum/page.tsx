import Sidebar from "@/components/discussion/right-side";
import LefftSide from "@/components/discussion/left-side";
import DiscussionList from "./discussion-list";
import Tabs from "./tabs";


export default function page() {
  return (
    <div className="overflow-y-hidden">
      <div className="grid grid-cols-[10%_90%] md:grid-cols-[20%_80%] lg:grid-cols-[20%_55%_25%]  bg-gray-50">
        <div className="flex justify-center bg-white">
          <Sidebar />
        </div>
        <div className="">
          <Tabs />
          <DiscussionList />
        </div>
        <div className="w-full pl-2 pr-8 hidden lg:flex pt-8 justify-center">
          <LefftSide />
        </div>
      </div>
    </div>
  );
}
