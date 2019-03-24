import React from 'react';
import {
    Modal as ReactModal,
    StyleSheet,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
} from 'react-native';

export default class Modal extends React.Component {

    render() {
        return (
            <ReactModal
                animationType="fade"
                transparent={true}
                visible={this.props.modalVisible}
            >
                <TouchableOpacity style={styles.hidden} onPressOut={this.props.onToggle}>
                    <View style={styles.modal}>
                        <TouchableWithoutFeedback style={{flex: 1}}>
                            <View style={{flex: 1, alignItems: 'center',}}>
                                {this.props.children}
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableOpacity>
            </ReactModal>
        );
    }
}

const styles = StyleSheet.create({
    hidden: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.6)'
    },
    modal: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '80%',
        minHeight: 350,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 70,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
});