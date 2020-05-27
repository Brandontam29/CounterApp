import React from 'react';
import {
    StyleSheet, View, Text,
} from 'react-native';

// import PropTypes from 'prop-types';


const propTypes = {
};

const defaultProps = {
};

const Creator = () => (
    <View styles={styles.container}>
        <Text styles={styles.count}>
            My name is Brandon.
        </Text>
        <Text styles={styles.count}>
            I wrote this app from Expo.

        </Text>
        <Text styles={styles.count}>
            Brandon.tam29@gmail.com
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


Creator.propTypes = propTypes;
Creator.defaultProps = defaultProps;


export default Creator;
