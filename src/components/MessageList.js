import React from 'react'
import Message from './Message'
export default class MessageList extends React.Component {
	render() {
		return (
			<div className="message-list">
				{this.props.messages.map((message, idx) => {
					return (
						<Message key={idx} 
							username={message.senderId}
							text={message.text} />
						
					)
				})}
			</div>
		)
	}
}