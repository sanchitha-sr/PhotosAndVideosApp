import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        favorites: [

        ],
        favoriteVideos: [],
        searchString: "animals",
        accessToken: ""
    },
    getters: {

    },
    mutations: {
        addToFavorites: (state, item) => {
            state.favorites.push(item)
        },
        addToFavoriteVideos: (state, item) => {
            state.favoriteVideos.push(item)
        },
        removeFromFavorites: (state, item) => {
            state.favorites.filter(function (value) {
                return value !== item
            })
        },
        changeMyString: (state, item) => {
            state.searchString = item
        }

    }
})