import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

import ProductsScreen from '../../screens/Admin/ProductsScreen';
import AddProduct from '../../components/Admin/AddProduct';
import { EditImg } from '../../../assets/index';
import Icon from 'react-native-vector-icons/Ionicons';  


const Tab = createBottomTabNavigator();
const TabRoutes = () => {
  const tabRoutes = [
    {
      name: "All Products",
      component: ProductsScreen,
      label: "Products",
      icon: "storefront-outline",
      width: 85,
      height: 55,
    },
    {
      name: "Add Product",
      component: AddProduct,
      label: "Add Product",
      icon: "add",
      width: 85,
      height: 55,
    },
  ]
  return (
    <Tab.Navigator
      initialRouteName="DashBoard"
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#9E9898",
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
                tabBarIcon:({tintColor})=>(  
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