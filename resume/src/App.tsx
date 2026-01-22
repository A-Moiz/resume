import './App.css'
import Ship from './components/Ship';

function App() {
  return ( 
    <div className="relative w-full h-screen bg-blue-400 overflow-hidden">
      <h1 className="absolute top-5 left-1/2 -translate-x-1/2 text-white font-bold text-2xl z-20">
        One Piece Style Resume
      </h1>
      
      <Ship />
    </div>
  );
}

export default App
