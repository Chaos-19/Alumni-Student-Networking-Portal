import Sidebar from "@/components/discussion/right-side";
type Props = {
    children: React.ReactNode;
};

export default function layout({ children }: Props) {
    return (
        <div className="overflow-y-hidden">
            <div className="grid grid-cols-[20%_80%] bg-gray-50">
                <div className="flex justify-center bg-white">
                    <Sidebar />
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}
