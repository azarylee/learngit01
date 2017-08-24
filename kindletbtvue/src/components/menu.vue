<template>
  <div id="men">
    <div class="menuList flexPosition">
      <div class="menc">
        <div class="title">
          <div class="img">
            <img src="../assets/logo.png" class="logo">
          </div>
          <div class="subTitle">
            {{ accountname }}
          </div>
        </div>
        <hotcate></hotcate>
        <pincate></pincate>
        <bookcate></bookcate>
        <colcate></colcate>
      </div>
      <bottommenu></bottommenu>
    </div>

  </div>
</template>
<script>
import hotcate from '../components/hotcate'
import pincate from '../components/pincate'
import bookcate from '../components/bookcate'
import colcate from '../components/colcate'
import bottommenu from '../components/bottommenu'

export default {
  data(){
    return{
      accountname: '登录'
    }
  },
  components:{
    hotcate,
    pincate,
    bookcate,
    colcate,
    bottommenu
  }
}
</script>
<style>
#men{ flex: none; -webkit-flex: none; position: relative; width: 23rem; border-right: 1px solid #999; max-width: 75%;}
.menuList{ display: flex; flex-direction: column; display: -webkit-box; height: 100%;}
.menc{ flex: 1; -webkit-flex: 1; width: 100%;}
.logo{ width: 2rem;}
</style>
