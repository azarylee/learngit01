<template>
  <div id="collect">
    <div class="title" @click="contentShow4">
      <div class="img">
        <img src="../assets/img/star.png" class="menuPic"/>
      </div>
        <div class="subTitle">我的收藏</div>
        <span class="badge">{{ number }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
      return{
        number: 0
      }
  },
  methods: {
    contentShow4() {
      this.$root.eventBus.$emit('msg_show', true);
    }
  }
}
</script>
<style lang="css">
.badge{ text-align: right;}
</style>
