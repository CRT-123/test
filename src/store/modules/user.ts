// 管理分类导航的数据
import { defineStore } from 'pinia'
let userStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count++
        }
    },
    getters: {}
})
export default userStore

