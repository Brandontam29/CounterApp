import React from 'react';
import {
    StyleSheet, View, Button, Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import changeCount from '../actions/countActions';

const propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    navigation: PropTypes.object.isRequired,
    count: PropTypes.bool.isRequired,
    setCount: PropTypes.func.isRequired,
};

const defaultProps = {
};

const Home = ({ navigation, count, setCount }) => {
    const decrementCount = () => {
        setCount(count - 1);
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <View styles={styles.container}>
            <Button title="increment" onPress={incrementCount} />
            <Text styles={styles.count}>
                I ate
                {' '}
                {count}
                {' '}
                bananas.
            </Text>

            <Text styles={styles.count}>
                But
                {' '}
                {count}
                {' '}
                times is not enough :(

            </Text>
            <Button title="decrement" onPress={decrementCount} />
            <Button
                title="Go to Counter"
                onPress={() => navigation.navigate('Counter')}
            />
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


Home.propTypes = propTypes;
Home.defaultProps = defaultProps;


export default connect(({ count }) => ({
    count: count.count,
}), (dispatch) => ({
    setCount: bindActionCreators(changeCount, dispatch),
}))(Home);
