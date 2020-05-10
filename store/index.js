import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        // Find the index of the element that needs to be updated
        const postIndex = state.loadedPosts.findIndex( post => post.id === editedPost.id );
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxt-blog-3b14c.firebaseio.com/posts.json')
          .then( res => {
            const postsArray = []
            for ( const key in res.data ) {
              postsArray.push( { ...res.data[key], id: key } )
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch( e => context.error(e) )
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      editPost(vuexContext, editedPost) {
        return axios.put('https://nuxt-blog-3b14c.firebaseio.com/posts/' +
          editedPost.postId +
          ".json", editedPost)
          .then( res => vuexContext.commit('editPost', editedPost))
          .catch( e => console.log(e) );
      },
      addPost(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() };
        return axios.post('https://nuxt-blog-3b14c.firebaseio.com/posts.json', createdPost )
          .then( res => { vuexContext.commit('addPost', {...createdPost, id: res.data.name})})
          .catch( e => console.log( e ) );
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
