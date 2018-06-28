import React from 'react'

export default class SendMessageForm extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			message: ''
		}
	}
	handleChange = (e) => {
		this.setState({
			message: e.target.value
		})
	}
	
	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state.message)
		this.setState({
		})
	}
	render() {
		return (
			<form className="send-message-form"
				onSubmit={this.handleSubmit}>
				<input 
					onChange={this.handleChange}
					value={this.state.message}
					placeholder="Type message and hit ENTER"
					type="text" />
			</form>
		)
	}
}