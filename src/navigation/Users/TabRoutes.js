import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Profile from '../../screens/Users/Profile';
import ProductView from '../../screens/Users/ProductView';

const TabRoutes = ({navigation}) => {
  
  const Tab = createBottomTabNavigator();

  const tabRoutes = [
    {
      name: "Navtech",
      component: ProductView,
      label: "Home",
      icon: "ios-home",
      width: 85,
      height: 55,
    },
    {
      name: "Profile",
      component: Profile,
      label: "Profile",
      icon: "people",
      width: 85,
      height: 55,
    },
  ]
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#9E9898",
        headerRight: () => <Icon name={"cart"} size={25} style={{paddingRight:20}} onPress={() => navigation.navigate("Cart")}/>,
        tabBarStyle: {
          backgroundColor: "#0D1A26",
          height: 70,
          paddingTop: 7,
          paddingBottom: 7,
          marginTop: -2,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      {
        tabRoutes.map((route, index) => {
          return (
            <Tab.Screen
              key={index}
              name={route.name}
              component={route.component}
              options={({ }) => ({
                tabBarLabel: ({ color, focused }) => (
                  <Text
                    style={{
                      color,
                      fontSize: focused ? 14 : 12,
                      transform: [{ translateY: -5 }],
                      fontWeight: focused ? "500" : "400",
                    }}
                  >
                    {route?.label}
                  </Text>
                ),
                tabBarIcon: ({ tintColor }) => (
                  <Icon name={route.icon} color={"gray"} size={25} />
                )
              })}
            />
          );
        })
      }

    </Tab.Navigator>
  );
}

export default TabRoutes;