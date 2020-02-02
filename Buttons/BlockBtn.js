import React from "react"
import { TouchableOpacity, Text, View, Dimensions } from "react-native"
import Color from '../Colors/Color'

const BlockBtn = props => {
	return (
		<View style={{
			alignItems: 'center',
			justifyContent: 'center',
		}}>
			<TouchableOpacity style={[{
				width: props.width != undefined ? props.width : (Dimensions.get('window').width) - 50,
				borderRadius: 8,
				padding: 10,
				elevation: 4,
				alignItems: 'center',
				textAlign: 'center',
				marginTop: 15,
				marginBottom: 10,
			}, props.theme != undefined ? Color[props.theme] : Color.primary]} onPress={props.click}
				disabled={props.disabled}>
				<Text style={{
					fontSize: props.fontSize ? props.fontSize : 18,
					color: props.color != undefined ? props.color : '#ffffff'
				}}>{props.text}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default BlockBtn