/* eslint-disable react/prop-types */
const ButtonGenero = ({
    text,
    onClick,

    
    }) => {

    const handleRegister = () => {
        onClick({ text });
    }

    return (
        <>
            <button
                className="bg-[#c329c5] hover:bg-[nuevo-color] active:bg-[#111011] rounded-3xl h-8 focus:outline-none focus:ring focus:border-purple-300"
                // className="bg-[#c329c5] rounded-3xl h-8"
                style={{ width: 'auto' }}
                onClick={handleRegister}
             

            >{text}</button>
        </>
    );
}

export default ButtonGenero;

// import React, { useState } from 'react';

// const ButtonGenero = ({ text, onClick }) => {
//     const [isClicked, setIsClicked] = useState(false);

//     const handleClick = () => {
//         setIsClicked(!isClicked);
//         onClick(text);
//     };

//     return (
//         <button
//             className={`${isClicked ? 'bg-black' : 'bg-[#c329c5]'
//                 } hover:bg-[nuevo-color] active:bg-[#111011] rounded-3xl h-8 focus:outline-none focus:ring focus:border-purple-300`}
//             style={{ width: 'auto' }}
//             onClick={handleClick}
//         >
//             {text}
//         </button>
//     );
// };

// export default ButtonGenero;















