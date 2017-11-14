import React,  { Component } from 'react';
import AddButton from '../components/AddButton';
import Base from '../components/Base';
import CurrencyList from '../components/CurrencyList';
import LastUpdate from '../components/LastUpdate';
import { View } from 'react-native';
import SelectionModal from '../components/SelectionModal';

class Home extends Component{
    state = { showModal: false }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <Base />
                <AddButton onPress={() => this.setState({showModal: !this.state.showModal})}/>
                <LastUpdate />
                <CurrencyList />
                <SelectionModal visible={this.state.showModal} close={()=>this.setState({showModal: false})}/>
            </View>
        )
    }
}

export default Home;