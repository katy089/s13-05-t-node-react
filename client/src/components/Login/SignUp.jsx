import { useForm } from "react-hook-form"
import Input from "../reusable-components/forms/Input"
import RegisterButton from "../reusable-components/forms/RegisterButton"
import { Eye } from "lucide-react"


const SignUp = () => {
        const {
            // handleSubmit,
            register,
            formState: {errors}
        } = useForm()

        return(
            <div>
                <div className="bg-black h-dvh">
                    
                    <div className="container flex items-center justify-center w-1/3 pt-5">

                            <form 
                                className="px-8 pt-6 pb-8 rounded-2xl bg-gradient-to-b from-[#875388] to-[#5c255c] "

                                action=""
                            >
                                <h1 className="text-center text-white">
                                    <b>Crear Cuenta</b>
                                </h1>
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
                                    type='text'
                                    placeholder='email@example.com'
                                    name='email'
                                    register={register}
                                    error={errors.email?.message}
                                />
                            </div>
                            <div>
                                <Input
                                    labelText='Contraseña'
                                    type='text'
                                    placeholder='Introduce al menos 6 caracteres'
                                    name='password'
                                    register={register}
                                    error={errors.password?.message}
                                />
                            </div>

                            </form>
                            

                        </div>

                    </div>

                    
                
            </div>
        )





}



// const SignUp = () => {
//     const {
//         // handleSubmit,
//         register,
//         formState: {errors}        
//     } = useForm()

//     return (
//         <div className="bg-black h-dvh">

//             < div className="flex justify-center items-center w-96  rounded-lg bg-gradient-to-b from-[#875388] to-[#5c255c] text-center">
//                 <div className="">
                    
//                     <h1 className="text-center text-white p-2"> 
//                     Crear Cuenta 
//                     </h1>
                    
                    
//                     <form
//                         className="text-center" 
//                     >
//                         <div>
//                             <Input
//                                 labelText='Nombre'
//                                 type='text'
//                                 placeholder='Introduce tu nombre'
//                                 name='name'
//                                 register={register}
//                                 error={errors.email?.message}
//                             />
//                         </div>
//                         <div>
//                             <Input
//                                 labelText='Email'
//                                 type='email'
//                                 placeholder='email@example.com'
//                                 name='email'
//                                 register={register}
//                                 error={errors.email?.message}
//                             />
//                         </div>
//                         <div className="flex flex-col ">
//                             <Input
//                                 labelText='Contraseña'
//                                 type= 'text'
//                                 placeholder='Introduce al menos 6 caracteres'
//                                 name='password'
//                                 register={register}
//                                 error={errors.password?.message}
//                             />
//                             { <button
//                                 className='relative self-end right-1 text-black'
//                                 type='button'
//                                 //onClick={()=> }
//                             >
//                                 {  <Eye /> }
//                             </button> }
                            
//                         </div>
//                     <div className="flex justify-around mb-12 px-2">
//                             <RegisterButton text='Iniciar Sesión'/>
//                     </div>

//                     </form>
//                 <div >
//                     <p >o continua con </p>                       
//                 </div>
//                 <div>
//                         <p >A continuar, aceptalos <b>Terminos de uso</b> y</p>
//                         <p ><b>Política de privacidad</b> de <b>TuneMatch</b></p>
//                 </div>

//                 </div>
                
//             </div> 
//         </div>

        
//     )

// }

export default SignUp