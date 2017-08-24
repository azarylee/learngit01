<template>
  <div id="hot">
    <div class="title">
      <div class="img">
        <img src="../assets/img/hot.png" class="menuPic"/>
      </div>
      <div class="subTitle" @click="show">
        <div >热门分类</div>
      </div>
    </div>
    <div class="title" v-show="show01">
      <div class="img">
        <img />
      </div>
      <div class="subTitle">
        <div class="" id="science" @click="contentShow1">科技·互联网</div>
      </div>
    </div>
    <div class="title" v-show="show01" @click="contentShow2">
      <div class="img">
        <img />
      </div>
      <div class="subTitle">
        <div class="" id="business">商业·财经</div>
      </div>
    </div>

  </div>
</template>
<script>

export default {
    data(){
      return{
        show01: false,
        msg_show: false
      }
    },
    methods: {
        show: function () {
          return this.show01 = this.show01===true? false:true
        },
        contentShow1: function(){
          this.$root.eventBus.$emit('msg_show', true);
        },
        contentShow2: function(){
          this.$root.eventBus.$emit('msg_show', true);
        }
    }
}
</script>
<style lang="css">
.menuPic{ width: 2rem;}
</style>
