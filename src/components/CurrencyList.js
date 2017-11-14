import React, {Component} from 'react';
import { View, Text, FlatList, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as currencySymbols from '../actions/currencyTypes';
import { CURRENCYLIST } from '../actions/currency';
import _ from 'lodash';
import { deleteConvert } from '../actions';

class CurrencyList extends Component {
    deleteConvert(index) {
        console.log(index);
        this.props.deleteConvert(index);
    }

    renderList() {
        if(this.props.convertList) {
            return (
                <FlatList
                keyExtractor={(item, index) => index}
                data={this.props.convertList}
                renderItem={({item, index}) => (
                    <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={{alignSelf: 'center', fontSize: 40}}>{currencySymbols[item.id]}</Text>
                            <Text style={{alignSelf: 'center', fontSize: 20}}>{item.id}</Text>
                        </View>
                        <View style={{flex: 2, justifyContent: 'space-between', borderLeftWidth: 1, paddingLeft: 10}}>
                            <Text> {_.filter(CURRENCYLIST,{ id: item.id })[0].label} </Text>
                            <Text style={{fontSize: 40}}> {item.amount} </Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', marginRight: 20}}>
                            <TouchableNativeFeedback
                                onPress={this.deleteConvert.bind(this, index)}
                            >
                                <Text style={{alignSelf: 'flex-end', fontSize: 32}}>x</Text>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                )}
                />
            );
        } else {
            return null;
        }
    }
    render() {
        return(
            <View style={{flex: 1, backgroundColor:'white', margin: 10}}>
                {this.renderList()}
            </View>
        )
    }
}

const mapStateToProps = ({currencyReducer}) => {
    const {convertList} = currencyReducer;
    return {convertList};

}

export default connect(mapStateToProps, { deleteConvert })(CurrencyList);