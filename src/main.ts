import 'normalize.css'
import './assets/stylesheets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTh, faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { createApp } from 'vue'
import App from './App.vue'

library.add(faTh, faMicrophone, faSearch)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)    
    .mount('#app')
