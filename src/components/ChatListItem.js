import React from 'react';
import '../styles/ChatListItem.css'

const ChatListItem = ({onClick}) => {
  return (
    <div 
      className="chatListItem-container"
      onClick={onClick}
    >
      <img 
        className="chatListItem-avatar" 
        src="https://www.w3schools.com/howto/img_avatar2.png"  
        alt="" 
      />
      <div className="chatListItem-conteudo" >
        <div className="chatListItem-conteudo-cima">
          <div className="chatListItem-nome" >
            Lucas Moraes
          </div>
          <div className="chatListItem-horario" >
            13:30
          </div>
        </div>
        <div className="chatListItem-conteudo-baixo">
          <div className="chatListItem-ultimasMenssagem" >
            <p>
              Opa, tudo bem?fagdfgdfgfdgdfgfdgdfgjgioufgiufdhgiuhgiudfhguhfugufidhuifghu
            </p>
          </div>
          <div className="chatListItem-numMenssagens">
            20
          </div>
        </div>
      </div>            
    </div>
  )
}

export default ChatListItem;
