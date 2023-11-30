import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import UserStackRoute from '../navigation/Users/StackRoute';
import AdminStackRoute from './Admin/TabRoutes'

const Stack = createStackNavigator();

const StackRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Login" component={Login} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="User" component={UserStackRoute} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Admin" component={AdminStackRoute} />
    </Stack.Navigator>
  );
}

export default StackRoute;