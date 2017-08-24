<template>
  <div id="cont">
    <div class="waitMsg" v-if="msg_show===true">{{ message }}</div>
    <div class="blank" v-else="msg_show===false"></div>
      <bottommenu></bottommenu>
  </div>
</template>
<script>
import bottommenu from '../components/bottommenu'

export default {
  data(){
    return{
      message: '请稍等，正在努力加载中……',
      msg_show: false
    }
  },
  components:{
    bottommenu
  },
  created() {
    this.$root.eventBus.$on('msg_show', () => {
        this.msg_show = true ;
    });
  }
}
</script>
<style>
#cont{ flex: 1; -webkit-flex: 1; display: flex; flex-direction: column; width: 100%; height: 100%; position: relative;}
.blank{ height: 100%;}
.waitMsg{ display: flex; justify-content: center; align-items: center; height: 100%; font-size: 2rem;}
.waitMsg>span{align-items: center; justify-content: center;}
</style>
