<template>
  <header class="topNav">
    <div class="topNav-primary">
      <a href="/"><h1>豆瓣</h1></a>
      <nav>
        <ul>
          <li><a href="" style="color:#2384E8">电影</a></li>
          <li><a href="" style="color:#9F7860">图书</a></li>
          <li><a href="" style="color:#E4A813">广播</a></li>
          <li><a href="" style="color:#2AB8CC">小组</a></li>
        </ul>
        <span></span>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'headerComponent'
}
</script>

<style lang="scss" scoped type="text/css">
  @import '../../assets/css/themes';
  .topNav{
    height: 100px;
    width: 100%;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    background-color: $backgroundThemes;
  }
  .topNav-primary{
    border-bottom: 1px solid $borderColorThemes;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 94px;
    padding: 0 36px;
    box-sizing: border-box
  }
  .topNav-primary > *{
    white-space: nowrap
  }
  .topNav-primary > a{
    color: $fontColorThemes;
    font-size: 23px
  }
  .topNav-primary nav > *{
    vertical-align: middle
  }
  .topNav-primary a h1{
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  nav{
    display: inline-block
  }

  .topNav-primary nav > *, 
  .topNav-primary nav li{
    display: inline-block
  }

  nav li a{
    margin-right: 38px;
    font-size: 30px
  }
  nav span{
    background: url('../../assets/search_no_result.png') no-repeat;
    background-size: cover;
    position: relative;
    height: 35px;
    width: 35px;
    display: inline-block;
    margin-top: 8px
  }

</style>
