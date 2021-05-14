import React from 'react';
import '../styles/MenssagemItem.css'

const MenssagemItem = ({data, user}) => {
	return (
		<div 
			className="menssagemLine"
			style={{
				justifyContent: user.id === data.author? 'flex-end' : 'flex-start',
			}}
		>
			<div 
				className="menssagemLine-container"
				style={{
					backgroundColor: user.id === data.author? '#dcf8c6' : '#fff'
				}}
			>
				<div className="menssagemLine-texto">{data.body}</div>
				<div className="menssagemLine-horario">{data.time}</div>
			</div>
		</div>
	)
}

export default MenssagemItem;
