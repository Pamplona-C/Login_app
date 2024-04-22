
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import LoginScreen from '../screens/loginScreen';
import SignupScreen from '../screens/signupScreen';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (

        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
          <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
          <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
          <Stack.Screen name="SignUp" options={{headerShown:false}} component={SignupScreen} />
        </Stack.Navigator>

  );
}