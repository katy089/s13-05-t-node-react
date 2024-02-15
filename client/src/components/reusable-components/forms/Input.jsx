const Input =  ({
    /* eslint-disable */
    labelText,
    type,
    placeholder,
    name,
    change,
    register,
    error,
    /* eslint-disable */
}) => 
{
    return (
        <>
            <div className="">
                <label
                    htmlFor={name}
                    className="flex mb-1 text-sm font-medium  dark:text-white "
                >
                    {labelText}
                </label>
                <input
                    type={type || "text"}
                    {...(register && { ...register(name) })}
                    name={name}
                    className="px-6 py-1 bg-gradient-to-b from-[#c2d7dd] to-[#92a7ad] text-[#696969] sm:text-sm rounded-lg   "
                    placeholder={placeholder}
                    onChange={change && change}
                />
            </div>
            <span className="text-red-600">{error ? error : "\u00A0"}</span>
        </>
    );
}

export default Input