import AddAlumni from "@/components/admin/add-alumni";
import { ScrollArea } from "@/components/ui/scroll-area";
type Props = {}

export default function page({}: Props) {
  return (
    <ScrollArea className="h-screen w-full px-6">
      <div className="w-full">
        <AddAlumni />
      </div>
    </ScrollArea>
  )
}