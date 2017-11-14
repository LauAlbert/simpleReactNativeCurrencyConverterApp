import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

class LastUpdate extends Component {
    render() {
        return (
            <View style={{alignItems:'flex-end', marginRight: 10}}>
                <Text>Last Update: {this.props.lastUpdate}</Text>
            </View>
        )
    }
}

const mapStateToProps = ({currencyReducer}) => {
    const {lastUpdate} = currencyReducer;
    return {lastUpdate};
}

export default connect(mapStateToProps)(LastUpdate);