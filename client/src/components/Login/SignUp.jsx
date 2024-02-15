import { useForm } from "react-hook-form"
import Input from "../reusable-components/forms/Input"

const SignUp = () => {
    const {
        // handleSubmit,
        register,
        formState: {errors}        
    } = useForm()

    return (
        <div>
            <div className="flex h-max justify-center items-center">
                <div className="w.full md:w.1/2 ">
                    <h1> Crear una cuenta </h1>
                    <form >
                        <div>
                            <Input
                                labelText='Nombre'
                                type='text'
                                placeholder='Introduce tu nombre'
                                name='name'
                                register={register}
                                error={errors.email?.message}
                            />
                        </div>
                        <div>
                            <Input
                                labelText='Email'
                                type='email'
                                placeholder='Escriba su email'
                                name='email'
                                register={register}
                                error={errors.email?.message}
                            />
                        </div>

                    </form>

                </div>
                

            </div>
            

        </div>

        
    )

}

export default SignUp