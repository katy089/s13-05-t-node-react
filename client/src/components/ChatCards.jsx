
const ChatCards = ({ profilePicture, name, message }) => {
  return (
      <div className="flex items-center">
          <img src={profilePicture} className="size-14 btn btn-circle bg-center bg-contain mr-2"/>
              <div>
                  <strong>{name}</strong>
                  <div>
                  <span className="">{message}</span>
                  </div>
              </div>
      </div>  )
}

export default ChatCards