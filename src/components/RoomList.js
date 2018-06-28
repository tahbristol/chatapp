import React from 'react'

export default class RoomList extends React.Component {
	render() {
		return (
			<div className="rooms-list">
				<h5>Rooms</h5>
				<ul>
				{this.props.rooms.map(room => {
					return (
						<li key={room.id} className="room">
							<a onClick={() => this.props.subscribeToRoom(room.id)}
								href="#"># {room.name}</a>
						</li>
					)
				})}
				</ul>
			</div>
		)
	}
}