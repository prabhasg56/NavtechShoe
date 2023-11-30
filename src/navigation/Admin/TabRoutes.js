import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../screens/Admin/Home';
import AddProducts from '../../components/Admin/AddProducts';

const Tab = createBottomTabNavigator();
const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Products" component={Home} />
      <Tab.Screen name="Add Product" component={AddProducts} />
    </Tab.Navigator>
  );
}

export default TabRoutes;