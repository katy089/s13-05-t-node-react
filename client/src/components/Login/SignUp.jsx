import { useForm } from "react-hook-form"
import Input from "../reusable-components/forms/Input"
import RegisterButton from "../reusable-components/forms/RegisterButton"
// import { Eye } from "lucide-react"

const SignUp = () => {
    const {
        // handleSubmit,
        register,
        formState: {errors}        
    } = useForm()

    return (
        <div>
            <div className="flex h-max justify-center items-center">
                <div className="w.full md:w-1/2 p-4  md:h-screen lg:py-0">
                    <h1> Crear Cuenta </h1>
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
                                placeholder='email@example.com'
                                name='email'
                                register={register}
                                error={errors.email?.message}
                            />
                        </div>
                        <div>
                            <Input
                                labelText='Contraseña'
                                type= 'text'
                                placeholder='Introduce al menos 6 caracteres'
                                name='password'
                                register={register}
                                error={errors.password?.message}
                            />
                            {/* <button
                                className='relative self-end bottom-14 right-3'
                                type='button'
                                //onClick={()=> }
                            >
                                {  <Eye /> }
                            </button> */}
                            
                        </div>
                        <div className="flex W-full gap-2 justify-around pt-5 mb-12">
                            <RegisterButton text='Iniciar Sesión'/>
                        </div>

                    </form>

                </div>
                

            </div>
            

        </div>

        
    )

}

export default SignUp