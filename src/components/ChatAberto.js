import React, { useState } from 'react';
import '../styles/ChatAberto.css';
import EmojiPicker from 'emoji-picker-react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import MoodIcon from '@material-ui/icons/Mood';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import CloseIcon from '@material-ui/icons/Close';

const ChatAberto = () => {
	const [emojiOpen, setEmojiOpen] = useState(false);

	const handleEmojiClick = () => {
		
	}

	return (
		<div className="chatAberto">
			<div className="chatAberto-header">
				<div className="chatAberto-infosusuario">
					<img 
						src="https://www.w3schools.com/howto/img_avatar2.png" 
						alt="Foto de perfil" 
						className="chatAberto-avatar" 
					/>
					<div className="chatAberto-nome" >Lucas Moraes</div>
				</div>
				<div className="chatAberto-buttons">
					<div className="chatAberto-btn">
						 <SearchIcon style={{color: '#919191'}}/>
					</div>
					<div className="chatAberto-btn">
						 <AttachFileIcon style={{color: '#919191'}}/>
					</div>
					<div className="chatAberto-btn">
						 <MoreVertIcon style={{color: '#919191'}}/>
					</div>
				</div>	
			</div>

			<div className="chatAberto-body">
				
			</div>

			<div 
				className="chatAberto-emojiArea" 
				style={{height: emojiOpen? '200px' : '0px'}}
			> 
				<EmojiPicker
				 	onEmojiClick={handleEmojiClick}
					disableSearchBar
					disableSkinTonePicker
					pickerStyle={{width: 'auto'}}
				/>
			</div>

			<div className="chatAberto-footer">
				<div className="chatAberto-esquerda">
					{emojiOpen? (
						<div className="chatAberto-btn" onClick={() => setEmojiOpen(!emojiOpen)}>
							<CloseIcon style={{color: '#919191'}}/>
						</div>					
					) : (
						<div className="chatAberto-btn" onClick={() => setEmojiOpen(!emojiOpen)}>
							<MoodIcon style={{color: '#919191'}}/>
						</div>
					)}
					<div className="chatAberto-btn">
						<AttachFileIcon style={{color: '#919191'}}/>
					</div>
				</div>

				<div className="chatAberto-inputArea">
					<input 
						className="chatAberto-input" 
						type="text" 
						placeholder="Digite uma menssagem"
					/>
				</div>

				<div className="chatAberto-direita">
					<div className="chatAberto-btn">
						<SendIcon style={{color: '#919191'}}/>
					</div>
					<div className="chatAberto-btn">
						<MicIcon style={{color: '#919191'}}/>
					</div>
				</div>
			</div>
		</div>		
	)
};

export default ChatAberto;
