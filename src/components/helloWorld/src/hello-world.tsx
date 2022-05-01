import { defineComponent, ref } from 'vue'
import { helloWorldProps, HelloWorldProps } from './hello-world-types'
import './hello-world.css'

export default defineComponent({
  name: 'HelloWorld',
  props: helloWorldProps,
  emits: ['count-msg'],
  setup(props: HelloWorldProps, { emit }) {
    const count = ref(0)
    return () => (
      <>
        <h1
          class="title"
          onClick={() => emit('count-msg', `the count is ${++count.value}`)}
        >
          {props.msg}
        </h1>
        <p>
          Recommended IDE setup:
          <a href="https://code.visualstudio.com/" target="_blank">
            VS Code
          </a>
          +
          <a href="https://github.com/johnsoncodehk/volar" target="_blank">
            Volar
          </a>
        </p>
        <p>
          See <code>README.md</code> for more information.
        </p>
        <p>
          <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
          </a>
          |
          <a href="https://v3.vuejs.org/" target="_blank">
            Vue 3 Docs
          </a>
        </p>
        <button type="button" onClick={() => count.value++}>
          count is: {count.value}
        </button>
        <p>
          Edit
          <code>components/HelloWorld.vue</code> to test hot module replacement.
        </p>
      </>
    )
  }
})
