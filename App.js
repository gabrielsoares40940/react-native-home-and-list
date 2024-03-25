import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import { createDrawerNavigator } from '@react-navigation/drawer'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './paginas/Home'
import Listas from './paginas/Lista'

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();
//const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#ffcc99'},
        headerTintColor: 'black'
        }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Listas" component={Listas}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

