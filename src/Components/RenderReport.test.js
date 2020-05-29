import {render} from '@testing-library/react'
import RequestReport from 'Components/RequestReport'
import React from 'react'
import renderer from 'react-test-renderer'

test('RequestReport snapshot', () => {
  const tree = renderer.create(<RequestReport />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('RequestReport', () => {
  const {getByLabelText} = render(<RequestReport />)
  expect(getByLabelText('Repo')).toBeInTheDocument()
})
