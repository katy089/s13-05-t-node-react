
const MatchCard = (props) => {
  return (
    <div className="">
      <div className="avatar ">
        {/* <div
          className={`${
            !!props.item.newMatch && "badge badge-primary-200 badge-xs "
          }`}
        ></div> */}

        {/* <div className={` ${!!props.item.newMatch && "indicator  "}`}>
          <span className="indicator-item badge badge-secondary"></span>
          <div className="grid w-32 h-32 bg-base-300 place-items-center">
            <div
              className={`w-44 rounded ${
                !!props.item.newMatch && " border-2 border-purple-200 "
              }`}
            >
              <img src={props.item.url} />
            </div>
          </div>
        </div> */}

        <div
          className={`w-40 rounded ${
            !!props.item.newMatch && " border-2 border-purple-200 "
          }`}
        >
          <img src={props.item.url} />
        </div>
      </div>
    </div>
  );
}

export default MatchCard