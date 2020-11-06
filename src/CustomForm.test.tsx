import React from 'react'
import {render} from '@testing-library/react-native'
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
})
