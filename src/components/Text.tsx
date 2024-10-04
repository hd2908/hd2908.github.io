import React, { FunctionComponent } from 'react'

type TextProps = {
  text: string
}

const Text: FunctionComponent<TextProps> = function ({ text }) {
  return <div className="text-lg">{text}</div>
}

export default Text
