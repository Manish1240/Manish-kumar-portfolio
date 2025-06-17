import LandingPage from "./Components/LandingPage";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <Toaster />
    <div className="min-h-screen font-sans bg-[#0a192f] text-white">
      <LandingPage />
    </div>
    </>
  
  );
}

export default App;
