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
        <div className="container ml-auto mr-auto flex flex-col">
            <div className="w-full ">
                <label
                    htmlFor={name}
                    className="flex mb-1 text-sm font-medium text-white "
                >
                    {labelText}
                </label>
                <input
                    type={type || "text"}
                    {...(register && { ...register(name) })}
                    name={name}
                    className="px-4 py-1 bg-gradient-to-b from-[#c2d7dd] to-[#3e6b77] rounded-lg text-gray-700"
                    placeholder={placeholder}
                    onChange={change && change}
                />
            </div>
            <span className="text-red-600">{error ? error : "\u00A0"}</span>
        </div>
        
         
        
    );
}

export default Input