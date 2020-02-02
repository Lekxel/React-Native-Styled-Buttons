/*
This is an example showing how to use any of the buttons
*/
import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

//importing all the Buttons 
import Btn from './Buttons/Btn'
import BlockBtn from './Buttons/BlockBtn'
import BorderedBtn from './Buttons/BorderedBtn'
import RoundedBtn from './Buttons/RoundedBtn'
import RoundedBlockBtn from './Buttons/RoundedBlockBtn'
class App extends React.Component {
	render() {
		return (
			<SafeAreaView style={{ marginTop: 20 }}>
				<ScrollView>
					<Btn text={'Hi'} />
					<BlockBtn text={'Hi'} />
					<BorderedBtn text={'Hi'} />
					<RoundedBlockBtn text={'Hi'} />
					<RoundedBtn text={'Hi'} />
				</ScrollView>
			</SafeAreaView>
		)
	}
}
export default App;
