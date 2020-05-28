import RequestReport from 'Components/RequestReport'
import React from 'react'
import renderer from 'react-test-renderer'

test('RequestReport', () => {
  const tree = renderer.create(<RequestReport />).toJSON()
  expect(tree).toMatchSnapshot()
})
