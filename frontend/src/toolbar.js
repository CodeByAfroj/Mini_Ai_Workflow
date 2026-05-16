// toolbar.js

import { DraggableNode } from "./draggableNode";
import { LogIn, Brain, LogOut, SquarePen,Globe,Database } from "lucide-react";

export const PipelineToolbar = () => {

  return (
    <div className="p-4">

      <div className="">
        <h1 className="text-xl font-bold text-[#111827]">
          Workflow Builder
        </h1>

        <p className="text-sm text-[#64748b] ">
          Drag nodes into canvas
        </p>
      </div>

      <div className="flex flex-col gap-3">

        <DraggableNode
          type="customInput"
          label="Input"
          icon={<LogIn size={18} className="text-[#2563eb]" />}
        />

        <DraggableNode
          type="llm"
          label="LLM"
          icon={<Brain size={18} className="text-[#7c3aed]" />}
        />

        <DraggableNode
          type="customOutput"
          label="Output"
          icon={<LogOut size={18} className="text-[#059669]" />}
        />

        <DraggableNode
          type="text"
          label="Text"
          icon={<SquarePen size={18} className="text-[#db2777]" />}
        />
         <DraggableNode
          type="api"
          label="API"
          icon={<Globe size={18} className="text-blue-600" />}
        />
         <DraggableNode
          type="database"
          label="DataBase"
          icon={<Database size={18} className="text-emerald-600" />}
        />

      </div>

    </div>
  );
};