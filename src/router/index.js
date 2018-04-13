import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/mio/HelloWorld'
import Ciao from '@/components/mio/Ciao'
import Servers from '@/components/Server/Servers.vue'
import ServerDetails from '@/components/Server/ServerDetails.vue'
import Parent from '@/components/mio/parent'
import User from '@/components/miouser/User.vue'
import Dynamic from '@/components/slot-example/dynamic.vue'

import Quotes from  '@/components/quotes/index.vue'
import FormsComponent from  '@/components/forms/index.vue'
import GoodieDirective from  '@/components/goodies/index.vue'
import filterDirective from  '@/components/filters/index.vue'
import mixinsDirective from  '@/components/mixins/index.vue'


Vue.use(Router)
// !mc! mode history disables hash on url
export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ciao',
      name: 'mioCiao',
      component: Ciao
    },
    {
      path: '/user',
      name: 'mioUser',
      component: User
    },
    {
      path: '/parent',
      name: 'mioParent',
      component: Parent
    },
    {
      path: '/status',
      name: 'stats',
      component: Servers
    },
    {
      path: '/dynamic',
      name: 'dyn',
      component: Dynamic
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: Quotes
    },
    {
      path: '/forms',
      name: 'form',
      component: FormsComponent
    },
    {
      path: '/goodie',
      name: 'goodie',
      component: GoodieDirective
    },
    {
      path: '/fdata',
      name: 'fdata',
      component: filterDirective
    },
    {
      path: '/mdata',
      name: 'mixdata',
      component: mixinsDirective
    }
  ]
})
