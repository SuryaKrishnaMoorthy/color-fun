import React, { Component } from "react";
import { Text } from 'react-native'
import { Card } from 'react-native-elements'
   
class ImageList extends Component {
    render(){
        const u = {spring: "https://unsplash.com/photos/Lm5rkxzgiFQ"}
           return (
            <Card
                title='Blooming'
                image={u.image}>
                <Text style={{marginBottom: 10}}>
                    Published on April 30, 2017
                </Text>
            </Card>
           )
       }
   }

   export default ImageList;
   
   
   