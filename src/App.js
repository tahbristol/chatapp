import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

import {tokenUrl, instanceLocator} from './config'
class App extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			messages: [],
			joinableRooms: [],
			joinedRooms: []
		}
	}
	
	componentDidMount() {
		const chatManager = new Chatkit.ChatManager({
			instanceLocator,
			userId: 'tylerchat',
			tokenProvider: new Chatkit.TokenProvider({
				url: tokenUrl
			})
		})
		
		chatManager.connect()
		.then(currentUser => {
			this.currentUser = currentUser
			this.getRooms()
		})
		.catch(err => console.log('error on connecting: ', err))
	}
	
	getRooms = () => {
		this.currentUser.getJoinableRooms()
		.then(joinableRooms => {
			this.setState({
				joinableRooms: joinableRooms,
				joinedRooms: this.currentUser.rooms
			})
		})
		.catch(err => console.log('error on joinableRooms: ', err))
	}
	
	subscribeToRoom = (roomId) => {
		this.currentUser.subscribeToRoom({
			roomId: roomId,
			hooks: {
				onNewMessage: message => {
					this.setState({
						messages: [...this.state.messages, message]  //return a new message array
					})
				}
			}
		})
	}
	
	sendMessage = (text) => {
		this.currentUser.sendMessage({
			text: text,
			roomId: 10418797
		})
	}
	
  render() {
    return (
      <div className="app">
				<div className="container">
					<div className="row">
						<div className="col-md-1">
							<RoomList 
								subscribeToRoom={this.subscribeToRoom}
								rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
							<NewRoomForm />
						</div>
						<div className="col-md-11">
							<MessageList messages={this.state.messages}/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="chatForms">
								<SendMessageForm sendMessage={this.sendMessage}/>
								</div>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default App;
