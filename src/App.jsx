import Landingpage from './Components/Landingpage'; // ✅ correct
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <Toaster />
    <div className="min-h-screen font-sans bg-[#0a192f] text-white">
      <Landingpage/>
    </div>
    </>
  
  );
}

export default App;
