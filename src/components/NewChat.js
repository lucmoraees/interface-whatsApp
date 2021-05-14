import React, { useState } from 'react';
import '../styles/NewChat.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const NewChat = ({user, chatList, visible, setVisible }) => {
	const [listaContatos, setListaContatos] = useState(
		[
			{id: 100, avatar: "https://www.w3schools.com/howto/img_avatar2.png", nome: "Lucas"},
			{id: 101, avatar: "https://www.w3schools.com/howto/img_avatar2.png", nome: "Matheus"},
			{id: 102, avatar: "https://www.w3schools.com/howto/img_avatar2.png", nome: "Silmara"},
			{id: 102, avatar: "https://www.w3schools.com/howto/img_avatar2.png", nome: "Rodrigo"},
			{id: 104, avatar: "https://www.w3schools.com/howto/img_avatar2.png", nome: "Janley"},
			{id: 105, avatar: "https://www.w3schools.com/howto/img_avatar2.png", nome: "Edmar"}
		]
	)

	return (
		<div className="newChat" style={{left: visible? 0 : -415}}>
			<div className="newChat-head"> 
				<div	className="newChat-backButton" onClick={() => setVisible(false)}>
						<ArrowBackIcon style={{color: '#fff'}}/> 
				</div>
				<div className="newChat-title">
					Nova Conversa
				</div>
			</div> 
			<div className="newChat-list">
				{listaContatos.map((item, key) => (
					<div className="newChat-list-container" key={key}>
						<img className="newChat-list-avatar" src={item.avatar} alt="foto de contato"/>
						<div className="newChat-list-nome" >{item.nome}</div>
					</div>
				))}
			</div>
		</div>
	)
};

export default NewChat;
