import React from 'react';
import '../styles/ChatListItem.css'

const ChatListItem = ({onClick, active, data}) => {
  return (
    <div 
      className={`chatListItem-container ${active? 'active' : ''}`}
      onClick={onClick}
    >
      <img 
        className="chatListItem-avatar" 
        src={data.image}  
        alt="" 
      />
      <div className="chatListItem-conteudo" >
        <div className="chatListItem-conteudo-cima">
          <div className="chatListItem-nome" >
            {data.nome}
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
