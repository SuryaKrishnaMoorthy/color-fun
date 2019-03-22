import React from 'react';
import { Text, View } from 'react-native';


export default class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8D8F8F' }}>
          <Text style={{fontSize: 30, fontWeight: "bold", color: "#ffffff"}}>Settings!</Text>
        </View>
      );
    }
  }

  