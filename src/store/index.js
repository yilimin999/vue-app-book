import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList:[],
    currendList:[],
    currentId:0,
    detailId:0,
    detailData:[]
  },
  mutations: {
    setState(state,params){
      state[params.key]=params.value;
    }
  },
  actions: {
    getNav({commit}){
      Axios({
        url:'/api/navlist',
        method:'get'
      }).then(res=>{
        if (res.data.code===200) {
          commit({type:'setState',key:'navList',value:res.data.data})
        }
      })
    },
    getList({commit,state}){
        Axios({
          url:`/api/list?id=${state.currentId}`
        }).then(res=>{
          if (res.data.code===200) {
            commit({type:'setState',key:'currendList',value:res.data.findData})
          }
        })
    },
    getDetailDate({commit,state}){
      Axios({
        url:`/api/detail?id=${state.detailId}`
      }).then(res=>{
        if (res.data.code===200) {
          commit({type:'setState',key:'detailData',value:res.data.detailData})
        }
      })
    }
  },
  modules: {
  }
})
