import React, { useState, useEffect, useRef } from 'react';
import '../styles/ChatAberto.css';
import MenssagemItem from './MenssagemItem';
import EmojiPicker from 'emoji-picker-react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import MoodIcon from '@material-ui/icons/Mood';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import CloseIcon from '@material-ui/icons/Close';

const ChatAberto = ({user}) => {
	const body = useRef();

	let recognation = null;
	let speechRecognation = window.SpeechRecognition || window.webkitSpeechRecognition;
	if (speechRecognation !== undefined) {
		recognation = new speechRecognation();
	}

	const [emojiOpen, setEmojiOpen] = useState(false);
	const [text, setText] = useState('');
	const [listening, setListening] = useState(false);
	const [menssagens, setMessagens] = useState(
		[
			{	
				author: 123,
				body: "iuwhqof rqwehfoiweq uoifhu qwehfui",
				time: "19:00"
			}, 
			{
				author: 123,
				body: "iu whqofrqwe hfoiweq uoifhuqweh fui",
				time: "19:01"
			}, 
			{
				author: 1234,
				body: "iuw hqof rqwehf iwequoifhuqweh fui",
				time: "19:02"
			},
			{	
				author: 123,
				body: "iuwhqof rqwehfoiweq uoifhu qwehfui",
				time: "19:00"
			}, 
			{
				author: 123,
				body: "iu whqofrqwe hfoiweq uoifhuqweh fui",
				time: "19:01"
			}, 
			{
				author: 1234,
				body: "iuw hqof rqwehf iwequoifhuqweh fui",
				time: "19:02"
			},
			{	
				author: 123,
				body: "iuwhqof rqwehfoiweq uoifhu qwehfui",
				time: "19:00"
			}, 
			{
				author: 123,
				body: "iu whqofrqwe hfoiweq uoifhuqweh fui",
				time: "19:01"
			}, 
			{
				author: 1234,
				body: "iuw hqof rqwehf iwequoifhuqweh fui",
				time: "19:02"
			},
			{	
				author: 123,
				body: "iuwhqof rqwehfoiweq uoifhu qwehfui",
				time: "19:00"
			}, 
			{
				author: 123,
				body: "iu whqofrqwe hfoiweq uoifhuqweh fui",
				time: "19:01"
			}, 
			{
				author: 1234,
				body: "iuw hqof rqwehf iwequoifhuqweh fui",
				time: "19:02"
			},
			{	
				author: 123,
				body: "iuwhqof rqwehfoiweq uoifhu qwehfui",
				time: "19:00"
			}, 
			{
				author: 123,
				body: "iu whqofrqwe hfoiweq uoifhuqweh fui",
				time: "19:01"
			}, 
			{
				author: 1234,
				body: "iuw hqof rqwehf iwequoifhuqweh fui",
				time: "19:02"
			},
			{	
				author: 123,
				body: "iuwhqof rqwehfoiweq uoifhu qwehfui",
				time: "19:00"
			}, {
				author: 123,
				body: "iu whqofrqwe hfoiweq uoifhuqweh fui",
				time: "19:01"
			}, {
				author: 1234,
				body: "iuw hqof rqwehf iwequoifhuqweh fui",
				time: "19:02"
			}	
		]
	);

	useEffect(() => {
		if (body.current.scrollHeight > body.current.offsetHeight) {
			body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
		}
	}, [menssagens])

	const handleEmojiClick = (event, emojiObject) => {
		setText(text + emojiObject.emoji)
	}

	const handleOpenEmoji = () => {
		setEmojiOpen(true);
	}

	const handleCloseEmoji = () => {
		setEmojiOpen(false);
	}

	const handleSendCLick = () => {

	}

	const handleMicCLick = () => {
		if (recognation !== null) {
			recognation.onstart = () => {
				setListening(true);
			}
			recognation.onend = () => {
				setListening(false)
			}
			recognation.onresult = (e) => {
				setText(e.results[0][0].transcript);
			}
		}
		recognation.start();
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

			<div ref={body} className="chatAberto-body">
				{menssagens.map((item, key)=>(
					<MenssagemItem 
						key={key} 
						data={item}
						user={user}
					/>
				))}
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
					<div 
						className="chatAberto-btn" 
						onClick={() => handleCloseEmoji()} 
						style={{width: emojiOpen? '40px' : '0px'}}
					>
						<CloseIcon style={{color: '#919191'}} />
					</div>		
					<div className="chatAberto-btn" onClick={() => handleOpenEmoji()}>
						<MoodIcon style={{color: emojiOpen? '#009688' : '#919191'}}/>
					</div>
					<div className="chatAberto-btn">
						<AttachFileIcon style={{color: '#919191'}}/>
					</div>
				</div>

				<div className="chatAberto-inputArea">
					<input 
						className="chatAberto-input" 
						type="text" 
						placeholder="Digite uma menssagem"
						value={text}
						onChange={txt => setText(txt.target.value)}
					/>
				</div>

				<div className="chatAberto-direita">
					{text.length ? (
						<div className="chatAberto-btn" onClick={handleSendCLick}>
							<SendIcon style={{color: '#919191'}}/>
						</div>
					) : (
						<div className="chatAberto-btn" onClick={handleMicCLick}>
							<MicIcon style={{color: listening? '#126ece' : '#919191'}}/>
						</div>
					)}
				</div>
			</div>
		</div>		
	)
};

export default ChatAberto;
