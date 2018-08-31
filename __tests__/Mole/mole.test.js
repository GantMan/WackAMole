import React from 'react'
import Mole from '../../src/views/Mole/mole'
import renderer from 'react-test-renderer'

test('Inactive Mole Press', () => {
  const moleInstance = renderer.create(<Mole />).getInstance()
  moleInstance.handlePressIn()
  expect(moleInstance.state.currentImage.testUri).toContain('hole')
})

test('Active Mole Press', () => {
  const moleInstance = renderer.create(<Mole active />).getInstance()
  // console.log(moleInstance.state)
  expect(moleInstance.state.currentImage.testUri).toContain('idle')
  moleInstance.handlePressIn()
  expect(moleInstance.state.currentImage.testUri).toContain('hit')
  // Take a picture it'll last longer
  expect(moleInstance.state).toMatchSnapshot()
})

test('Snapshot of default shape', () => {
  const tree = renderer
    .create(<Mole />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Snapshot of active', () => {
  const tree = renderer
    .create(<Mole active />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
