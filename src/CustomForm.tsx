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

  setName = (name: string) => {
    this.name = name
  }

  setSurname = (surname: string) => {
    this.surname = surname
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
    <View style={containerStyle} testID="custom-font">
      <Input
        testID="name-input"
        value={form.name}
        label="Name"
        onChangeText={(text) => form.setName(text)}
      />
      <Input
        testID="surname-input"
        value={form.surname}
        label="Surname"
        onChangeText={(text) => form.setSurname(text)}
      />

      {showResults && (
        <>
          <Text>Name: {form.name}</Text>
          <Text>Surname: {form.surname}</Text>
          <Button onPress={onClearPressed}>Clear</Button>
        </>
      )}
      {!showResults && (
        <Button onPress={onSubmitPressed} testID="submit-button">
          Submit
        </Button>
      )}
    </View>
  )
})

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
})

export default CustomForm
