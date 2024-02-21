// import { useEffect, useState } from "react";
import ChatCards from "../components/MatchSection/ChatCards.jsx"
import TinderCards from "../components/MatchSection/TinderCard.jsx"
import MatchAndMessages from "../components/MatchSection/MatchAndMessages.jsx"
// "../reusable-components/forms/CustomButton";

const MatchSection = () => {
    return (
        <div className="w-screen    bg-purple-400  ">
            <div className="grid grid-cols-3 grid-flow-col gap-4">
                <div className="bg-purple-400 ">
                    {/* chats */}
                    <MatchAndMessages />
                    {/* chats */}
                </div>

                <div className="bg-purple-100 flex p-5 w-{420px} items-center">
                    {/* tinder card */}
                    <TinderCards />
                    {/* tinder card */}
                </div>
                {/* espacio vacio */}
                <div className=" bg-inherit">
                </div>
                {/* espacio vacio */}
            </div>

        </div>
    )
}

export default MatchSection