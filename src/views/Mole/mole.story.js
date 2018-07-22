import React from "react"
import { storiesOf } from "@storybook/react-native"
import Mole from "./mole"

// If a mole is started active, when it is tapped it will
// show a struck state, and stop there.
storiesOf("Mole")
  .add("Default Mole", () => <Mole />)
  .add("Active Mole", () => <Mole active />)
