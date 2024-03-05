import React from "react";
import { useState } from "react";

interface CheckboxProps {
    text: string;
    id: string;
    checked: boolean;
}
 
const Checkbox: React.FunctionComponent<CheckboxProps> = ({text, id, checked}) => {
    // const handlerChange = (e) => {
    //     console.log(e);
    // }

    const [data, setData] = useState(checked);

    return (
        <>
            <div className={`relative flex items-start ${data ? "bg-gray-50" : ""}`}>
                <div className="flex h-6 items-center">
                    <input
                        id={id}
                        aria-describedby="comments-description"
                        name={id}
                        type="checkbox"
                        checked={data}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        onChange={() => setData(!data)}
                    />
                </div>
                <div className="ml-3 text-sm leading-6">
                    <label htmlFor={id} className="font-medium text-gray-900">
                        {text}
                    </label>
                </div>
            </div>
        </>
    );
}
 
export default Checkbox;
