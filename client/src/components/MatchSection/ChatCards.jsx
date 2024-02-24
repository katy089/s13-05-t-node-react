
const ChatCards = (props) => {
  return (
    <div className="flex justify-start  m-3 p-4">
      <div className=" h-14 min-w-14">
        <img
          src={props.item.url}
          className="btn btn-circle bg-center bg-cover"
        />
      </div>
      <div className={`${!!props.item.reed && "text-slate-400"}`}>
        <strong>{props.item.name}</strong>
        <div>
          <span className="line-clamp-1">{props.message}</span>
        </div>
      </div>
    </div>
  );
}

export default ChatCards