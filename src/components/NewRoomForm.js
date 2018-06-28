import React from 'react'

export default class NewRoomForm extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			rooms: props.rooms,
			roomName: ''
		}
	}
	
	handleChange = (e) => {
		this.setState({
			roomName: e.target.value
		})
	}
	
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createRoom(this.state.roomName)
		this.setState({
			roomName: ''
		})
	}
	render() {
		return (
			<div className="new-room-form">
				<form 
					onChange={this.handleChange}
					onSubmit={this.handleSubmit}>
					<input
						value={this.state.roomName}
						type="text"
						placeholder="Create Room"
						required />
						<button id="create-room-btn" type="submit">+</button>
				</form>
			</div>
		)
	}
}