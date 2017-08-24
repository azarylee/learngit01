// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import $ from './common/js/jquery-3.2.1.js'
import VueResource from 'vue-resource'
Vue.use(VueResource);

import menu from '@/components/menu'
import content from '@/components/content'
import hotcate from '@/components/hotcate'
import pincate from '@/components/pincate'
import readBooks from '@/components/readBooks'
import bookcate from '@/components/bookcate'
import colcate from '@/components/colcate'
import bottommenu from '@/components/bottommenu'
import globalvar from '@/components/global'
Vue.use(globalvar);

import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.use(iView);

import "./common/bootstrap/css/bootstrap.min.css"

/* eslint-disable no-new */
Vue.config.debug= true;

new Vue({
  el: '#app',
  render: h => h(App),
  data:{
    eventBus: new Vue ()
  }
})
