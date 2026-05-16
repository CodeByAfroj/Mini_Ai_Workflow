import { useStore } from "./store";
import axios from "axios";
import toast from 'react-hot-toast';

export const SubmitButton = () => {

    const { nodes, edges } = useStore();

    const handleSubmit = async () => {
        try {
          
           const response =await axios.post("http://127.0.0.1:8000/pipelines/parse", {
                nodes,
                edges
            });
            const data = response.data;

            toast.success(
                     `Nodes: ${data.num_nodes} | Edges: ${data.num_edges} | DAG: ${data.is_dag}`
                      );

        } catch (error) {
            toast.error("Failed to parse pipeline");
        }
    };

    return (
        <div className="flex justify-center">
            <button
                onClick={handleSubmit}
                className="px-6 py-3 rounded-xl 
                mb-20 bg-[#111827] text-white hover:bg-[#1f2937] transition-all"
            >
                Submit
            </button>
        </div>
    );
};