import React from 'react'

const Message = (props) => {
		return (
			<div className="message">
			<h6>{props.username} said: </h6>
			<p>&nbsp;{props.text}</p>
			</div>
		)
}

export default Message
