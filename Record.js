import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Fleet extends React.Component {
    render() {
        const { navigation } = this.props.navigation;
        return (
            <View>
                <Text>The Record screen</Text>
                <Button
                    title="Kalibreer"
                    color="#f194ff"
                    onPress={ () => this.props.navigation.navigate('Calibrate') }
                    />
            </View>
        )        
    }
}