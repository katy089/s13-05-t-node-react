/* eslint-disable react/prop-types */
import { useState } from "react";
import useName from "../../hooks/useName";

import { FaPenToSquare } from "react-icons/fa6";

export default function ModalComponent({ titulo, id, generos }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [nombre, setNombre] = useState("");

  const { handleUpdateName } = useName();

  const onChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const onSubmit = () => {
    handleUpdateName(nombre);
    // Opcionalmente resetea el valor de nombre o cierra el modal aquí
    setNombre("");
    closeModal(); // Suponiendo que quieras cerrar el modal después de enviar
  };
  return (
    <>
      <button className="rounded-full" onClick={openModal}>
        <FaPenToSquare color="#BB7EBC" />
      </button>
      {showModal && (
        <dialog id={`my_modal_${id}`} className="modal" open>
          <div className="modal-box flex w-100 flex-col items-center justify-center overflow-auto overflow-x-hidden p-2">
            <h3 className="text-xl font-bold">Cambia tu {titulo} </h3>
            {id === 1 ? (
              <div className="mt-4 space-y-4">
                <button
                  className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
                  onClick={closeModal}
                >
                  ✕
                </button>
                <div className=" flex-col ">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="input input-bordered w-full max-w-xs"
                    value={nombre}
                    onChange={onChangeNombre}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary mt-4"
                  onClick={onSubmit}
                >
                  Enviar
                </button>
              </div>
            ) : id === 4 ? (
              <form className="mt-4 space-y-4">
                <button
                  className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
                  onClick={closeModal}
                >
                  ✕
                </button>
                <div className=" flex-col">
                  <textarea
                    placeholder="Bio"
                    className="textarea textarea-bordered  textarea-lg  max-h-full w-full resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Enviar
                </button>
              </form>
            ) : id === 5 ? (
              <form className="mt-4 space-y-4 justify-center items-center">
                <button
                  className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
                  onClick={closeModal}
                >
                  ✕
                </button>
                <div className="flex  gap-5">
                  {generos.map((gender, index) => (
                    <span
                      key={index}
                      className={`inline-block cursor-pointer text-sm font-bold rounded-full px-3 py-1 ${
                        gender === "Mujer" ? "bg-pink-700" : "bg-blue-600"
                      }`}
                    >
                      {gender}
                    </span>
                  ))}
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Enviar
                </button>
              </form>
            ) : null}
          </div>
        </dialog>
      )}
    </>
  );
}
