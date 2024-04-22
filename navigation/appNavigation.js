import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Welcome" component={Notifications} />
        <Stack.Screen name="Login" component={Profile} />
        <Stack.Screen name="SignUp" component={Settings} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}