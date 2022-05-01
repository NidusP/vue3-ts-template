import HelloWorld from './components/helloWorld'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const msg = ref('Hello Vue 3 + TypeScript + Vite')
    return () => (
      <>
        <img alt="Vue logo" src="./src/assets/logo.png" />
        <HelloWorld
          msg={msg.value}
          onCount-msg={(_m) => {
            msg.value = _m
            console.log(_m, 'msg')
          }}
        />
      </>
    )
  }
})
