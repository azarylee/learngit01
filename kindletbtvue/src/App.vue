<template>
  <div id="app" class="flexPosition">
    <div class="flexPosition flexDetail">
      <mainmenu></mainmenu>
      <maincontent></maincontent>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import mainmenu from './components/menu'
import maincontent from './components/content'

export default {
  components:{
    mainmenu,
    maincontent
  }
}
</script>

<style>
#app{ display: flex; flex-direction: row; height: 100%; width: 100%; overflow: hidden;}
.flexDetail{ display: flex; display: -moz-box; display: -webkit-box; display: -ms-flexbox; display: -webkit-flex;}
.flexPosition{ position: absolute !important; left: 0; right: 0; top: 0; bottom: 0; overflow: hidden;}
/*menu*/
.title{ display: flex; flex-direction: row; display: -webkit-flex; display: -webkit-box;}
.img{ flex: none; -webkit-flex: none; text-align: center; width: 2.8rem;
    height: 2.8rem; justify-content: center; max-height: 100%; max-width: 100%; line-height: 2rem; margin: 1rem;}
.subTitle{ flex: 1; -webkit-flex: 1; -webkit-box-flex: 1; line-height: 4rem; font-size: 2.1rem;}
.title>span{ margin-top: 0.4em;}
.badge{ position: relative; right: 1rem; font-size: 2rem;}
/*menu*/
/*字体*/
.fhei{
 font-family:  STHeiti, san-serif,'Heiti SC','黑体',"sans-serif",PingFang, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", STHei, STHeiti, "MYing Hei S", "MYing Hei T"
}
.fsong{
  font-family:  STSong, serif,'宋体','song T',"sans-serif", "Adobe Songti Std", "Song S", "Song T", NSimSun;
}
.fyuan{
  font-family: STYuan, san-serif,'Hiragino Mincho Pro','微软雅黑','FZHei-B01',"sans-serif",STYuan, STYuanti, YouYuan;
}
.fkai{
  font-family: STKai, serif,'Kaiti SC',"楷体","楷体_GB2312",'Kindle Kai',"sans-serif",STKai, STKaiti, KaiTi, "MKai PRC";
}
.Palatino{
  font-family: "Palatino",STKai, STKaiti, KaiTi, "MKai PRC",serif;
}
.Ember{
  font-family:"Amazon Ember",STKai, STKaiti, KaiTi, "MKai PRC",sans-serif
}
.Bookerly{
  font-family:"Bookerly",STKai, STKaiti, KaiTi, "MKai PRC",serif
}
.Baskerville{
  font-family: "Baskerville",STKai, STKaiti, KaiTi, "MKai PRC",serif;
}
/*字体*/
</style>
