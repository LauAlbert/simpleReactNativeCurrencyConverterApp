import React, {Component} from 'react';
import { View, Text, Picker, TextInput} from 'react-native';
import { CURRENCYLIST } from '../actions/currency';
import * as currencySymbols from '../actions/currencyTypes';
import { connect } from 'react-redux';
import { fetchCurrency, updateConvert, updateAmount } from '../actions';

class Base extends Component {
    state={selectedCurrency: "USD"}

    componentWillMount() {
        this.props.fetchCurrency(this.state.selectedCurrency);
    }

    renderPickerItem() {
        return CURRENCYLIST.map((option) =>
            <Picker.Item label={`${option.label} - ${option.id} (${currencySymbols[option.id]})`} value={option.id} key={option.id}/>
        )
    }

    fetchCurrency(itemValue) {
        this.setState({selectedCurrency: itemValue});
        this.props.fetchCurrency(itemValue);
        this.updateConvert();
    }

    updateAmount(amount) {
        this.props.updateAmount(amount)
    }

    updateConvert() {
        this.props.updateConvert();
    }

    render() {
        return (
            <View style={{flexDirection: 'row', padding: 10}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={{alignSelf: 'center', fontSize: 40}}>{currencySymbols[this.state.selectedCurrency]}</Text>
                    <Text style={{alignSelf: 'center', fontSize: 20}}>{this.state.selectedCurrency}</Text>
                </View>
                <View style={{flex: 3, justifyContent: 'center', borderLeftWidth: 1, paddingLeft: 10}}>
                    <Picker
                        selectedValue={this.state.selectedCurrency}
                        onValueChange={(itemValue) => this.fetchCurrency(itemValue)}
                    >
                        {this.renderPickerItem()}
                    </Picker>
                    <TextInput 
                        value={this.state.amount}
                        onChangeText={(amount)=>this.updateAmount(amount)}
                        onSubmitEditing={this.updateConvert.bind(this)}
                        keyboardType='numeric' 
                        placeholder='amount'
                     />
                </View>

            </View>
        )
    }
}

export default connect(null, {fetchCurrency, updateConvert, updateAmount})(Base);