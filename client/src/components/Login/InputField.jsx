import { useForm } from "react-hook-form"

const InputField = () => {

    const { register } = useForm({
        defaultValues: {
            email:"", 
            password:""
        }
    })

    return (
        <div>
            <div>
                
            </div>

        </div>
    )
}







export default InputField
