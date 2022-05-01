import { ExtractPropTypes } from 'vue'

export const helloWorldProps = {
  msg: {
    type: String,
    default: 'this is a msg!'
  }
}

export type HelloWorldProps = ExtractPropTypes<typeof helloWorldProps>
