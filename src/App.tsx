import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import * as eva from '@eva-design/eva'
import {Card, ApplicationProvider} from '@ui-kitten/components'
import {View, StyleSheet} from 'react-native'
import CustomForm from './CustomForm'

const App = () => {
  const {containerStyle} = styles

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <View style={containerStyle}>
          <CustomForm />
        </View>
      </NavigationContainer>
    </ApplicationProvider>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 16,
    marginTop: 54,
    marginBottom: 32,
    flex: 1,
  },
})

export default App
