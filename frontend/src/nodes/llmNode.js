// llmNode.js

import BaseNode from '../components/BaseNode';
import { Brain } from "lucide-react";

export const LLMNode = ({ id, data }) => {
  const { onDelete } = data;
  return (
    <BaseNode
      id={id}
      title="LLM"
      onDelete={onDelete}
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` },]}
      outputs={[
        { id: `${id}-response` },]}
       icon={<Brain size={18} className="text-purple-600" />}
        
        >
      <div>
        <span>This is a LLM.</span>
      </div>
     
    </BaseNode>
  );
}
