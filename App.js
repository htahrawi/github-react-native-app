import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import Home from "./src/screens/Home";
import {createStackNavigator} from '@react-navigation/stack'
import RepoScreen from "./src/screens/RepoScreen";
import UserScreen from "./src/screens/UserScreen";

const HomeStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={Home}/>
        <HomeStack.Screen name='User' component={UserScreen}/>
        <HomeStack.Screen name='Repo' component={RepoScreen}/>
      </HomeStack.Navigator>
      <HomeStack.Screen />
    </NavigationContainer>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
