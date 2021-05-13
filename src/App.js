import React, { useState, useEffect } from 'react';
import './App.css';
import ChatListItem from './components/ChatListItem';
import ChatAberto from './components/ChatAberto';
import ChatIntro from './components/ChatIntro';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

const App = () => {
  const [chatList, setChatList] = useState([
		{chatId: 1, nome: "Lucas", image: "https://www.w3schools.com/howto/img_avatar2.png"}, 
		{chatId: 2, nome: "Rodrigo", image: "https://www.w3schools.com/howto/img_avatar2.png"}, 
		{chatId: 3, nome: "Janley", image: "https://www.w3schools.com/howto/img_avatar2.png"},
		{chatId: 4, nome: "Edmar", image: "https://www.w3schools.com/howto/img_avatar2.png"}, 
	]);
	const [chatAtivo, setChatAtivo] = useState({});

  return (
    <div className="chat-window">
      <div className="chat-sideBar">
        <header>
          <img 
            src="https://www.w3schools.com/howto/img_avatar2.png" 
            alt="Imagem de perfil"
            className="header-img"
          />
          <div className="header-buttonsArea">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className="header-btn">
              <ChatIcon  style={{ color: '#919191' }} />
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
							onClick={()=>setChatAtivo(item)}							
            />
          ))}
        </div>
      </div>

      <div className="chat-contentArea">
				{chatAtivo.chatId ? (
					<ChatAberto />
				) : (
					<ChatIntro />
				)}
      </div>    
    </div>
  )
}

export default App;
