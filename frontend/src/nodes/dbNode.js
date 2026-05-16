// databaseNode.js

import { useState } from "react";
import BaseNode from "../components/BaseNode";
import { Database } from "lucide-react";

export const DatabaseNode = ({ id, data }) => {

  const [table, setTable] = useState("");
  const [operation, setOperation] = useState("SELECT");

  return (

    <BaseNode
      id={id}
      title="Database"
      onDelete={data.onDelete}
      inputs={[
        { id: `${id}-query` }
      ]}
      outputs={[
        { id: `${id}-result` }
      ]}
      icon={<Database size={18} className="text-emerald-600" />}
    >

      <div className="flex flex-col gap-3 text-sm">

        <label className="flex items-center justify-between gap-2">

          <span className="text-[#475569] font-medium">
            Operation
          </span>

          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="px-2 py-1 rounded-lg border border-[#cbd5e1] bg-white outline-none"
          >
            <option>SELECT</option>
            <option>INSERT</option>
            <option>UPDATE</option>
            <option>DELETE</option>
          </select>

        </label>

        <label className="flex flex-col gap-1">

          <span className="text-[#475569] font-medium">
            Table
          </span>

          <input
            type="text"
            value={table}
            onChange={(e) => setTable(e.target.value)}
            placeholder="users"
            className="px-3 py-2 rounded-lg border border-[#cbd5e1] outline-none"
          />

        </label>

      </div>

    </BaseNode>
  );
};