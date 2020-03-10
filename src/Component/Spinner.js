import React from "react";
import { StyleSheet, Modal } from "react-native";
import { View, Spinner as NBSpinner, Text } from "native-base";

class Spinner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSpinner : this.props.show ? this.props.show : false,
        };
    }

    showSpinner(callback) {
        this.setState({"showSpinner" : true}, () => {
            if (callback) {
                setTimeout(() => {
                    callback();
                }, 510);
            }
        });
    }

    hideSpinner(callback) {
        this.setState({"showSpinner" : false}, () => {
            if (callback) {
                setTimeout(() => {
                    callback();
                }, 510);
            }
        });
    }

    render() {
        return (
            <Modal
                key="modalSpinner"
                animationType={"none"}
                transparent={true}
                visible={this.state.showSpinner}
                onRequestClose = {() => {console.log("Modal has been closed.");}}>

                <View style={styles.modal}>
                    <NBSpinner color="#EE327D" />
                    <Text style={styles.label}>Por favor, aguarde...</Text>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "black",
        padding: 100,
        opacity: 0.7,
    },
    label: {
        width: 200,
        color: "#FFFFFF",
        marginLeft: 50,
    },
});

module.exports = Spinner;
