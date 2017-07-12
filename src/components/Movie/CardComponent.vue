<template>
    <section>
      <header>
        <h2>影院热映</h2>
        <a href="#">更多</a>
      </header>
      <div class="section-content">
        <ul class="items">
          <li class="item">
            <router-link to="/movie/detail/0212">
              <div class="item-poster" style="background-image: url(https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2469070974.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg)"></div>
              <span class="item-title">神偷奶爸3</span>
              <div class="item-rating">
                <span class="rating-stars">
                  <span class="rating-star rating-star-small-full"></span>
                  <span class="rating-star rating-star-small-full"></span>
                  <span class="rating-star rating-star-small-full"></span>
                  <span class="rating-star rating-star-small-gray"></span>
                  <span class="rating-star rating-star-small-gray"></span>
                </span>
                <span>7.1</span>
              </div>
            </router-link>
          </li>
          <li class="item">
            <a href="#">
              <div class="item-poster" style="background-image: url(https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2469070974.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg)"></div>
              <span class="item-title">神偷奶爸3</span>
              <div class="item-rating">
                <span class="rating-stars">
                  <span class="rating-star rating-star-small-full"></span>
                  <span class="rating-star rating-star-small-full"></span>
                  <span class="rating-star rating-star-small-full"></span>
                  <span class="rating-star rating-star-small-gray"></span>
                  <span class="rating-star rating-star-small-gray"></span>
                </span>
                <span>7.1</span>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="#">
              <div class="item-poster" style="background-image: url(https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2469070974.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg)"></div>
              <span class="item-title">神偷奶爸3</span>
              <div class="item-rating">
                <span class="rating-stars">
                  <span class="rating-star rating-star-small-full"></span>
                  <span class="rating-star rating-star-small-full"></span>
                  <span class="rating-star rating-star-small-full"></span>
                  <span class="rating-star rating-star-small-gray"></span>
                  <span class="rating-star rating-star-small-gray"></span>
                </span>
                <span>7.1</span>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="#">
              <div class="item-poster" style="background-image: url(https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2469070974.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg)"></div>
              <span class="item-title">神偷奶爸3</span>
              <div class="item-rating">
                <span class="rating-stars">
                  <span class="rating-star rating-star-small-full"></span>
                  <span class="rating-star rating-star-small-full"></span>
                  <span class="rating-star rating-star-small-full"></span>
                  <span class="rating-star rating-star-small-gray"></span>
                  <span class="rating-star rating-star-small-gray"></span>
                </span>
                <span>7.1</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
export default {
  name: 'cardComponent'
}
</script>

<style lang="scss" scoped type="text/css">
@import '../../assets/css/themes';

section{
  overflow: hidden;
  background-color: #ffffff
}
header{
  padding: 20px 36px;
}
header h2{
  font-size: 32px;
  display: inline-block;
}
header a{
  color: $fontColorThemes;
  float: right;
  font-size: 25px;
  line-height: 45px
}

.section-content{
  margin-bottom: -80px;
}
.items{
  overflow-x: auto;
  white-space: nowrap
}
.item{
  display: inline-block;
  vertical-align: top;
  width: 200px;
  text-align: center;
  padding: 25px 0 100px 15px
}
.item .item-title{
  font-size: 24px;
  margin-top:12px;
  display: inline-block
}
.item:first-child{
  padding-left: 30px
}
.item-poster {
  width: 100%;
  background-size: cover;
  background-position: center;
  overflow: hidden
}
.item-poster:before {
  content: '';
  float: left;
  margin-top: 300px;
}
.item-rating{
  // color: red;
}

</style>

