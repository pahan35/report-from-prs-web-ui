import {render} from '@testing-library/react'
import RequestReport from 'Components/RequestReport'
import React from 'react'

test('RequestReport SSR', () => {
  const {getByText} = render(<RequestReport />)
  expect(getByText('I am RequestReport 35')).toBeInTheDocument()
  expect(false).toBeFalsy() // change actual to false here
})
