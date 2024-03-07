import { useEffect, useState } from "react";
import PreferencesColumn from "./PreferencesColumn";
import TabColumn from "./TabColumn";
import TinderColumn from "./TinderColumn";
import Chat from "../Chat/Chat";

function Match() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatSection, setChatSection] = useState(null);

  useEffect(() => {
    if (selectedUser != null) {
      console.log("Actualizando chatSection para:", selectedUser.nombre);
      setChatSection(
        <div className="w-full h-[80vh] mt-4">
          <Chat selectedUser={selectedUser} />
        </div>
      );
    } else {
      setChatSection(null);
    }
  }, [selectedUser]);
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid md:grid-cols-12">
        <div className="hidden md:grid md:col-span-3">
          <TabColumn
            setSelectedUser={setSelectedUser}
            chatSection={chatSection}
            selectedUser={selectedUser}
          />
        </div>
        <div className="col-span-1 md:col-span-5">
          <TinderColumn />
        </div>
        <div className="hidden md:grid md:col-span-4 bg-black">
          <PreferencesColumn />
        </div>
      </div>
    </div>
  );
}

export default Match;
