import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFloppyDisk, faPhone, faPlus, faRotateRight, faTrash, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faRotateRight,faTrash, faFloppyDisk, faPlus, faMinus );

import App from './App.vue'
import router from './router'

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.mount('#app')