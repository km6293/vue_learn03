import { createStore } from 'vuex'

const store = createStore({
  state(){
    return{
      name : 'kim',
      age : 20,
      likes : [30,40,50],
      likeState : true
    }
  },
  mutations:{
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
  }
})

export default store;