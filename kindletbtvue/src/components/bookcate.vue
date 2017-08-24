<template>
  <div id="book">
    <div class="title" @click="contentShow3">
      <div class="img">
        <img src="../assets/img/book.png" class="menuPic"/>
      </div>
        <div class="subTitle">我的书架</div>
        <span class="badge">{{ number }}</span>
    </div>
  </div>
</template>
<script>
export default {
    data(){
      return{
        number: 10
      }
    },
    methods: {
      contentShow3() {
        this.$root.eventBus.$emit('msg_show', true);
      }
    }
}
</script>
<style lang="css">
.badge{ text-align: right;}
</style>
