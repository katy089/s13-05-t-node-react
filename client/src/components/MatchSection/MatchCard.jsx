
const MatchCard = (props) => {
  return (
    <div className="">
      <div className="avatar">
        <div className="w-44 rounded">
          <img src={props.item.url} />
        </div>
      </div>
    </div>
  );
}

export default MatchCard