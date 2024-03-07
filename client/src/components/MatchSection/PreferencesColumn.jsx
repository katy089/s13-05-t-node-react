import useBands from "../../hooks/useBands";
import useGeneros from "../../hooks/useGeneros";
import ModalGeneros from "../Modal/ModalGeneros";
import ModalBandas from "../Modal/ModalBandas";
import CustomButton from "../reusable-components/forms/CustomButton";

const PreferencesColumn = () => {
  const { handleReloaded } = useGeneros();
  const { handleReloadedBands } = useBands();

  return (
    <div className="font-semibold text-white text-sm items-center flex flex-col gap-3 p-4 w-full h-[89.5vh]">
      <h2 className="font-bold text-base">Tipo de cuenta</h2>
      <CustomButton
        className={
          "bg-[#BB7EBC] uppercase rounded-lg flex justify-center p-3 w-full"
        }
        text={"gratuita"}
      />
      <p className="mt-8 mb-2 font-bold text-base">Ajustes de descubrimiento</p>
      <div className="bg-[#BB7EBC] flex flex-col justify-between p-4 w-full rounded-xl capitalize">
        <p>Muéstrame</p>
        {/**A los botones conectarlos con la funcion que manda el put de los géneros y bandas, traer los que hizo Angel en Perfil */}
        <hr className="w-full rounded-full h-[5px] bg-white opacity-45 my-5" />

        <div>
          <p className="text-sm flex items-end justify-between capitalize mb-3 text-white">
            Bandas
            <div className="badge badge-sm bg-black text-white p-1 pl-2 py-3">
              <ModalBandas
                titulo={"Mis Bandas Favoritas"}
                onClick={handleReloaded}
              />
              <span className="p-3">Cambiar</span>
            </div>
          </p>

          <p className="text-sm flex items-end justify-between capitalize mb-2 text-white">
            Géneros
            <div className="badge badge-sm bg-black text-white p-1 pl-2 py-3">
              <ModalGeneros
                titulo={"Mis Géneros Favoritos"}
                onClick={handleReloadedBands}
              />
              <span className="p-3 ">Cambiar</span>
            </div>
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
