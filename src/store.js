import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return{
      name : 'kim',
      age : 20,
      likes : 30,
      likeState : true,
      more : {}
    }
  },
  mutations:{
    setMore(state, data){
      state.more = data
    },
    changeAge(state, data){
      state.age += data
    },
    oneClick(state){
      if(state.likeState){
        state.likes += 1
        state.likeState = false
      }else{
        state.likes -= 1
        state.likeState = true
      }
    },
  },
  actions : {
    getData(context){
      axios.get('https://codingapple1.github.io/vue/more0.json')
      .then((result) => {
        context.commit('setMore',result.data)
      })
    },
  },
})

export default store;