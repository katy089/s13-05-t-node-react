import useBands from "../../hooks/useBands";
import useGeneros from "../../hooks/useGeneros";
import ModalGeneros from "../Modal/ModalGeneros";
<<<<<<< HEAD
import CustomButton from "../reusable-components/forms/CustomButton";
=======
>>>>>>> 2093a2e081021a0947c744d56a7d3e62e57c0ad2
import ModalBandas from "../Modal/ModalBandas";
import CustomButton from "../reusable-components/forms/CustomButton";
// import { useSelector } from "react-redux";
// import { getGeneros, getBandas } from '../../redux/authSlice'
// import { getGenres } from '../../redux/genresSlice'
// import { getBands } from '../../redux/bandsSlice'

const PreferencesColumn = () => {
<<<<<<< HEAD
  const { handleReloaded } = useGeneros();
  const { handleReloadedBands } = useBands();

=======
  // const datos = useSelector((state) => state.auth);
  const { handleReloaded } = useGeneros();
  const { handleReloadedBands } = useBands();
  // const generos = useSelector(getGeneros)
  // const genres = useSelector(getGenres)
  // const bandas = useSelector(getBandas)
  // const bands = useSelector(getBands)
>>>>>>> 2093a2e081021a0947c744d56a7d3e62e57c0ad2




  return (
    <div className="font-semibold text-slate-200 text-sm items-center flex flex-col gap-3 p-4 w-full h-[89.5vh]">
      <h2 className="font-bold text-base">Tipo de cuenta</h2>
      <CustomButton
        className={
          "bg-[#BB7EBC] uppercase rounded-lg flex justify-center p-2 w-full"
        }
        text={"gratuita"}
      />
      <p className="mt-8 mb-2">Ajustes de descubrimiento</p>
      <div className="bg-[#BB7EBC] flex flex-col justify-between p-4 w-full rounded-xl capitalize">
        <p>Muéstrame</p>          
        {/**A los botones conectarlos con la funcion que manda el put de los géneros y bandas, traer los que hizo Angel en Perfil */}
        <hr className="w-full rounded-full h-[5px] bg-white opacity-45 my-5" />

        <div>
          <p className="text-sm flex items-end justify-between capitalize mb-3">
            Bandas
            <button
              className="badge badge-sm bg-black text-white p-2"
            >
                <ModalBandas
                  titulo={"Mis Bandas Favoritas"}
                  onClick={handleReloaded}
                />
               <p className="ml-2">Cambiar</p> 
              </button>
          </p>

          <p className="text-sm flex items-end justify-between capitalize mb-2">
            Géneros
            
            <button
              className="badge badge-sm bg-black text-white p-2"
            >
              <ModalGeneros 
                  titulo={"Mis Géneros Favoritos"}
                  onClick={handleReloadedBands}
                  
                />
               <p className="ml-2">Cambiar</p> 
              </button>            
          </p>
        </div>
      </div>
      <div className="flex flex-grow items-baseline justify-normal my-7">
        <p className="text-xs text-slate-400 font-light px-2 text-justify">
          TuneMatch usa estas preferencias para sugerir matches. Algunas
          sugerencias pueden no estar dentro de tus parámetros de preferencia
        </p>
      </div>
    </div>
  );
};

export default PreferencesColumn;
