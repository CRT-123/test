// 统一管理所有的 pinia store
import userStore from './modules/user'
export default function useStore() {
    return {
        home: userStore()
    }
}
