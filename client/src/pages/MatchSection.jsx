import { useState } from "react";
import TinderCards from "../components/MatchSection/TinderCard.jsx";
import ToggleCheckbox from "../components/MatchSection/ToggleCheckbox.jsx";
import CustomButton from "../components/reusable-components/forms/CustomButton.jsx";
import MatchCardsList from "../components/MatchSection/MatchCardsList.jsx";
import MessageList from "../components/MatchSection/MessageList.jsx";

const MatchSection = () => {
  const [tabState, setTabState] = useState(0);

  return (
    <div className="w-screen grid grid-cols-7 grid-flow-auto h-screen">
      {/* chats */}
      <div className="bg-terciario col-span-2">
        <div className="bg-secundario grid grid-cols-3 p-3">
          <h2
            onClick={() => setTabState(0)}
            className={`hover:underline-offset: 8px ${
              tabState === 0 && "underline underline-offset-8"
            } text-white p-2 pr-4`}
          >
            <div className="indicator">
              <span className="indicator-item indicator-middle badge bg-primario">
                3
              </span>
              <div
                className={`pr-4 mr-3 ${
                  tabState === 0 && " underline underline-offset-8"
                } text-white `}
              >
                Matches
              </div>
            </div>
          </h2>
          <h2 onClick={() => setTabState(1)} className="text-white p-2 pr-4">
            <div className="indicator">
              <span className="indicator-item indicator-middle badge bg-primario">
                2
              </span>
              <div
                className={`pr-4 mr-3 ${
                  tabState === 1 && " underline underline-offset-8"
                } text-white `}
              >
                Mensajes
              </div>
            </div>
          </h2>
        </div>

        {tabState === 1 ? <MessageList /> : <MatchCardsList />}
      </div>
      {/* tinder card */}
      <div className="bg-slate-200 relative p-2 grid col-span-3 ">
        <TinderCards />
      </div>
      {/* datos matcheo */}
      <div className="bg-black font-bold text-slate-200 items-center flex flex-col gap-4 p-4 col-span-2">
        <h2>Tipo de cuenta</h2>
        <CustomButton
          className={
            "bg-primario uppercase rounded-lg flex justify-center font-semi-bold p-3 w-full"
          }
          text={"gratuita"}
        />
        <h2>Ajustes de descubrimiento</h2>
        <div className="bg-primario flex flex-col justify-between  p-4 w-full rounded-xl gap-3  capitalize">
          <h2>Muéstrame</h2>
          <div>
            <ToggleCheckbox text="Hombres" classInfo={"toggle-primary"} />
            <ToggleCheckbox text="Mujeres" classInfo={"toggle-primary"} />
            <div className="divider divider-primary"></div>
            <p className="text-sm flex items-end justify-between capitalize font-light">
              Músicos
              <span className="badge badge-sm bg-black text-white p-2 font-light">
                instrumentos
              </span>
            </p>

            <p className="text-sm flex items-end justify-between capitalize font-light">
              Fan N°1
              <span className="badge badge-sm bg-black text-white p-2 font-light">
                bandas
              </span>
            </p>
          </div>
        </div>
        <div className="bg-primario flex items-start p-4 w-full rounded-xl gap-3  capitalize flex-col">
          <p>distancia máxima</p>
          <p>80km.</p>
          <input
            type="range"
            min={0}
            max="100"
            value="40"
            className="range range-xs"
          />{" "}
        </div>
        <div className="bg-primario flex items-start p-4 w-full rounded-xl gap-3 ">
          <p>rango de edad</p>
          <p>18-32</p>
          <input
            type="range"
            min={0}
            max="100"
            value="40"
            className="range range-xs bg-primario"
          />{" "}
        </div>
        <p>
          TuneMatch usa estas preferencias para sugerir matches. Algunas
          sugerencias pueden no estar dentro de tus parámetros de preferencia
        </p>
      </div>
    </div>
  );
};

export default MatchSection;
