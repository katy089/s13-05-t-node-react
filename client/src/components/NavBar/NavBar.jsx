import { Link, useNavigate } from "react-router-dom";
import { PROFILE } from "./../../Router/Paths";
import { RiHome6Line } from "react-icons/ri";
import { FaHeart, FaRegBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import LOGOBLACK from "../../assets/LOGOBLACK.png";
import { useEffect, useRef, useState } from "react";
import { GrMenu } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { revokeAccess } from "../../auxFunctions/logoutFunctions";
import Swal from "sweetalert2";
import { getFotos } from "../../redux/authSlice";

function NavBar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const menuHamburguesaRef = useRef(null);
  const dispatch = useDispatch();
  const fotos = useSelector(getFotos);

  const profilePhoto = fotos?.length > 0 ? fotos[0] : null;

  const showMenuHandler = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    revokeAccess(dispatch)
      .then(() => {
        Swal.fire({
          icon: "success",
          background: "#2c2c2c",
          color: "white",
          title: "¡Sesión cerrada exitosamente!",
          text: "Tu sesión se ha cerrado correctamente.",
        }).then(() => {
          navigate("/");
        });
      })
      .catch(handleLogoutError);
  };

  const handleLogoutError = () => {
    console.error("Error al realizar el logout");
    Swal.fire({
      icon: "error",
      background: "#2c2c2c",
      color: "white",
      title: "Error al cerrar sesión",
      text: "Hubo un problema al cerrar sesión. Por favor, intenta de nuevo más tarde.",
    });
  };

  const closeMenuHandler = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      menuHamburguesaRef.current &&
      !menuHamburguesaRef.current.contains(event.target)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenuHandler);

    return () => {
      document.removeEventListener("click", closeMenuHandler);
    };
  }, []);

  return (
    <header className="navbar sticky top-0 z-30 w-screen bg-black p-0 shadow">
      <div className="flex w-full  items-center">
        <div className="flex items-center place-content-start w-1/2 ">
          <Link
            to={"/"}
            className="btn btn-xs md:h-8 bg-inherit min-h-min border-none hover:bg-inherit"
          >
            <img src={LOGOBLACK} alt="logo en home" />
          </Link>
        </div>
        <div className="flex items-center place-content-end space-x-2 w-full px-2">
          {/** Lista de Nav */}
          <ul className="md:flex md:flex-row hidden md:space-x-8">
            <li className="btn btn-sm hover:bg-slate-600 hover:text-white rounded-[30px] bg-gray-500">
              <RiHome6Line size={20} color="white" />
              <span className=" text-white hidden sm:flex">Feed</span>
            </li>
            <li className="btn btn-sm rounded-[30px] bg-teal-400 border-none shadow-none hover:bg-teal-800">
              <FaHeart size={20} color="white" />
              <span className="hidden sm:flex text-white">Conoce Gente!</span>
            </li>
            <li>
              <div className="p-1 rounded-[30px] flex items-center bg-slate-300 border-white border-[1.5px] hover:bg-slate-600 hover:text-white">
                <IoSearchOutline size={20} className="mx-1" />
                <input
                  type="text"
                  className="bg-transparent text-sm font-semibold w-1/2 px-2 outline-none hover:placeholder:text-slate-100"
                  placeholder="Buscar..."
                />
              </div>
            </li>
            <li className="w-8 h-8 flex items-center justify-center rounded-full bg-inherit border-none shadow-none bg-slate-300 cursor-pointer hover:bg-slate-600 hover:text-white">
              <FaRegBell size={20} />
            </li>
            <li className="w-8 h-8 flex items-center justify-center rounded-full bg-inherit border-none shadow-none bg-slate-300 cursor-pointer hover:bg-slate-600 hover:text-white">
              <FiMessageCircle size={20} />
            </li>
          </ul>
          {/**Menu navbar en movil */}
          <div
            className="md:hidden relative w-[45vw] sm:w-1/2"
            ref={menuHamburguesaRef}
          >
            <div className="flex place-content-end" onClick={showMenuHandler}>
              <GrMenu size={24} color="white" />
            </div>
            {showMenu ? (
              <ul
                className="absolute top-9 bg-black left-0 w-full mt-2 shadow-lg rounded-b-md py-3 px-1 space-y-1 text-xs"
                ref={menuRef}
              >
                <li className="flex items-center btn btn-sm justify-center min-h-min rounded-[30px] bg-gray-500 p-1 hover:bg-slate-600 hover:text-white">
                  <RiHome6Line size={20} color="white" />
                  <span className=" text-white flex">Feed</span>
                </li>
                <li className="flex items-center btn btn-sm justify-center min-h-min rounded-[30px] bg-teal-400 border-none shadow-none hover:bg-teal-800 p-1">
                  <FaHeart size={20} color="white" />
                  <span className=" text-white">Conoce Gente!</span>
                </li>
                <li className="">
                  <div className="p-[4px] rounded-[30px] flex items-center bg-slate-300 border-white border-[1.5px] hover:bg-slate-600 hover:text-white">
                    <IoSearchOutline size={20} className="mx-2 " />
                    <input
                      type="text"
                      className="bg-transparent text-sm font-semibold w-4/5 px-1 py-1 outline-none hover:placeholder:text-slate-100"
                      placeholder="Buscar"
                    />
                  </div>
                </li>
                <li className="btn rounded-full bg-inherit border-none shadow-none bg-slate-300 hover:bg-slate-600 hover:text-white mx-4 sm:mx-8">
                  <FaRegBell size={20} />
                </li>
                <li className="btn rounded-full bg-inherit border-none shadow-none bg-slate-300 hover:bg-slate-600 hover:text-white">
                  <FiMessageCircle size={20} />
                </li>
              </ul>
            ) : null}
          </div>

          {/**Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn hover:bg-inherit bg-inherit border-none btn-circle  avatar"
            >
              <div className="w-9 rounded-full">
                {profilePhoto ? (
                  <img alt="Perfil" src={profilePhoto} />
                ) : (
                  <img
                    alt="Foto de perfil por defecto"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box lg:w-52"
            >
              <li>
                <Link to={PROFILE} className="justify-between">
                  {" "}
                  Perfil
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Configuración</a>
              </li>
              <li className="cursor-pointer">
                <a onClick={handleLogout}>Cerrar sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
