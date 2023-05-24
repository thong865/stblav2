import { defineStore } from 'pinia'

export const useSearchStore = defineStore('querySearch', {
    state: () => ({
        keyword: {},
        count:0
    }),
    getters:{
        fetchQuerySearch(state){
            return state.keyword
        }
    }
})