import{ useState } from 'react';

/* eslint-disable react/prop-types */
const ButtonGenero = ({ 
    text, 
    onClick 
}) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        onClick(text);
    };

    return (
        <button
            className={`${isClicked ? 'bg-[#1f1e1f]' : 'bg-[#c329c5]'
                } hover:bg-[nuevo-color] active:bg-[#111011] rounded-3xl h-8 focus:outline-none focus:ring focus:border-purple-300`}
            style={{ width: 'auto' }}
            onClick={handleClick}
        >
            {text}
        </button>
    );

};

export default ButtonGenero;















