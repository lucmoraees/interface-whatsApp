import React, { useState, useEffect } from 'react';
import './App.css';
import ChatListItem from './components/ChatListItem';
import ChatAberto from './components/ChatAberto';
import ChatIntro from './components/ChatIntro';
import NewChat from './components/NewChat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

const App = () => {
  const [chatList, setChatList] = useState([
		{chatId: 1, nome: "Matheus", image: "https://www.w3schools.com/howto/img_avatar2.png"}, 
		{chatId: 2, nome: "Rodrigo", image: "https://www.w3schools.com/howto/img_avatar2.png"}, 
		{chatId: 3, nome: "Janley", image: "https://www.w3schools.com/howto/img_avatar2.png"},
		{chatId: 4, nome: "Edmar", image: "https://www.w3schools.com/howto/img_avatar2.png"}, 
	]);
	const [chatAtivo, setChatAtivo] = useState({});
  const [user, setUser] = useState({
    id: 1234,
    image: 'https://www.w3schools.com/howto/img_avatar2.png',
    name: 'Lucas Moraes'
  });
  const [showNewChat, setShowNewChat] = useState(false);

  return (
    <div className="chat-window">
      <div className="chat-sideBar">
        <header>
          <img 
            src={user.image }
            alt="Imagem de perfil"
            className="header-img"
          />
          <div className="header-buttonsArea">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className="header-btn" onClick={() => setShowNewChat(true)}>
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className="chat-search"> 
          <div className="search-input">
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>

        <div className="chat-chatList">
          {chatList.map((item, key)=>(
            <ChatListItem 
              key={key}
              data={item}
              active={chatAtivo.chatId === item.chatId}
							onClick={()=>setChatAtivo(item)}							
            />
          ))}
        </div>
      </div>

      <div className="chat-contentArea">
				{chatAtivo.chatId ? (
					<ChatAberto user={user}/>
				) : (
					<ChatIntro />
				)}
      </div>
      <NewChat 
        chatList={chatList}
        user={user}
        visible={showNewChat}
        setVisible={setShowNewChat}
      />
    </div>
  )
}

export default App;
