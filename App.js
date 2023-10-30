import React, {useState} from 'react'; // we can write: import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'; //Button is self closing element 

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title='Change text'  onPress={() => setOutputText('Happy beginning')}/>  
      {/*<StatusBar style="auto"/>
       this for multi commetn lines and i will ignore this line command as it is not important*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#679b9b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
