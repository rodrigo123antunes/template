'use strict';

import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Home} from '../View/Page';

const AppNavigator = createStackNavigator(
    {
        Home: {screen: Home},
    },
    {
        headerMode: 'none',
    },
);

export default createAppContainer(AppNavigator);
