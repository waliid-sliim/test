import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>home</Text>
      <Button title ="switch to PROFILE" onPress={ ()=>navigation.navigate("Login")}> go to Login
     </Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})