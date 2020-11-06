import React from 'react'
import {fireEvent, render} from '@testing-library/react-native'
import * as eva from '@eva-design/eva'
import {ApplicationProvider} from '@ui-kitten/components'
import CustomForm from './CustomForm'

describe('<CustomForm />', () => {
  it('renders without crashing', () => {
    const {queryByTestId} = render(
      <ApplicationProvider {...eva} theme={eva.light}>
        <CustomForm />
      </ApplicationProvider>,
    )

    expect(queryByTestId('custom-font')).toBeTruthy()
  })

  it('shows data when submitting', () => {
    const {getByTestId, getByText} = render(
      <ApplicationProvider {...eva} theme={eva.light}>
        <CustomForm />
      </ApplicationProvider>,
    )

    fireEvent.changeText(getByTestId('name-input'), 'New name')
    fireEvent.changeText(getByTestId('surname-input'), 'New surname')
    fireEvent.press(getByTestId('submit-button'))

    expect(getByText('Name: New name')).toBeTruthy()
    expect(getByText('Surname: New surname')).toBeTruthy()
  })
})
