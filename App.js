import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Authcontextprovider from './contextstore';
import { Authcontext } from './contextstore';
import { useContext } from 'react';
import Login from './screens/login';
import Signup from './screens/signup';
import Termcondition from './screens/termcondition';
import Forgetscreen from './screens/forgetpassword';
import Home from './screens/home';
import Notification from './screens/notification';
import Account from './screens/account';
import Menu from './screens/menu';
import Payment from './screens/payment';
import Address from './screens/Address';
import Productdetail from './productdetail';
import Editprofile from './editprofile';
import Cart from './screens/cart';
import Termconditionhome from './screens/termconditionhome';
import Makemealwelcome from './screens/makemealwel';
import Buyscreen from './screens/buy';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function Stackscreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="term" component={Termcondition} options={{ headerShown: false }} />
      <Stack.Screen name="forget" component={Forgetscreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export function Stackhomescreen() {
  return (
    <Stack.Navigator>
    
      <Stack.Screen name="tabscreen" component={Bottomtabscreen} options={{ headerShown: false }} />
      <Stack.Screen name="notificaton" component={Notification} options={{ headerShown: false }} />
      <Stack.Screen name="payment" component={Payment} options={{ headerShown: false }} />
      <Stack.Screen name="address" component={Address} options={{ headerShown: false }} />
      <Stack.Screen name="productdetail" component={Productdetail} options={{ headerShown: false }} />
      <Stack.Screen name="termconditionhome" component={Termconditionhome} options={{ headerShown: false }} />
      <Stack.Screen name="editprofile" component={Editprofile} options={{ headerShown: false }} />
      <Stack.Screen name="makemealwelcome" component={Makemealwelcome}  options={{ headerShown: false }} />
      <Stack.Screen name="buyconfirm" component={Buyscreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
export function Bottomtabscreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: '#1DB954',
        tabBarInactiveTintColor: '#A0A0A0',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarLabel: "Menu",
          tabBarIcon: ({ color }) => <Ionicons name="list" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => <Ionicons name="cart" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => <Ionicons name="person" size={28} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}


function Displayscreen() {
  const authctx = useContext(Authcontext);
  return (
    <NavigationContainer>
      {!authctx.isauthtoken && <Stackscreens />}
      {authctx.isauthtoken && <Stackhomescreen />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Authcontextprovider>
      <StatusBar style="dark" />
      <Displayscreen />
    </Authcontextprovider>
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