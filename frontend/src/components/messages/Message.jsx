import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from "../../utils/extractTime";
import './Message.css';

const Message = ({message}) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500 text-white" : "bg-white text-black";
    const formattedTime = extractTime(message.createdAt);

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profilePic} alt="Chat Avatar"/>
                </div>
            </div>
            <div className={`chat-bubble ${bubbleBgColor} pb-2`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
        </div>
    )
}

export default Message