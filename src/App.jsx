import React from 'react';
// import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

// import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
// import changeCount from './actions/CountActions';
import Home from './components/Home';
import Counter from './components/Counter';
import Creator from './components/Creator';

const propTypes = {
};

const defaultProps = {
};

const App = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Counter" component={Counter} />
            <Stack.Screen name="Creator" component={Creator} />
        </Stack.Navigator>
    );
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;


// export default connect(({ count }) => ({
//     count: count.count,
// }), (dispatch) => ({
//     setCount: bindActionCreators(changeCount, dispatch),
// }))(App);

export default App;
