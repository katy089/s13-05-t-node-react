import io from "socket.io-client";
import { useEffect, useState, useRef } from "react";
import { getId, selectIsLoggedIn } from "../../redux/authSlice";
import { useSelector } from "react-redux";
import { getFotos } from "../../redux/authSlice";
import { BsFillSendFill } from "react-icons/bs";
import { API_URL_CHAT } from "../../config/api";

const Chat = (props) => {
  const { selectedUser } = props;
  // Messages States
  const [newMessage, setMessage] = useState("");
  const [messagesReceived, setMessagesReceived] = useState([]);
  /**Ajustar esto para que llegue la foto del usuario matcheado */
  const fotos = useSelector(getFotos);
  const profilePhoto = fotos?.length > 0 ? fotos[0] : null;

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userId = useSelector(getId);
  const socket = useRef();

  //limpiar chat al cambiar de usuario
  useEffect(() => {
    setMessagesReceived([]);
  }, [selectedUser]);

  useEffect(() => {
    if(isLoggedIn){
      socket.current = io.connect(API_URL_CHAT);
      //socket.current = io.connect("localhost:8080");
      socket.current.on("getMessage", (data) => {
        setMessagesReceived((prev) => [...prev, data]);
      });
    }
  }, [])

  useEffect(() => {
    if(isLoggedIn){
      socket.current.emit("addUser", userId);
    }
  }, [])

  // conversationId: 65e8d1c03082f0269bd7026c
  const sendMessage = async (e) => {
    e.preventDefault();
    const message = {
      sender: userId,
      text: newMessage,
      conversationId: "65e8d1c03082f0269bd7026c"
    };

    socket.current.emit("sendMessage", { 
      senderId: message.sender,
      receiverId: selectedUser.id,
      text: message.text
    });
    setMessagesReceived([...messagesReceived, { senderId: message.sender, text: message.text }]);
    setMessage("")
  };

  const isUserMessage = (senderId) => {
    return senderId === userId;
  };

  return (
    <div className="border-2 rounded-lg mt-6 sm:mt-0 h-[85vh] sm:max-h-[95%] flex flex-col bg-gray-200">
      <div className="w-full bg-[#BB7EBC] h-20 shadow-lg  rounded-t-lg flex items-center space-x-4">
        <div className="pl-4">
          {profilePhoto ? (
            <img
              alt="Perfil"
              src={profilePhoto}
              className="object-cover rounded-full w-12 h-12 ring"
            />
          ) : (
            <img
              alt="Foto de perfil por defecto"
              src="https://images.pexels.com/photos/4472043/pexels-photo-4472043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="object-cover rounded-full w-12 h-12 ring ring-slate-200 ring-opacity-60"
            />
          )}
        </div>
        <div>
          <h1 className="text-white font-semibold">{selectedUser.nombre}</h1>
        </div>
      </div>
      <div className="flex-grow overflow-auto">
        <div className="px-2 flex flex-col">
          {
            messagesReceived.map((m) => {
              if(isUserMessage(m.senderId)){
                return <div className="flex justify-end">
                          <p className="py-2 px-4 max-w-min bg-lime-400 text-slate-600 rounded-t-2xl rounded-bl-2xl my-2">
                            {m.text}
                          </p>
                        </div>; 
              } else {
                return  <div className="flex justify-start">
                          <p className="py-2 px-4 max-w-min bg-white text-slate-600 rounded-t-2xl rounded-br-2xl my-2">
                            {m.text}
                          </p>
                        </div>; 
              }
            })
          }
          </div>
      </div>
      <div className="bottom-0 bg-white h-12 flex items-center px-4 justify-between">
        <input
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          value={newMessage}
          className="bg-transparent text-slate-600 outline-none"
        />
        <button
          onClick={sendMessage}
          title="Enviar mensaje"
          className="hover:text-[#BB7EBC]"
        >
          <BsFillSendFill />
        </button>
      </div>
    </div>
  );
}

export default Chat;
