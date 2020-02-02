import React from "react"
import { TouchableOpacity, Text, View } from "react-native"
import Color from '../Colors/Color'

const BorderedBtn = props => {
	return (
		<View style={{
			paddingLeft: 10
		}}>
			<TouchableOpacity style={[{
				width: props.width != undefined ? props.width : 250,
				borderRadius: 8,
				padding: props.padding ? props.padding : 10,
				alignItems: 'center',
				textAlign: 'center',
				marginTop: props.marginTop ? props.marginTop : 5,
				elevation: 4,
				marginTop: props.marginTop ? props.marginTop : 5,
				marginLeft: props.marginLeft ? props.marginLeft : 5,
				marginRight: props.marginRight ? props.marginRight : 5,
				borderColor: props.color != undefined ? props.color : '#111111',
				borderWidth: 2,
			}, props.theme != undefined ? Color[props.theme] : Color.primary]} onPress={props.onPress}
				disabled={props.disabled}>
				<Text style={{
					fontSize: props.fontSize ? props.fontSize : 18,
					color: props.color != undefined ? props.color : '#ffffff'
				}}>{props.text}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default BorderedBtn