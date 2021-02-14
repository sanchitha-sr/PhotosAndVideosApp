import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        favorites: [

        ],
        favoriteVideos: [],
        searchString: "animals",
        accessToken: "563492ad6f917000010000014060d806c66c47b88b9b4d7f8c487692"
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