import Vue from 'vue'
import {
  Message,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Popover,
  button
} from 'element-ui'

Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Popover)
Vue.use(button)


Vue.prototype.$message = Message
