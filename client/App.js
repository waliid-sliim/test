
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import Login from './components/login/login.jsx';

const Stack = createNativeStackNavigator();

const App =() => {
  return (
    
<NavigationContainer>
<Stack.Navigator>

  <Stack.Screen name ='Home'  component={Home}/>
  <Stack.Screen name ='Profile'  component={Profile}/>
  <Stack.Screen name ='Login'  component={Login}/>
</Stack.Navigator>
</NavigationContainer>
   
    
  );
}


export default App;