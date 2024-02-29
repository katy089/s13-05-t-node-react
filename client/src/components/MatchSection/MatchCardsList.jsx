import MatchCard from "./MatchCard.jsx"
const db = [
  {
    name: "Richard Hendricks",
    url: "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g",
    newMatch: true
  },
  {
    name: "Erlich Bachman",
    url: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    newMatch: true
  },
  {
    name: "Monica Hall",
    url: "https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=600",
    newMatch: true
  },
  {
    name: "Jared Dunn",
    url: "https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&w=600",
    newMatch: false
  },
  {
    name: "Dinesh Chugtai",
    url: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600",
    newMatch: false
  },
];


const MatchCardsList = () => {
  return (
    <div className="grid grid-cols-2 grid-flow-row-dense mt-4 min-h-screen bg-primario ">
      {db.map((item, i) => {
        return <MatchCard key={i} item={item} />;
      })}
    </div>
  );
}

export default MatchCardsList