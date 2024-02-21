
const ChatCards = ({ profilePicture, name, message }) => {
  return (
      <div className="flex justify-start">
          <div className=" h-14 min-w-14">
              <img src={profilePicture} className=" btn btn-circle bg-center bg-cover" />
       </div>
              <div>
                  <strong>{name}</strong>
                  <div>
                  <span className="">{message}</span>
                  </div>
              </div>
      </div>  )
}

export default ChatCards