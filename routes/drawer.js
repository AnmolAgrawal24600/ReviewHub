import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
},{drawerBackgroundColor: "#292627",
drawerWidth: 250,contentOptions: {
  activeTintColor: '#c2b4bc', 
  inactiveTintColor: 'white', 
  labelStyle: {
    fontSize: 20,
  },
  // You can add more styles or override other properties here as needed
},});

export default createAppContainer(RootDrawerNavigator);