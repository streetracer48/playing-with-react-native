import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './src/components/Home';
import LoginPage from "./src/components/Login"

const navigator = createStackNavigator(
  {
    Login:LoginPage
  },
);


export default createAppContainer(navigator);
