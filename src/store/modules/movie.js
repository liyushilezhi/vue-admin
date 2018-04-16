import axios from 'axios'
const state = {
  movie:[],
  movieNum:null
};
const mutations = {
  GET_ALL_MOVIE(state,payload){
    state.movie=payload;
  },
  DEL_MOVIE(state,payload){
    state.movie=payload;
  },
  GET_MOVIE_NUM(state,payload){
    state.movieNum = payload;
  }
};

const actions = {
  getMovieNum({commit},params){
    // axios.get("/api/user/getUserCount")
    // .then(res=>{
    //   let payload = res.length;
    //   commit("GET_MOVIE_NUM",payload)
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  },
  getAllMovie({commit},params){
    // axios.get("/api/user/getUserAll",{
    //   params:{
    //     root:params.root,
    //     pageSize:params.pageSize,
    //     curPage:params.curPage,
    //   }
    // })
    // .then(res=>{
    //   let payload = res;
    //   // console.log('getAllMembers');
    //   commit("GET_ALL_MOVIE",payload)
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  },
  delMovie({commit},params){
    console.log(params);
    // axios.get("/api/user/delUser",{
    //   params:{
    //     root:params.root,
    //     id:params.id,
    //     pageSize:params.pageSize,
    //     curPage:params.curPage,
    //   }
    // })
    // .then(res=>{
    //   let payload = res;
    //   // console.log('delMembers'); 
    //   commit("DEL_MOVIE",payload)
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }
};
const getters = {
  // 获取按更新状态的数据
  movie:state => {
    return state.members
  },
  // 用户总数
  movieNum:state => {
    return state.userNum
  }
}
export default{
  state,
  mutations,
  actions,
  getters
}