// apiNode.js

import { useState } from "react";
import BaseNode from "../components/BaseNode";
import { Globe } from "lucide-react";

export const ApiNode = ({ id, data }) => {

    const [method, setMethod] = useState("GET");
    const [url, setUrl] = useState("");

    return (

        <BaseNode
            id={id}
            title="API"
            onDelete={data.onDelete}
            inputs={[
                { id: `${id}-body` }
            ]}
            outputs={[
                { id: `${id}-response` }
            ]}
            icon={<Globe size={18} className="text-blue-600" />}
        >

            <div className="flex flex-col gap-3 text-sm">

                <label className="flex items-center justify-between gap-2">

                    <span className="text-[#475569] font-medium">
                        Method
                    </span>

                    <select
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                        className="px-2 py-1 rounded-lg border border-[#cbd5e1] bg-white outline-none"
                    >
                        <option>GET</option>
                        <option>POST</option>
                        <option>PUT</option>
                        <option>DELETE</option>
                    </select>

                </label>

                <label className="flex flex-col gap-1">

                    <span className="text-[#475569] font-medium">
                        URL
                    </span>

                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://api.example.com"
                        className="px-3 py-2 rounded-lg border border-[#cbd5e1] outline-none"
                    />

                </label>

            </div>

        </BaseNode>
    );
};