// import { useEffect, useState } from "react";

import TinderCards from "../components/TinderCard"

// "../reusable-components/forms/CustomButton";

const MatchSection = () => {
    return (
        <div className="w-screen min-h-[140vh] sm:min-h-screen  bg-purple-400  ">
            <div className="grid grid-cols-3 grid-flow-col gap-4">
                <div className="bg-purple-900 ">
                    {/* chats */}
                    <div className="card h-full p-2 bg-black shadow-xl items-center  ">
                        <div className="card-body bg-slate-400 p-4 m-6">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>

                    </div>
                    {/* chats */}
                </div>

                <div className="bg-white flex p-5 w-{420px} h-screen  items-center  ">
                    {/* tinder card */}
                    {/* <div className="card  bg-base-100 shadow-xl ">
                        <figure style={{
                            'position': 'relative',
                            'maxHeight': '50vh',
                            'minWidth': '35vw',
                            'objectFit': 'cover',
                            'borderRadius': 'inherit !important'
                        }}

                        ><img
                                style={{
                                }}
                                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="PersonName" /></figure>
                        <div style={{
                            'position': 'absolute',
                        }}

                            className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div> */}
                    <TinderCards />
                    {/* tinder card */}
                </div>

                {/* espacio vacio */}
                <div className=" bg-purple-900">
                </div>
                {/* espacio vacio */}

            </div>

        </div>
    )
}

export default MatchSection