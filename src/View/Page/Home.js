import React from 'react';

import {Text, Image, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {View} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#24292E" />
                <Image
                    source={{
                        uri:
                            'http://emvtech.com.br/wp-content/uploads/2019/05/emv-logo.png',
                    }}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.welcome}>
                    Bem-vindo ao Template Básico!
                </Text>
                <Text style={styles.instructions}>
                    Essa é a tela principal da sua aplicação <Icon name="smile-wink" size={30} />
                </Text>
                <Text style={styles.instructions}>
                    Você pode editar a tela no arquivo:
                </Text>
                <Text style={[styles.instructions, styles.fileName]}>
                    src/View/Page/Home.js
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#24292E',
    },
    fileName: {
        fontWeight: 'bold',
        marginTop: 5,
    },
    instructions: {
        color: '#DDD',
        fontSize: 14,
        marginTop: 20,
        textAlign: 'center',
    },
    logo: {
        height: Dimensions.get('window').height * 0.11,
        marginVertical: Dimensions.get('window').height * 0.11,
        width: Dimensions.get('window').height * 0.11 * (1950 / 662),
    },
    welcome: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});


export default Home;
