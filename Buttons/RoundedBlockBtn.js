import React from "react"
import { TouchableOpacity, Text, Dimensions, View } from "react-native"
import Color from '../Colors/Color'

const RoundedBlockBtn = props => {
	return (
		<View style={{
			alignItems: 'center',
			justifyContent: 'center',
		}}>
			<TouchableOpacity style={[{
				width: props.width != undefined ? props.width : (Dimensions.get('window').width) - 50,
				borderRadius: (Dimensions.get('window').width) / 2,
				padding: 10,
				alignItems: 'center',
				textAlign: 'center',
				marginTop: 15,
				elevation: 4,
				marginBottom: 10,
			}, props.theme != undefined ? Color[props.theme] : Color.primary]} onPress={props.click}
				disabled={props.disabled}>
				<Text style={{
					fontSize: props.fontSize ? props.fontSize : 18,
					color: 'white'
				}}>{props.text}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default RoundedBlockBtn