import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入echarts
import echarts from 'echarts'
import 'echarts/map/js/china' 
Vue.prototype.$echarts = echarts

// ElementUI组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
//图片懒加载模块
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload);
//引入全局组件
//首页头部
import IndexHeader from './components/index_header/index_header.vue'
//首页服务指南
import IndexServer from './components/index_server/index_server.vue'
//首页脚部
import IndexFooter from './components/index_footer/index_footer.vue'


//引入axios模块
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000'//连接的服务器地址
// axios.defaults.baseURL = 'http://testkuaiyu.applinzi.com'//连接的服务器地址
Vue.prototype.axios = axios;

//引入qs模块
import qs from 'qs'
Vue.prototype.qs = qs;

//引入Moment
import moment from 'moment';
Vue.prototype.moment = moment;

//挂载全局组件index_header
Vue.component("index-header", IndexHeader);
//挂载全局组件index_server
Vue.component("index-server", IndexServer);
//挂载全局组件index_footer
Vue.component("index-footer", IndexFooter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
