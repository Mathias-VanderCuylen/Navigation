import { StyleSheet, Text, View } from 'react-native';

import A from './screens/pageA';
import B from './screens/pageB';
import C from './screens/pageC';

import TabNavigator from './components/tabNavigator';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Tabs" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Tabs" component={TabNavigator} />
        <Tab.Screen name="pageC" component={C} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
