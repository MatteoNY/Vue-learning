// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
     // console.log('Global Mixin - Created Hook');
  }
});

Vue.config.productionTip = false;

// global directive
Vue.directive('highlight', {
  bind(el, binding, vnode) {
      // el.style.backgroundColor = 'green';
      // el.style.backgroundColor = binding.value;
      var delay = 0;
      if (binding.modifiers['delayed']) {
          delay = 3000;
      }
      setTimeout(() => {
          if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value;
          } else {
              el.style.color = binding.value;
          }
      }, delay);
  }
});

export const eventBus = new Vue({
  methods: {
      changeAge(age) {
          this.$emit('ageWasEdited', age);
      }
  }
});

// for global styles:
// import './styles/my-styles.scss'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
// ****
