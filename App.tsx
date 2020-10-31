import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import * as eva from '@eva-design/eva'
import {Card, Text, ApplicationProvider} from '@ui-kitten/components'
import {View, StyleSheet} from 'react-native'

const App = () => {
  const {containerStyle} = styles

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <View style={containerStyle}>
          <Card>
            <Text>Some text!</Text>
          </Card>
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
