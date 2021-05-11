import Vue from 'vue'
import Vuex from 'vuex'
import notebook from './modlues/notebook'
import note from './modlues/note'
import user from './modlues/user'
import trash from './modlues/trash'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {notebook, note, user, trash}
})