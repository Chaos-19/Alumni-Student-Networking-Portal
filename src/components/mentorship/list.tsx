import React from "react";

type Props = {
    data: {}[] | any[];
};

const List = ({ data }: Props) => {
    let listInfo: React.ReactNode[] = [];
    let res = data?.map((val: any) => {
        for (const key in val)
            listInfo.push(
                <li key={key} className="flex items-center gap-2 text-sm font-medium">
                    <p>{key}</p> :<p>{val[key]}</p>
                </li>
            );
        return listInfo;
    });
    return listInfo
};

export default List;
