// TabColumn.js
import { useState, useEffect } from "react";

function TabColumn() {
  const [matches, setMatches] = useState([]); 

  useEffect(() => {
    // Función para cargar los matches del usuario desde el backend
    const fetchMatches = async () => {
      try {
        const response = await fetch(`/api/usuario/match/profile/{userid}`);
        if (response.ok) {
          const data = await response.json();
          setMatches(data.matches); // Actualizar el estado con los matches obtenidos del backend
        } else {
          console.error("Error al obtener los matches del usuario");
        }
      } catch (error) {
        console.error("Error al obtener los matches del usuario:", error);
      }
    };

    fetchMatches(); // Llamar a la función para cargar los matches del usuario cuando el componente se monta
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="bg-[#6C2B6D] bg-opacity-58 p-4 rounded-lg flex justify-between items-center">
        <button className="text-white font-semibold  py-2 px-4 rounded-full hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out relative">
          Matches
          <div className="absolute top-0 right-0 transform translate-x-1/2 translate-y-1/3  bg-purple-600 w-6 h-6 rounded-full flex justify-center items-center">
            <span className="text-white ">{matches.length}</span>
          </div>
        </button>
      </div>
      <div className="bg-[#BB7EBC] p-6 rounded-lg mb-4 h-full flex flex-wrap justify-center overflow-y-scroll">
        {/* Tarjetas de match */}
        {matches.map((match, index) => (
          <div
            key={index}
            className="relative w-40 h-52 overflow-hidden rounded-lg mb-4 mr-4"
          >
            <img
              className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
              src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
              alt="Avatar"
            />
            <div className="absolute bottom-0 left-0 text-white p-2 rounded-br-lg">
              <span className="text-sm font-semibold">{match.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabColumn;
