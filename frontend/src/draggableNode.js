// draggableNode.js

export const DraggableNode = ({ type, label,icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      className="cursor-grab bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 flex  items-center gap-3 hover:border-[#7c3aed] hover:shadow-sm transition-all"
    >

      <div className="w-9 h-9 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center">
        {icon}
      </div>

      <span className="text-sm font-medium text-[#111827]">
        {label}
      </span>

    </div>
  );
}