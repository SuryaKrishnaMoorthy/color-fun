import TabNav from "./TabNav";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createSwitchNavigator({TabNav});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;