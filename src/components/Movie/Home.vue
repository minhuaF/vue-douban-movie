<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="page">
      <div class="card">
        <CardComponet></CardComponet>
        <CardComponet></CardComponet>
        <CardComponet></CardComponet>
      </div>
    </div>
  </div>
</template>

<script>

import HeaderComponent from './HeaderComponent'
import CardComponet from './CardComponent'

export default {
  name: 'home',
  components: {
    HeaderComponent,
    CardComponet
  },
  data () {
    return {
      title: 'home'
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
  .page{
    margin-top: 94px
  }

</style>
