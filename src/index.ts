import Vue from 'vue'
import App from './app.vue'

import * as Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Raven.config('nya-n', {
  dataCallback: function (data) {
    console.log(data);
    return data;
  }
})
  .addPlugin(RavenVue, Vue)
  .install();


new Vue({
  el: '#app',
	components: {
		App
  },
  template: '<app />'
})