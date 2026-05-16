import React from "react";
import { Handle, Position } from "reactflow";
import { X, AlertCircle } from "lucide-react";

const handleStyle = {
  width: 10,
  height: 10,
  background: "#ffffff",
  border: "2px solid #5d6168",
  borderRadius: "50%",
};


const BaseNode = ({ id, title, children, inputs = [], outputs = [], width = 290, icon, onDelete, isValid = true }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05),0_12px_24px_rgba(0,0,0,0.05)] border border-[#e2e8f0] relative group select-none transition-all duration-150 hover:border-[#4d00b4]" style={{ width }}>
      <div className="flex items-center justify-between px-3.5 py-3 border-b border-[#e2e8f0]">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[#f8fafc] flex items-center justify-center border border-[#e2e8f0] flex-shrink-0">
            {icon}
          </div>

          <div className="truncate">
            <p className="text-sm font-semibold text-[#1e293b] leading-tight truncate">{title}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {!isValid && (
            <div className="text-[#f43f5e] mr-1" title="Parameters incomplete">
              <AlertCircle size={16} />
            </div>
          )}
          <button onClick={() => onDelete(id)} className="w-6 h-6 rounded-md hover:bg-[#fee2e2] hover:text-[#ef4444] transition-colors flex items-center justify-center text-[#94a3b8]">
            <X size={14} />
          </button>
        </div>
      </div>

      <div className="p-4 bg-[#ffffff] rounded-b-xl text-[13px] text-[#334155]">
        {children}
      </div>

      {inputs.map((input, index) => (
        <Handle key={input.id} type="target" position={Position.Left} id={input.id} style={{ ...handleStyle, top: `${((index + 1) / (inputs.length + 1)) * 100}%`, left: -5 }} />
      ))}

      {outputs.map((output, index) => (
        <Handle key={output.id} type="source" position={Position.Right} id={output.id} style={{ ...handleStyle, top: `${((index + 1) / (outputs.length + 1)) * 100}%`, right: -5 }} />
      ))}
    </div>
  );
};

export default BaseNode;