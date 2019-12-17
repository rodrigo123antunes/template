import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Header as NBHeader, Left, Right, Body, Button, Title, View } from "native-base";
import Style, { Align } from "../Style";
import Icon from "react-native-vector-icons/FontAwesome";

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <NBHeader style={styles.bgWhite}>
                    <Left style={styles.flex1}>
                        {
                            this.props.onLeftPress ? (
                                <Button transparent onPress={() => this.props.onLeftPress()}>
                                    <Icon name="arrow-left" size={25} color="#EE327D" />
                                </Button>
                            ) : null
                        }
                    </Left>
                    <Body style={[Align.center, styles.body]}>
                        <Title style={styles.title}>{this.props.title}</Title>
                    </Body>
                    <Right style={styles.flex1}>
                        {
                            this.props.onRightPress ? (
                                <Button transparent onPress={() => this.props.onRightPress()}>
                                    <Icon name={this.props.iconRight} size={25} color="#EE327D" />
                                </Button>
                            ) : null
                        }
                    </Right>
                </NBHeader>
                <StatusBar barStyle="light-content" backgroundColor="#EE327D"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bgWhite: {
        backgroundColor: "#FFF",
    },
    flex1: {
        flex: 1,
    },
    logo: {
        width: "55%",
        height: 35,
        marginRight: 17,
    },
    body: {
        flex: 3,
        width: "87%",
        height: "100%",
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
    },
    title : {
        color: "#696969",
        fontFamily : "Comfortaa-Bold",
        fontSize: 20,
    },
});

module.exports = Header;
