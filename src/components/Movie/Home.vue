<template>
  <div id="home">
    <Header></Header>
    {{ title }}
  </div>
</template>

<script>

import Header from './Header'

export default {
  name: 'home',
  components: {
    Header
  },
  data () {
    return {
      title: 'Home'
    }
  }
}
</script>


<style lang="scss" scoped="" type="text/css">
  $nav-color: #F90;
  #home {
    color: $nav-color;
    font-size: 16px
  }
</style>
