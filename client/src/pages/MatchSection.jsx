// import { useEffect, useState } from "react";
// import ChatCards from "../components/MatchSection/ChatCards.jsx"
import TinderCards from "../components/MatchSection/TinderCard.jsx";
// import TinderCardButtons from "../components/MatchSection/TinderCardButtons.jsx";
import MatchCardsList from "../components/MatchSection/MatchCardsList.jsx";
import { useState } from "react";
import MessageList from "../components/MatchSection/MessageList.jsx";
// import VerticalCarousel from "../components/MatchSection/VerticalCarousel.jsx";
// import TabTitle from "../components/MatchSection/TabTitle.jsx"
// "../reusable-components/forms/CustomButton";

const MatchSection = () => {
  const [tabState, setTabState] = useState(0);

  return (
    <div className="w-screen grid grid-cols-3 grid-flow-dense gap-5 ">
      {/* chats */}
      <div className="bg-terciario">
        <div className="bg-secundario grid grid-cols-3 p-3">
          <h2
            onClick={() => setTabState(0)}
            className={`hover:underline-offset: 8px ${
              tabState === 0 && "text-underline-offset: 8px"
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
      {/* chats */}
      <div className="bg-red-100 p-8">
        {/* tinder card */}
        <TinderCards />
        {/* <TinderCardButtons /> */}
        {/* tinder card */}
      </div>

      {/* espacio vacio */}
      <div className=" bg-inherit">
        <MatchCardsList />
      </div>
      {/* espacio vacio */}
    </div>
  );
};

export default MatchSection;
