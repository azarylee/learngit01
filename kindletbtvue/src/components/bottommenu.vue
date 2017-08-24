<template>
  <div id="bottomMenu">
      <div class="leftMenu glyphicon glyphicon-menu-hamburger">

      </div>
      <div class="middleMenu glyphicon glyphicon-menu-down">

      </div>
      <div class="rightMenu glyphicon glyphicon-menu-up">

      </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="css">
#bottomMenu{ flex: none; -webkit-flex: none; display: flex; flex-direction: row; height: 8rem; width: 100%; border-top: 2px solid #999;  position: relative;}
.leftMenu,.middleMenu{ width: 8rem; border-right: 1px solid #999; display: flex; justify-content: center; align-items: center; font-size: 3rem;}
.rightMenu{ flex: 1; -webkit-flex: 1; border-right: 1px solid #999; display: flex; justify-content: center; align-items: center; font-size: 3rem;}
</style>
