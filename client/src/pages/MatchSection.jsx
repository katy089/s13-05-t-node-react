import { useState } from "react";
import TinderCards from "../components/MatchSection/TinderCard.jsx";
import ToggleCheckbox from "../components/MatchSection/ToggleCheckbox.jsx";
import CustomButton from "../components/reusable-components/forms/CustomButton.jsx";
import MatchCardsList from "../components/MatchSection/MatchCardsList.jsx";
import MessageList from "../components/MatchSection/MessageList.jsx";

const MatchSection = () => {
  const [tabState, setTabState] = useState(0);

  return (
    <div className="max-w-screen grid grid-cols-7 grid-flow-auto h-2/4">
      {/* chats */}
      <div className="bg-terciario col-span-2">
        {/* <div className="bg-secundario grid grid-cols-3 p-3">
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
          {tabState === 1 ? <MessageList /> : <MatchCardsList />} */}

        <div
          role="tablist"
          className="tabs tabs-bordered bg-secundario text-base py-3"
        >
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab tab-white text-white pb-2 font-semi-bold text-base"
            aria-label="Matches"
            read-only
          />{" "}
          <div role="tabpanel" className="tab-content primario ">
            <MatchCardsList />
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab tab-white text-white pb-2 font-semi-bold text-base"
            aria-label="Mensajes"
            checked
            read-only
          />{" "}
          <div role="tabpanel" className="tab-content primario ">
            <MessageList />
          </div>
        </div>
      </div>

      {/* tinder card */}
      <div className="bg-slate-200 relative p-2 grid col-span-3 ">
        <TinderCards />
      </div>

      {/* datos matcheo */}

      <div className="bg-black font-semibold text-slate-200 text-sm items-center flex flex-col gap-3 p-4 col-span-2 ">
        <p className="font-bold text-base">Tipo de cuenta</p>
        <CustomButton
          className={
            "bg-primario uppercase rounded-lg flex justify-center p-2 w-full"
          }
          text={"gratuita"}
        />
        <p>Ajustes de descubrimiento</p>
        <div className="bg-primario flex flex-col justify-between  p-4 w-full rounded-xl capitalize">
          <p>Muéstrame</p>
          <div>
            <ToggleCheckbox text="Hombres" classInfo={"bg-slate-500 "} />
            <ToggleCheckbox text="Mujeres" classInfo={"bg-slate-500"} />
            <div className="bg-white opacity-45 p-1 my-2 rounded-full w-full"></div>{" "}
            <p className="text-sm flex items-end justify-between capitalize">
              Músicos
              <span className="badge badge-sm bg-black text-white p-2 ">
                instrumentos
              </span>
            </p>
            <p className="text-sm flex items-end justify-between capitalize">
              Fan N°1
              <span className="badge badge-sm bg-black text-white p-2">
                bandas
              </span>
            </p>
          </div>
        </div>
        <div className="bg-primario flex items-start p-4 w-full rounded-xl gap-3 capitalize flex-col">
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
        <div className="bg-primario flex items-start p-4 w-full rounded-xl gap-3 capitalize flex-col">
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
        <p className="text-xs text-slate-400 font-light">
          TuneMatch usa estas preferencias para sugerir matches. Algunas
          sugerencias pueden no estar dentro de tus parámetros de preferencia
        </p>
      </div>
    </div>
  );
};

export default MatchSection;
