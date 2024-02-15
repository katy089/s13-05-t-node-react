//eslint-disable-next-line
const RegisterButton = ({ text }) => {
    return (
        <div>
            <button
                type="submit"
                className=" w-32 text-white  font-medium rounded-3xl text-lg p-1.5 text-center bg-[#bb7ebc] "
            >
              {text}
            </button>
        </div>
    )

}

export default RegisterButton