import { Heart, ChevronLeft } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";

const ButtonTinder = ({ matchId, onLike }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    onLike(matchId); // Pasar matchId como argumento
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Cierra el modal
    setIsModalOpen(false);
  };

  return (
    <div className="min-w-full m-auto flex justify-between p-6">
      <button
        title="Continuar sin dar like"
        className="btn btn-circle btn-outline text-green-600 size-12 bg-[#0000007a] hover:bg-[#ffffffb7] hover:text-green-600 hover:border-green-600"
      >
        <ChevronLeft />
      </button>
      <button
        title="Dar like"
        className="btn btn-circle btn-outline text-pink-600 size-12 bg-[#0000007a] hover:bg-[#ffffffb7] hover:text-pink-600 hover:border-pink-600"
        onClick={handleClick}
      >
        <Heart />
      </button>
      {isModalOpen && (
        <dialog id="my_modal_2" className="modal" open>
          <div className="modal-box bg-[#f88ffc13] text-center py-10 transform -rotate-12">
            <h3 className="font-extrabold text-3xl uppercase text-[#F98FFC] -z-10">
              Like
            </h3>
            <h3 className="font-extrabold text-3xl uppercase text-white -mt-8">
              Like
            </h3>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={closeModal}>Cerrar</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

ButtonTinder.propTypes = {
  matchId: PropTypes.string.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default ButtonTinder;
