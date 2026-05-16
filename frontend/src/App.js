import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="flex h-screen overflow-hidden z-0">

        <PipelineToolbar />
        <div className="flex-1 relative">

          <PipelineUI />

          <div className="relative -left-20 bottom-20  z-[1000]">
            <SubmitButton />
          </div>

        </div>

      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: "12px",
          },
        }}
      />
    </>
  );
}

export default App;
