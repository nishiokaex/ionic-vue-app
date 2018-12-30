// document-register-elementのパッケージはionic coreが内部で使うバージョンと一致させる必要がある
// core@4.0.0-beta.12 の時点で document-register-element@1.7.0 を利用している
// @vue/web-component-wrapperはVueプロパティの受け渡しに失敗して動作しなかった
import 'document-register-element/build/document-register-element'; // Custom Elements polyfill for firefox, IE9, Edge

import Vue from 'vue';
import VueCustomElement from 'vue-custom-element';
import App from './App.vue';
import router from './router';
import store from './store';
import Ionic from '@ionic/vue';

Vue.use (VueCustomElement);
Vue.use (Ionic);

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

new Vue ({
  router,
  store,
  render: h => h (App),
}).$mount ('#app');
