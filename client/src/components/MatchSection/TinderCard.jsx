// import { LucideEye } from 'lucide-react'
import { useState } from "react";
import TinderCard from "react-tinder-card";
import TinderCardButtons from "./TinderCardButtons.jsx";
import "./MatchSection.css";

const db = [
  {
    name: "Richard Hendricks",
    url: "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g",
  },
  {
    name: "Erlich Bachman",
    url: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Monica Hall",
    url: "https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jared Dunn",
    url: "https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function TinderCards() {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    console.log(direction, nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  const music = {
    generes: ["rock", "pop", "country", "r&b", "tango"],
    artists: ["Jhony Cash", "The Eagles", "Bob Dylan"],
    ocupation: ["Guitarrista"],
    infoBio: 'Buscando músicos para colaborar en una canción estilo Country!!'
  };

console.log(music.generes.map((item) => {return item}));

  return (
    <>
      <div className="cardContainer relative flex justify-center mt-1 w-full">
        {characters.map((character) => (
          <TinderCard
            className="swipe absolute bg-secundario lg:bg-white h-[39rem] w-11/12 rounded-2xl"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
            preventSwipe={["left", "right"]}
          >
            <div
              style={{
                backgroundImage: "url(" + character.url + ")",
                width: "100%",
                height: "60%",
              }}
              className="card relative  bg-center bg-cover shadow-xl p-5 "
            >
              <h2 className="text-white">{character.name}, 27</h2>
              <p className="text-white font-light text-xs ">
                Buenos Aires a 50km
              </p>
              <p className="text-white font-light text-xs ">Guitarrista</p>
              <p>{lastDirection}</p>
              <div className="absolute bottom-0 right-0 left-0 ">
                <TinderCardButtons />
              </div>
            </div>

            <div className=" text-white p-4 flex flex-col font-light text-sm">
              <div className="p-1 flex gap-3 capitalize">
                {music.generes.map((item, i) => {
                  return <p key={i}>#{item}</p>;
                })}
              </div>
              <div className="bg-primario h-2 my-1 rounded-full w-full"></div>
              <div className="p-1 flex gap-3 capitalize">
                {music.artists.map((item, i) => {
                  return <p key={i}>#{item}</p>;
                })}
              </div>
              <div className="bg-primario h-2 my-1 rounded-full w-full"></div>
              <div className="p-1 flex gap-3 capitalize">
                {music.ocupation.map((item, i) => {
                  return <p key={i}>#{item}</p>;
                })}
              </div>
              <textarea
                placeholder="Bio"
                className="textarea textarea-ghost textarea-xl w-full max-w-xl  my-3"
              >
                {music.infoBio}
              </textarea>
            </div>
          </TinderCard>
        ))}
      </div>

      {/* {lastDirection ? (
          <h2 className="infoText absolute">You swiped {lastDirection}</h2>
        ) : (
          <h2 className="infoText absolute" />
        )}




        <div className="relative">relative</div>*/}
    </>
  );
}

export default TinderCards;
