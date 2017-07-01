<template>
  <div>
    <div class="message"> Value is : {{ count }} </div>
    <a href="#" @click.prevent="increment"> Increment </a>
    <ul>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ul>
    <button @click.prevent="showMsg">点击事件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count : 0,
        todos : [
          { text: 'Learn Javascript' },
          { text: 'Learn Vue.js' },
          { text: 'BUild Something Awesome' }
        ]
      }
    },
    methods: {
      increment () {
        this.count ++;
      },
      showMsg () {
        console.log('---')
      }
    }
  }
</script>

<style>
  .message {
    color: blue
  }
</style>