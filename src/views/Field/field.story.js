import React from "react"
import { storiesOf } from "@storybook/react-native"
import Field from "./field"

// Field full of moles
storiesOf("Field")
  .add("Field Default ", () => <Field />)
  .add("Field Moles 2", () => <Field moles={[{ active: true }, { active: false }]} />)
  .add("Field Moles 9", () => (
    <Field
      moles={[
        { active: false },
        { active: true },
        { active: true },
        { active: true },
        { active: false },
        { active: true },
        { active: true },
        { active: false },
        { active: false },
      ]}
    />
  ))
