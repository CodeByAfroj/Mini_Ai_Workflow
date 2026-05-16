// inputNode.js

import { useState } from 'react';

import BaseNode from '../components/BaseNode';
import { LogIn } from "lucide-react";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');
  const { onDelete } = data;

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

 

  return (
    <>
      <BaseNode id={id}  title="Input" outputs={[{ id: `${id}-value` }]} onDelete={onDelete}  icon={<LogIn size={18} className="text-blue-600" />}>
        <div className="flex flex-col items-center gap-3 text-sm">
          <label className="flex  items-center gap-2">
            <span>Name</span>
            <input
              type="text"
              value={currName}
              onChange={handleNameChange}
              className="px-2 py-1 rounded  border border-zinc-700 outline-none w-24"
            />
          </label>

          <label className="flex items-center gap-2">
            <span>Type</span>

            <select
              value={inputType}
              onChange={handleTypeChange}
              className="px-2 py-1 rounded  border border-zinc-700 outline-none"
            >
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>

        </div>

      </BaseNode>
    </>
  );
}
