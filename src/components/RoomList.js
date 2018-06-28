import React from 'react'

export default class RoomList extends React.Component {
	render() {
		const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id)
		return (
			<div className="rooms-list">
				<h5>Rooms</h5>
				<ul>
				{orderedRooms.map(room => {
					const active = this.props.roomId === room.id ? "active" : ""
					return (
						<li key={room.id} className={"room " + active}>
							<a href="#" 
								onClick={() => this.props.subscribeToRoom(room.id)}
								># {room.name}</a>
						</li>
					)
				})}
				</ul>
			</div>
		)
	}
}