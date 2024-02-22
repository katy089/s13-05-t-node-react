import ChatCards from "./ChatCards.jsx"

const ChatList = () => {
  return (
                        <div className=" bg-slate-100 p-4 h-full  ">
                            <ChatCards
                                name={'Alicia'}
                                profilePicture={'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g'}
                                message={'hola'}
                            /> 
                            <ChatCards
                                name={'Alicia'}
                                profilePicture={'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g'}
                                message={'If a dog chews shoes whose shoes does he choose?'}
                            /> 
                            <ChatCards
                                name={'Alicia'}
                                profilePicture={'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g'}
                                message={'If a dog chews shoes whose shoes does he choose?'}
                            />
                            <ChatCards
                                name={'Alicia'}
                                profilePicture={'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g'}
                                message={'If a dog chews shoes whose shoes does he choose?'}
                            />
                            <ChatCards
                                name={'Alicia'}
                                profilePicture={'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g'}
                                message={'If a dog chews shoes whose shoes does he choose?'}
                            />

                        </div>
  )
}

export default ChatList
