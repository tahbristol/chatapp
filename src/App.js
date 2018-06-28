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
			currentUser.subscribeToRoom({
				roomId: 10418797,
				hooks: {
					onNewMessage: message => {
						console.log('message.text:', message.text)
						this.setState({
							messages: [...this.state.messages, message]  //return a new message array
						})
					}
				}
			})
		})
	}
  render() {
    return (
      <div className="app">
				<div className="container">
					<div className="row">
						<div className="col-md-1">
							<RoomList />
							<NewRoomForm />
						</div>
						<div className="col-md-11">
							<MessageList messages={this.state.messages}/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="chatForms">
								<SendMessageForm />
								</div>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default App;
