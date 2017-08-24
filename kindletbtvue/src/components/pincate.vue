<template>
  <div id="pin">
      <div class="title" @click="show">
        <div class="img">
          <img src="../assets/img/feed.png" class="menuPic"/>
        </div>
        <div class="subTitle">
          <div>我的订阅</div>
        </div>
      </div>
      <div class="title" v-show="show01"  @click="showRead">
        <div class="img">
          <span :class="[aClass]"></span>
        </div>
          <div class="subTitle" id="science" v-if="read">阅读</div>
          <span class="badge">{{ number1 }}</span>
      </div>
      <readBooks v-show="showRead01" @count="change" ref="readBooks"></readBooks>
      <div class="title" v-show="show01" @click="showStory">
        <div class="img">
          <span :class="[bClass]"></span>
        </div>
          <div class="subTitle" id="science" v-if="story">小说</div>
          <span class="badge">{{ number2 }}</span>
          <!-- <readStory></readStory> -->
      </div>
      <div class="title" v-show="show01" @click="showSkill">
        <div class="img">
          <span :class="[cClass]"></span>
        </div>
          <div class="subTitle" id="science" v-if="skill">科技</div>
          <span class="badge" >{{ number3 }}</span>
          <!-- <readSkill></readSkill> -->
      </div>
  </div>
</template>
<script>
import readBooks from '../components/readBooks'

export default {
  data(){
    return{
      number1: 0,
      number2: 7,
      number3: 18,
      read: true,
      story: true,
      skill: true,
      show01: false,
      aClass: 'glyphicon glyphicon-chevron-right',
      bClass: 'glyphicon glyphicon-chevron-right',
      cClass: 'glyphicon glyphicon-chevron-right',
      showRead01: false,
    }
  },
  methods:{
    showRead: function(){
      if(this.aClass=='glyphicon glyphicon-chevron-right'){
        this.aClass= 'glyphicon glyphicon-chevron-down';
        this.showRead01= true;
      } else{
        this.aClass= 'glyphicon glyphicon-chevron-right';
        this.showRead01= false;
      }
    },
    showStory: function(){
      if(this.bClass=='glyphicon glyphicon-chevron-right'){
        this.bClass= 'glyphicon glyphicon-chevron-down'
      } else{
        this.bClass= 'glyphicon glyphicon-chevron-right'
      }
    },
    showSkill: function(){
      if(this.cClass=='glyphicon glyphicon-chevron-right'){
        this.cClass= 'glyphicon glyphicon-chevron-down'
      } else{
        this.cClass= 'glyphicon glyphicon-chevron-right'
      }
    },
    show: function () {
      return this.show01 = this.show01===true? false:true;

    },
    change: function(number1){
      this.number1= number1;
    }
  },
  components:{
    readBooks
  },
  mounted: function() {
    //do something after mounting vue instance
    this.number1= $('#readBook').children('.title').length;
    console.log($('#readBook').children('.title').length);
  }
}
</script>
<style lang="css">
.img>span{ font-size: 2rem;}
.badge{ text-align: right;}
</style>
