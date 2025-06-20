/**
 * @format
 */

// NOTE: ChatGPT suggests double structure with root App.tsx
//       wrapping to App.tsx in app/ directory

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
