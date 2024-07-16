import MessageInput from "./MessageInput"
import Messages from "./Messages"
import {TiMessages} from "react-icons/ti"

const MessageContainer = () => {
    const noChatSelected= true;
    return (
        <div className="md:min-w-[450px] flex flex-col">
        {noChatSelected ? (<NoChatSelected/>) : (
                <>
                {/* Header */}
                    <div className="bg-blue-400 px-4 py-2 mb-2">
                    <span className="text-gray-900 font-bold text-black">Aditya</span>
                    </div>
                    <Messages/>
                    <MessageInput/>
                </>
        )}
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
	// const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 Aditya ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};