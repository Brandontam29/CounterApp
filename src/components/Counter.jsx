import React from 'react';
import {
    StyleSheet, View, Button, Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import changeCount from '../actions/countActions';

const propTypes = {
    count: PropTypes.bool.isRequired,
    setCount: PropTypes.func.isRequired,
};

const defaultProps = {
};

const Counter = ({ count, setCount }) => {
    const decrementCount = () => {
        setCount(count - 1);
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <View styles={styles.container}>
            <Button title="increment" onPress={incrementCount} />
            <Text styles={styles.count}>{count}</Text>
            <Button title="decrement" onPress={decrementCount} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    count: {
        textAlign: 'center',
    },
});


Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;


export default connect(({ count }) => ({
    count: count.count,
}), (dispatch) => ({
    setCount: bindActionCreators(changeCount, dispatch),
}))(Counter);
