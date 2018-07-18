import React, { Component } from 'react'
import { View, Image, TouchableWithoutFeedback } from 'react-native'

const hole = require('./img/hole.png')
const mole = require('./img/idle.png')
const struck = require('./img/done.png')

export default class Mole extends Component {

  constructor (props) {
    super(props)
    this.state = {...props, struck: false}
  }

  hit = () => {
    this.setState({struck: true})
  }

  moleImage = () => {
    return this.state.active
    ? this.state.struck
      ? struck
      : mole
    : hole
  }

  render () {
    const moleImage = this.moleImage()
    return (
      <View style={styles.GrassPatch}>
        <TouchableWithoutFeedback onPress={this.hit}>
          <Image source={moleImage} />
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = {
  GrassPatch: {
    // Code to stop pixel jerk
    justifyContent: 'flex-end',
    minHeight: 111
  }
}
