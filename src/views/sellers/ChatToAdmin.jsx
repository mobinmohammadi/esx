import { useState } from "react";

const ChatToAdmin = () => {
  const [message, setMessage] = useState('');

  const sellers = [
    { id: 1, name: 'Ehsan Haji', active: true },
    { id: 2, name: 'Mobin Mohammadi', active: false },
    { id: 3, name: 'Arvin Aliali', active: false },
    { id: 4, name: 'Khaled Rasouli', active: false },
  ];

  const messages = [
    { id: 1, text: 'How are you?', sender: 'them', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, text: 'How are you?', sender: 'me' },
    { id: 3, text: 'How are you?', sender: 'them', avatar: 'https://i.pravatar.cc/150?img=12' },
    { id: 4, text: 'How are you?', sender: 'them', avatar: 'https://i.pravatar.cc/150?img=12' },
  ];

  return (
    <div className="rounded-md overflow-hidden w-full flex items-center justify-center font-sans">
      <div className="w-full  bg-[#6a5fdf] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-[80vh]">
        
       

        <div className="w-full  flex flex-col bg-[#333a45] relative">
          
          <div className="p-4 border-b border-gray-600 flex w-full items-center gap-3 bg-[#2c323c] z-10">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/150?img=11"
                alt="Current User"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#2c323c] rounded-full"></span>
            </div>
            <div>
              <h3 className="text-white text-sm font-bold">Ehsan Haji</h3>
              <p className="text-green-400 text-xs">Online</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end gap-2 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'them' && (
                  <img
                    src={msg.avatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full border border-white object-cover mb-1 shrink-0"
                  />
                )}

                <div
                  className={`max-w-[75%] md:max-w-[60%] p-3 rounded-lg text-sm shadow-sm ${
                    msg.sender === 'me'
                      ? 'bg-red-500 text-white rounded-br-none'
                      : 'bg-[#5b8ff9] text-white rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.sender === 'me' && (
                  <button className="w-8 h-8 rounded-full bg-[#4a515e] border border-gray-500 flex items-center justify-center hover:bg-gray-600 transition-colors mb-1 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#2c323c] border-t border-gray-600">
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Input Your Message"
                className="flex-1 bg-[#6a5fdf] text-white placeholder-[#b3aef0] px-4 py-2.5 rounded-md outline-none focus:ring-2 focus:ring-[#8b82ea] text-sm transition-all"
              />
              <button
                type="submit"
                className="bg-[#00d2d3] hover:bg-[#00b8b9] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatToAdmin;
