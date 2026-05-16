// textNode.js

import { useState,useEffect } from 'react';
import BaseNode from '../components/BaseNode';
import { SquarePen } from "lucide-react";
import { useUpdateNodeInternals } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const updateNodeInternals = useUpdateNodeInternals();

  const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

  const extractVariables = (text) => {
    return [...text.matchAll(variableRegex)].map((match) => match[1]);
  };

  const variables = [...new Set(extractVariables(currText))];

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
  updateNodeInternals(id);
}, [variables, id, updateNodeInternals]);

  return (
    <BaseNode id={id}
      title="Text"
      onDelete={data.onDelete}
      inputs={variables.map((variable) => ({ id: `${id}-${variable}`, }))}
      outputs={[{ id: `${id}-output` }]}
      icon={<SquarePen size={18}
        className="text-rose-600" />}>
      <div className="flex flex-col gap-2 text-sm">
        <label className="font-medium text-[#475569]">
          Text:
          <textarea
            value={currText}
            onChange={handleTextChange}
            rows={Math.max(currText.split('\n').length, 3)}
            className="outline-none resize-none bg-transparent w-full break-words overflow-hidden"
          />
        </label>
      </div>

    </BaseNode>
  );
}
