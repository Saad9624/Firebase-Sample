/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Route from './route' ;
import Wrapper from './wrapper' ;


AppRegistry.registerComponent(appName, () => Wrapper);
