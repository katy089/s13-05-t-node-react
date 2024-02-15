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
     
        <div className="flex justify-center items-center w-96  rounded-lg bg-gradient-to-b from-[#875388] to-[#5c255c] ">
                <div className="">
                    
                    <h1 className="text-center text-white p-2"> 
                    Crear Cuenta 
                    </h1>
                    
                    
                    <form
                        className="" 
                    >
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
                            {/* { <button
                                className=''
                                type='button'
                                //onClick={()=> }
                            >
                                {  <Eye /> }
                            </button> }
                             */}
                        </div>
                    <div className="flex justify-around mb-12 px-2">
                            <RegisterButton text='Iniciar Sesión'/>
                    </div>

                    </form>
                <div className="flex justify-center items-center">
                    <p >o continua con </p>
                       
                    </div>

                </div>
                

         
            

        </div>

        
    )

}

export default SignUp