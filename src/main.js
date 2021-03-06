import Vue from 'vue';
import Buefy from 'buefy';
import '../node_modules/buefy/lib/buefy.css';
import App from './App.vue';
import GetData from './services/getData.service';
import Sort from './services/sort.service';
import Storage from './services/storage.service';
import AppLogic from './services/appLogic.service';
import { Toast } from 'buefy';
import store from './store';
import BackToTop from 'vue-backtotop';
import PriceCheck from './services/priceCheck.service';

Vue.use(Buefy, {
  defaultToastDuration: 2000,
  defaultContainerElement: '#app'
});
Vue.use(BackToTop);

Vue.component(Buefy.Field.name, Buefy.Field);
Vue.component(Buefy.Input.name, Buefy.Input);
Vue.component(Buefy.Taginput.name, Buefy.Taginput);
Vue.component(Buefy.Icon.name, Buefy.Icon);
Vue.component(Buefy.Checkbox.name, Buefy.Checkbox);
Vue.component(Buefy.Collapse.name, Buefy.Collapse);
Vue.component(Buefy.Select.name, Buefy.Select);
Vue.component(Buefy.Loading.name, Buefy.Loading);
Vue.component(Buefy.Radio.name, Buefy.Radio);
Vue.component(Buefy.Tabs.name, Buefy.Tabs);
Vue.component(Buefy.Modal.name, Buefy.Modal);
Vue.component(Buefy.Tooltip.name, Buefy.Tooltip);

Vue.prototype.$toast = Toast;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  GetData,
  Sort,
  Storage,
  AppLogic,
  PriceCheck
}).$mount('#app');
