import './App.css'
import Ship from './components/Ship';
import { myProjects } from './data/projects';

function App() {
  return ( 
    <div className="relative w-full h-screen !bg-blue-400 overflow-hidden">
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-white font-black text-4xl z-20 drop-shadow-2xl italic tracking-tighter">
        ABDUL MOIZ
      </h1>

      {myProjects.map((project) => (
        <div 
          key={project.id}
          className="absolute flex flex-col items-center group transition-transform hover:scale-110"
          style={{ left: `${project.position.x}px`, top: `${project.position.y}px` }}
        >
          {/* Island Icon */}
          <div className="text-7xl cursor-pointer drop-shadow-lg">
            {project.islandType === 'lighthouse' ? '🗼' : '🌋'}
          </div>
          
          {/* Project Label */}
          <div className="mt-2 bg-[#f4e4bc] border-2 border-[#3e2723] px-3 py-1 shadow-lg">
            <span className="text-[#3e2723] font-bold text-sm uppercase">
              {project.name}
            </span>
          </div>
        </div>
      ))}
      
      <Ship />
    </div>
  );
}

export default App
