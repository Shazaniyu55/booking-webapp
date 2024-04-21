//App.js

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import img from '../assets/svg/user.svg'
const steps = [
	{
		id: '0',
		message: 'Hello! how may we assits you',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '1',
	},
  {
		id: '1',

		// Here we want the user
		// to enter input
		user: true,
		end: true,
	},
 
];

// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#f1b31c',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: img,
	floating: true,
};

function ChatRobot() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="Customer support chat"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default ChatRobot;
