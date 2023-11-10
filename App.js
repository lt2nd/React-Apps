import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import StackNavigator from "./StackNavigator";
import { UserContext } from "./UserContext";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        <UserContext>
          <StackNavigator />
        </UserContext>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "blue",

  },
});