import React, { Component } from "react"
import { View, Image, TouchableWithoutFeedback } from "react-native"

const hole = require("./img/hole.png")
const mole = require("./img/idle.png")
const hit = require("./img/hit.png")
const struck = require("./img/done.png")

export default class Mole extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
      currentImage: props.active ? mole : hole,
    }
  }

  handlePressIn = () => {
    if (this.props.active) this.setState({ currentImage: hit })
  }

  handlePressOut = () => {
    if (this.props.active) this.setState({ currentImage: struck })
  }

  render() {
    return (
      <View style={styles.GrassPatch}>
        <TouchableWithoutFeedback onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
          <Image source={this.state.currentImage} />
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = {
  GrassPatch: {
    // Code to stop pixel jerk
    justifyContent: "flex-end",
    minHeight: 115,
  },
}
