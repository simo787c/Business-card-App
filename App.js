import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logo: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: "rgb(0,255,0)"
  },
});

function handlePress() {
  Linking.openURL('https://www.monsterenergy.com/dk/da/about-us').catch(err => console.error('An error occurred', err));
}

export default function App() {
  return (
    <View style={styles.container}>

      <Image source={ require("./media/logo.png")}
          style={styles.logo} />

      <Text style={{color:'white',fontFamily: "Franklin Gothic Medium",fontSize:30,margin:50}}>A LIFESTYLE IN A CAN</Text>
      <Button title="About us" onPress={handlePress}></Button>
      <StatusBar style="auto" />
    </View>
  );
}


