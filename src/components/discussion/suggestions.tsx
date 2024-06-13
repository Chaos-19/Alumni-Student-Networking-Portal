
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FaComment } from "react-icons/fa"


const Suggestions = () => {
    return (
        <div className="w-full text-black">
            <div className="flex justify-center items-center font-medium my-10">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Suggestions</h2>
            </div>
            <div className="flex flex-col justify-center  w-full gap-4 px-10 bg-white py-8">
                <Textarea placeholder="Type your message here." className="max-w-screen-sm" />
                <div className="flex items-center justify-end gap-2">
                    <Button variant="secondary" className="rounded bg-gray-400 hover:bg-red-500 hover:text-black">Cancle</Button> <Button className="flex items-center gap-2 rounded"><FaComment /> seggest</Button>
                </div>
            </div>
        </div>
    )
}

export default Suggestions