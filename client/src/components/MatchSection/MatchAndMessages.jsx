import React from 'react'
import ChatCards from "./ChatCards.jsx"
import TinderCardButtons from "./TinderCardButtons.jsx"
import MatchCard from "./MatchCard.jsx"


const MatchAndMessages = () => {
  return (
                    <div className="card h-full p-2 bg-black shadow-xl items-center w-80 ">

                        <div className="card-body bg-slate-100 p-4 m-6 flex justify-between align-middle overflow-hidden">
                            <ChatCards
                                name={'Alicia'}
                                profilePicture={'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g'}
                                message={'hola'}
                            />
                            <ChatCards
                                name={'Alicia'}
                                profilePicture={'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g'}
                                message={'If a dog chews shoes whose shoes does he choose?'}
                            />
                            <ChatCards
                                name={'Alicia'}
                                profilePicture={'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g'}
                                message={'If a dog chews shoes whose shoes does he choose?'}
                            />
                            <ChatCards
                                name={'Alicia'}
                                profilePicture={'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g'}
                                message={'If a dog chews shoes whose shoes does he choose?'}
                            />
                            <ChatCards
                                name={'Alicia'}
                                profilePicture={'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g'}
                                message={'If a dog chews shoes whose shoes does he choose?'}
                            />

                        </div>

                    </div>
  )
}

export default MatchAndMessages