import React from 'react'

export default class NewRoomForm extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			rooms: props.rooms
		}
	}
	
	render() {
		return (
			<div className="new-room-form">
				<form>
					<input
						type="text"
						placeholder="NewRoomForm"
						required />
						<button id="create-room-btn" type="submit">+</button>
				</form>
			</div>
		)
	}
}