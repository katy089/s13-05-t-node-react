
const MatchCard = (props) => {
  return (
    <div className={`${!props.item.newMatch && " border-slate-100"}`}>
      <div className="avatar ">
        <div className="w-44 rounded border-red-600">
          <img src={props.item.url} />
        </div>
      </div>
    </div>
  );
}

export default MatchCard