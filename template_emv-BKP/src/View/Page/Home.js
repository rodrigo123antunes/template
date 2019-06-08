import React from 'react';
import { StyleSheet, ImageBackground, StatusBar, Image } from 'react-native';
import { Container, Content, Text, View } from 'native-base';
import Http from '../../Util/Http';
import Constants from '../../Util/Constants';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="#0a5fa9" barStyle="light-content" />
                <ImageBackground source={require('../../Images/background.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
                    <Content padder contentContainerStyle={styles.center}>
                        <View style={{ justifyContent: 'center'}}>
                            <Image resizeMode={'contain'} source={require('../../Images/logo.png')} style={styles.logo} />
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={styles.text}>Welcome Emv Technology Template</Text>
                        </View>
                    </Content>
                </ImageBackground>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    text: {
        color: '#0a5fa9',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

module.exports = Home;
