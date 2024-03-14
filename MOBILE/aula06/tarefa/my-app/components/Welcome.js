import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the app!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CalculateInterest')}>
        <Text>Calculate Interest</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CalculateAge')}>
        <Text>Calculate Age</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen