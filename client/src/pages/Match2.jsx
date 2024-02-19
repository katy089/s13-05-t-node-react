// import { useEffect, useState } from "react";

// "../reusable-components/forms/CustomButton";

const MatchSection = () => {
    return (
        <div className="w-screen min-h-[140vh] sm:min-h-screen  bg-purple-700 p-6 inline-grid grid-cols-3 gap-4">
           
            <div className="card w-96 h-full p-2 bg-black shadow-xl items-center">
                <div className="card-body bg-slate-400 p-4 m-6">
                    <h2 className="card-title">Chats!</h2>
                    <p>poner aqui las chatCards</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            
            <div className=" justify-center items-center bg-base-100 ">

                <div className="card  w-96 bg-base-100 shadow-xl items-center">
                    <figure>
                        {/*     position: relative; base para el texto */}
                        {/* .card (where:figure:first-child) border-end-start-radius: inherit;
                        border-end-end-radius: inherit; */}

                        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                    {/* max-width: 100%;
                            max-height: 400px;
                            min-width: 400px;
                            object-fit: cover; */}
                    <div className="card-body">
                        {/* position: absolute; con esto se superpone a la imagen */}
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>




            </div>
            {/* <div className="  bg-base-100 shadow-xl ">
               <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                 <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div> 
            </div> */}

        </div>
    )
}

export default MatchSection