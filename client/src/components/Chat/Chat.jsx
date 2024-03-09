import io from "socket.io-client";
import { useEffect, useState, useRef } from "react";
import { getId, selectIsLoggedIn } from "../../redux/authSlice";
import { useSelector } from "react-redux";
import { BsFillSendFill } from "react-icons/bs";
import { API_URL_CHAT } from "../../config/api";
import PropTypes from "prop-types";

const Chat = (props) => {
  const { selectedUser, datosUsuario } = props;
  // console.log("Esto es datosUsuario:", datosUsuario);

  // Messages States
  const [newMessage, setMessage] = useState("");
  const [messagesReceived, setMessagesReceived] = useState([]);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userId = useSelector(getId);
  const socket = useRef();

  //limpiar chat al cambiar de usuario
  useEffect(() => {
    setMessagesReceived([]);
  }, [selectedUser]);

  useEffect(() => {
    if (isLoggedIn) {
      socket.current = io.connect(API_URL_CHAT);
      //socket.current = io.connect("localhost:8080");
      socket.current.on("getMessage", (data) => {
        setMessagesReceived((prev) => [...prev, data]);
      });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      socket.current.emit("addUser", userId);
    }
  }, [isLoggedIn, userId]);

  // conversationId: 65e8d1c03082f0269bd7026c
  const sendMessage = async () => {
    if (!isLoggedIn || !selectedUser || !newMessage) return;
    const message = {
      sender: userId,
      text: newMessage,
      conversationId: "65e8d1c03082f0269bd7026c",
    };

    socket.current.emit("sendMessage", {
      senderId: message.sender,
      receiverId: selectedUser.id,
      text: message.text,
    });
    setMessagesReceived([
      ...messagesReceived,
      { senderId: message.sender, text: message.text },
    ]);
    setMessage("");
  };

  const isUserMessage = (senderId) => {
    return senderId === userId;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage(newMessage);
    }
  };

  return (
    <div className="border-2 rounded-lg mt-6 sm:mt-0 h-[85vh] sm:max-h-[95%] flex flex-col bg-gray-200">
      <div className="w-full bg-[#BB7EBC] h-20 shadow-lg  rounded-t-lg flex items-center space-x-4">
        <div className="pl-4">
          {datosUsuario &&
          datosUsuario.find((user) => user.id === selectedUser.id)?.fotos[0] ? (
            <img
              alt="Perfil"
              src={
                datosUsuario.find((user) => user.id === selectedUser.id)
                  ?.fotos[0]
              }
              className="object-cover rounded-full w-12 h-12 ring"
            />
          ) : (
            <img
              alt="Foto de perfil por defecto"
              src="https://www.liblogo.com/img-logo/wh38f34e-whatsapp-logo-file-whatsapp-svg-wikipedia.png"
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
          {messagesReceived.map((m) => {
            if (isUserMessage(m.senderId)) {
              return (
                <div key={m.text} className="flex justify-end">
                  <p className="py-2 px-4 max-w-64 break-words bg-lime-400 text-slate-600 rounded-t-2xl rounded-bl-2xl my-2">
                    {m.text}
                  </p>
                </div>
              );
            } else {
              return (
                <div key={m.text} className="flex justify-start">
                  <p className="py-2 px-4 max-w-64 break-words bg-white text-slate-600 rounded-t-2xl rounded-br-2xl my-2">
                    {m.text}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="bottom-0 bg-white h-12 flex items-center px-4 justify-between">
        <input
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          onKeyDown={handleKeyPress}
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
};

Chat.propTypes = {
  datosUsuario: PropTypes.array,
  tunematch: PropTypes.array,
  selectedUser: PropTypes.object,
};

export default Chat;
