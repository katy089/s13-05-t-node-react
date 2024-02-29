
const MatchCard = (props) => {
  return (
    <div className="avatar mx-3 p-1 flex ">
      <div
        className={`/12 mt-4 rounded ${
          !!props.item.newMatch && " border-2 border-warning "
        }`}
      >
        <img src={props.item.url} />
      </div>
    </div>
  );
}

export default MatchCard