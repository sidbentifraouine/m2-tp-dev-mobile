import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import BottomTabNavigator from 'navigation/BottomTabNavigator'
import { BLUE } from './src/utils/colors'

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          paddingTop: 30,
          paddingBottom: 10,
          paddingHorizontal: 10,
          height: '100%',
          width: '100%',
        }}
      >
        <View
          style={{
            alignSelf: 'flex-end',
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="question" size={32} color={BLUE} />
          </TouchableOpacity>
        </View>
        <BottomTabNavigator />
      </View>
    )
  }
}
