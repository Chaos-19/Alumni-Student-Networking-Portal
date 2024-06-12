import { Input } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";

type Props = {}

const Search = (props: Props) => {
    return (
        <Input
            variant="bordered"
            placeholder="type search vontent"
            size="lg"
            endContent={
                <Button className="border-2 flex gap-1 ">
                    <SearchIcon size={18} className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" /> Search
                </Button>
            }
            className="max-w-xs"
        />
    )
}



export default Search