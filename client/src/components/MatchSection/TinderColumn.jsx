// import React from "react";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import ButtonTinder from "./ButtonTinder";
import useTunematchList from "../../hooks/useTunematchList";
import useGetNombres from "../../hooks/useGetNombres";
import ScoreIndicator from "./ScoreIndicator";
import useLikes from "../../hooks/useLikes";
import { useSelector } from "react-redux";
import { getId } from "../../redux/authSlice";

const TinderColumn = () => {
  // eslint-disable-next-line no-unused-vars
  const [lastDirection, setLastDirection] = useState();
  const { matchList, loading, error } = useTunematchList();
  const { bandas, generos } = useGetNombres();
  const { isLiking, likeError, handleLike } = useLikes();
  const userId = useSelector(getId);
  console.log("Esto es matchList en tinderColumn:", matchList);

  const outOfFrame = (id) => {
    console.log(id + " left the screen!");
  };

  const handleClickLike = (matchId) => {
    handleLike(userId, matchId);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center  h-[80vh] w-4/5 sm:w-4/6 md:w-4/5 mx-auto mt-4 relative">
        <div className="absolute inset-0 z-0 backdrop-filter backdrop-blur-lg bg-[#00000015] rounded-2xl"></div>
        <div className="z-10">
          <span className="loading loading-spinner loading-lg text-secondary"></span>
        </div>
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;
  /**Acá disparar un alert en vez de esto*/
  // console.log("matchList:", matchList);

  return (
    <>
      <div className="cardContainer relative flex justify-center mt-2 m-auto">
        {matchList.length > 0 ? (
          matchList.map((match) => (
            <TinderCard
              className="swipe absolute bg-[#6C2B6D] rounded-2xl h-[75vh] w-4/5 sm:w-4/6 md:w-9/12"
              key={match.id}
              onSwipe={(dir) => {
                // ...
                if (dir === "right") {
                  handleLike(userId, match.id);
                }
              }}
              onCardLeftScreen={() => outOfFrame(match.id)}
              preventSwipe={["up", "down"]}
              flickOnSwipe={true}
            >
              <div
                style={{
                  backgroundImage:
                    match.fotos && match.fotos.length > 0
                      ? `url(${match.fotos[0]})`
                      : `url(https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                  width: "100%",
                  height: "60%",
                }}
                className="card relative  bg-center bg-cover p-5 shadow-md"
              >
                <h2 className="text-white">{match.nombre}</h2>
                <div className="absolute bottom-0 right-0 left-0 z-20">
                  <ButtonTinder
                    matchId={match.id}
                    onLike={handleClickLike}
                    isLiking={isLiking}
                    likeError={likeError}
                  />
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.0), rgba(0,0,0,0.8))`,
                  }}
                ></div>
              </div>

              <div className=" text-white p-4 flex flex-col font-light text-sm bg-[#6C2B6D] rounded-b-2xl">
                <p className="px-4 font-semibold">Preferencias Musicales</p>
                {/* Mostrar géneros si existen */}
                {match.generos && match.generos.length > 0 && (
                  <>
                    <div className="px-4 py-2 flex gap-3 capitalize">
                      {match.generos.slice(0, 3).map((generoId, index) => (
                        <span key={index}> #{generos[generoId]}</span>
                      ))}
                    </div>
                    <hr className="w-full rounded-full bg-[#FB98FD] h-[4px] border-[#FB98FD]" />
                  </>
                )}
                {/* Mostrar mensaje si no hay géneros */}
                {!match.generos ||
                  (match.generos.length === 0 && (
                    <p className="text-white font-light text-xs px-4 py-2">
                      No hay géneros disponibles
                    </p>
                  ))}
                {/* Mostrar bandas si existen */}
                {match.bandas && match.bandas.length > 0 && (
                  <div className="px-4 flex gap-3 capitalize my-4">
                    {match.bandas.slice(0, 3).map((bandaId, index) => (
                      <span key={index}> #{bandas[bandaId]}</span>
                    ))}
                  </div>
                )}
                {/* Mostrar mensaje si no hay bandas */}
                {!match.bandas ||
                  (match.bandas.length === 0 && (
                    <p className="text-white font-light text-xs px-4 py-2">
                      No hay bandas disponibles
                    </p>
                  ))}
                <hr className="w-full rounded-full bg-[#FB98FD] h-[4px] border-[#FB98FD]" />
                <div className="w-20 h-20 rounded-full bg-black flex items-center mx-auto mt-3">
                  <ScoreIndicator score={match.score} />
                </div>
              </div>
            </TinderCard>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default TinderColumn;
