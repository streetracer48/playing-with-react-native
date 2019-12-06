import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './src/components/Home';
import LoginPage from "./src/components/Login"
import EmojiDIck from "./src/components/emojiDick"

const navigator = createStackNavigator(
  {
    EMoji:EmojiDIck
    
  },
);


export default createAppContainer(navigator);
