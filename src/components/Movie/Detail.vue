<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="page">
      <div class="detail">
        详情 {{ $route.params.id }}
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent'
export default {
  name: 'detail',
  components: {
    HeaderComponent
  }
}
</script>

<style lang="scss" scoped type="text/css">
  .page{
    margin-top: 94px
  }
</style>
