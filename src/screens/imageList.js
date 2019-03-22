import React, { Component } from "react";
import { Text, ActivityIndicator, ScrollView, View } from 'react-native'
import { Card, Image, Header, Icon } from 'react-native-elements'


class ImageList extends Component {
    render(){
        return (
            <View>
                <Header
                    backgroundColor='#8A71D7'
                    
                    centerComponent={{ text: 'Seasons', style: { color: '#191654', fontWeight: 'bold' } }}
                    rightComponent={{
                        icon: 'home',
                        color: '#191654',
                        onPress: () => this.props.navigation.navigate('TabNav')
                    }}
                />                                      
                <ScrollView>
                {
                    this.props.season.map(img => <Image source={img} style={{width: "100%", height: 200, marginBottom: 20 }}/>)
                }                         
                </ScrollView>
            </View>
        ) 
       }
   }

   export default ImageList;
   
   
   