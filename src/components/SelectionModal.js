import React, {Component} from 'react';
import { Modal, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { CURRENCYLIST } from '../actions/currency';
import * as currencyTypes from '../actions/currencyTypes';
import { connect } from 'react-redux';
import { fetchConvert } from '../actions';

class SelectionModal extends Component{
    fetchConvert(id) {
        this.props.fetchConvert(id);
        this.props.close();
    }

    render() {
        const { containerStyle, flatlistContainer, itemContainer } = styles;
        return (

            <Modal
                visible={this.props.visible}
                onRequestClose={this.props.close}
                transparent
            >
                <View style={containerStyle}>
                    <View style={flatlistContainer}>
                        <FlatList
                        keyExtractor={item => item.id}
                        data={CURRENCYLIST}
                        renderItem={({item}) => (
                            <TouchableHighlight
                                underlayColor='rgba(0, 0, 0, 0.1)'
                                onPress={this.fetchConvert.bind(this, item.id)}
                            >
                                <View style={itemContainer}>
                                
                                    <Text style={{fontSize:15}}>
                                        {`${item.label} - ${item.id} (${currencyTypes[item.id]})`}
                                    </Text>
                                
                                </View>
                            </TouchableHighlight>
                        )}
                
                        />
                    </View>
                </View>
            </Modal>

        )
    }
}

const styles = {
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        position: 'relative'
    },
    flatlistContainer: {
        borderRadius: 2,
        margin: 25,
        backgroundColor: 'white'
    },
    itemContainer: {
        margin: 5,
        marginTop: 15,
        marginBottom: 15
    }

};

export default connect(null, { fetchConvert })(SelectionModal);