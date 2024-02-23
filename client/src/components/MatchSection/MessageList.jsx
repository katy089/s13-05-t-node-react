import ChatCards from "./ChatCards.jsx";

const db = [
  {
    name: "Richard Hendricks",
    url: "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g",
    reed: false
  },
  {
    name: "Erlich Bachman",
    url: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    reed: false
  },
  {
    name: "Monica Hall",
    url: "https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=600",
    reed: true
  },
  {
    name: "Jared Dunn",
    url: "https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&w=600",
    reed: true
  },
  {
    name: "Dinesh Chugtai",
    url: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600",
    reed: true
  },
];

const MessageList = () => {
  return (
    <div className="bg-slate-100 p-2">
      <div className="   ">
        {
          <div className=" p- ">
            {db.map((item, i) => {
              return (
                <ChatCards
                  key={i}
                  item={item}
                  message={"If a dog chews shoes whose shoes does he choose?"}
                />
              );
            })}
          </div>
        }
      </div>
    </div>
  );
};

export default MessageList;
