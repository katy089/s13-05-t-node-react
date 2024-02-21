import React from 'react'
import MatchCard from "./MatchCard.jsx"


const MatchCardsList = () => {
  return (
      <div className=" ">
        <div className="bg-slate-100 p-4  grid grid-cols-2   ">
           <MatchCard />
           <MatchCard />
           <MatchCard />
           <MatchCard />
           <MatchCard />
           <MatchCard />
           <MatchCard />
           <MatchCard />
        </div>
       </div>
  )
}

export default MatchCardsList