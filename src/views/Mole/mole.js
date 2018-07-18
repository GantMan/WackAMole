import React, { Component } from 'react'
import { View, Image, TouchableWithoutFeedback, Animated } from 'react-native'

const hole = require('./img/hole.png')
const mole = require('./img/idle.png')
const hit = require('./img/hit.png')
const struck = require('./img/done.png')

export default class Mole extends Component {

  constructor (props) {
    super(props)
    this.state = {
      ...props,
      currentImage: props.active ? mole : hole,
      animatedSize: new Animated.Value(1)
    }
  }

  handlePressIn = () => {
    if (this.props.active) this.setState({currentImage: hit})
  }

  handlePressOut = () => {
    Animated.sequence([
      Animated.timing(this.state.animatedSize, {
        toValue: 1.3,
        duration: 50,
        useNativeDriver: true
      }),
      Animated.timing(this.state.animatedSize, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      })
    ]).start()
    if (this.props.active) this.setState({currentImage: struck})
  }

  render () {
    return (
      <Animated.View style={[
        styles.GrassPatch,
        { transform: [{ scale: this.state.animatedSize }] }
      ]}>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
        >
          <Image source={this.state.currentImage} />
        </TouchableWithoutFeedback>
      </Animated.View>
    )
  }
}

const styles = {
  GrassPatch: {
    // Code to stop pixel jerk
    justifyContent: 'flex-end',
    minHeight: 115
  }
}
