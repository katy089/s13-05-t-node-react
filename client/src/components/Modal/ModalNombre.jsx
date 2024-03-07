import { FaPenToSquare } from "react-icons/fa6";
import { useState } from "react";
import useName from "../../hooks/useName";
import { useForm } from "react-hook-form";
import Input from "../reusable-components/forms/Input";
import RegisterButton from "../reusable-components/forms/RegisterButton";
import { getNombre } from "../../redux/authSlice";
import { useSelector } from "react-redux";

const ModalNombre = () => {
  console.log('Este es el modal que no hace nada')
  const datos = useSelector((state) => state.auth);
  const nombre = useSelector(getNombre);

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const { handleRename } = useName();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    handleRename(data);
  };

  return (
    <>
      <button className="rounded-full" onClick={openModal}>
        <FaPenToSquare color="#BB7EBC" />
      </button>
      {showModal && (
        <dialog className="modal" open>
          <div
            className=" bg-[#6C2B6D] px-4 pt-4 pb-2  rounded-lg 
                     w-90 md:w-80 "
          >
            {/* close modal modificado para aparecer en esquina superior derecha */}
            <div className="flex p- mb-3 w-full ">
              <p className="text-normal text-white font-medium text-center grow">
                Cambia tu nombre
              </p>
              <div className=" z-10 cursor-pointer float-end">
                <button
                  className="btn btn-circle btn-ghost btn-sm bg-[#BB7EBC] text-white"
                  onClick={closeModal}
                >
                  ✕
                </button>
              </div>
            </div>

            <form action="onSubmit pb-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  type="text"
                  placeholder={nombre}
                  name="name"
                  register={register}
                  error={errors.name?.message}
                />
              </div>

              <div
                className="my-4 bg-[#BB7EBC] hover:text-[#BB7EBC] btn border-none w-full text-white rounded-3xl"
                onClick={() => {
                  closeModal();
                }}
              >
                <RegisterButton text="Guardar" />
              </div>
            </form>

            {/* <form action="onSubmit" onSubmit={handleSubmit(onSubmit)}>
                            <p className="text-center text-3xl pb-2">Cambiar nombre</p>
                            <div>
                                <Input
                                    labelText="Nombre"
                                    type="text"
                                    placeholder="Introduce tu nombre"
                                    name="name"
                                    register={register}
                                    error={errors.email?.message}
                                   
                                />
                            </div>

                           
                            
                        </form> */}
          </div>
        </dialog>
      )}
    </>
  );
};

export default ModalNombre;
