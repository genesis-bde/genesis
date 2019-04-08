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
                    <View style={{...styles.modal, ...this.props.style}}>
                        <TouchableWithoutFeedback style={{flex: 1}}>
                            <View style={styles.children}>
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
        minHeight: 360,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 70,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    children: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    }
});