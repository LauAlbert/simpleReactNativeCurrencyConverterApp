import React, { Component } from 'react';
// import { Text, TouchableNativeFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import { View, Dimensions, Picker, Text } from 'react-native';

const {height, width} = Dimensions.get('window');

class AddButton extends Component {
    constructor(props) { 
        super(props); 
        this.state = {showPicker: false};
    }
    renderPicker() {
        if (this.state.showPicker) {
            return (
                <Picker enable='true'> 
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            );
        } else {
            return null;
        }
    }
    render() {
        return (
            // <TouchableNativeFeedback>
            //     <Text>
            //         {children}
            //     </Text>
            // </TouchableNativeFeedback>
            <View>
                <Icon
                    raised
                    reverse
                    containerStyle={{borderRadius: 0, marginLeft: 10, marginRight: 10, width: width-20}}
                    name= 'add'
                    color='#00aced'
                    /* onPress= {() => this.setState({showPicker: !this.state.showPicker})} */
                    onPress = {this.props.onPress}
                />
                {this.renderPicker()}
            </View>

        )
    }
}

export default AddButton;