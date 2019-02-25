import React from 'react';
import {
    Modal as ReactModal,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
} from 'react-native';

export default class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    };


    render() {
        return (
            <ReactModal
                animationType="fade"
                transparent={true}
                visible={this.state.modalVisible}
            >
                <TouchableOpacity style={styles.hidden} onPressOut={this.toggleModal}>
                    <View style={styles.modal}>
                        <TouchableWithoutFeedback style={{flex: 1}}>
                            <View style={{flex: 1}}>
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
        height: '80%',
        flexDirection: 'column',
        alignItems: 'center',
    },
});