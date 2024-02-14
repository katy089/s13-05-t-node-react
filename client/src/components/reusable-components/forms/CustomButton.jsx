// eslint-disable-next-line react/prop-types
function CustomButton({ onClick, text, icon: Icon }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className="flex items-center btn btn-xs sm:btn-sm md:btn-md"
      onClick={handleClick}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
}

export default CustomButton;
