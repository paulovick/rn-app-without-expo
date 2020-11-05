import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {makeAutoObservable} from 'mobx'
import {observer} from 'mobx-react'
import {Button, Input, Text} from '@ui-kitten/components'

class Form {
  name: string = ''
  surname: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  clear = () => {
    this.name = ''
    this.surname = ''
  }
}

const CustomForm = observer(() => {
  const [form] = useState(() => new Form())
  const [showResults, setShowResults] = useState(false)

  const onSubmitPressed = () => {
    setShowResults(true)
  }

  const onClearPressed = () => {
    form.clear()
    setShowResults(false)
  }

  const {containerStyle} = styles

  return (
    <View style={containerStyle}>
      <Input
        value={form.name}
        label="Name"
        onChangeText={(text) => (form.name = text)}
      />
      <Input
        value={form.surname}
        label="Surname"
        onChangeText={(text) => (form.surname = text)}
      />

      {showResults && (
        <>
          <Text>Name: {form.name}</Text>
          <Text>Surname: {form.surname}</Text>
          <Button onPress={onClearPressed}>Clear</Button>
        </>
      )}
      {!showResults && <Button onPress={onSubmitPressed}>Submit</Button>}
    </View>
  )
})

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
})

export default CustomForm
