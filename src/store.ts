import { createStore } from "vuex";
import { testData, testPosts, ColumnProps, PostProps } from './testData'
interface UserProps {
    isLogin:boolean;
    name?:string;
    id?:string;
}
export interface GlobalDataProps{
    columns:ColumnProps[];
    posts:PostProps[];
    user:UserProps;
}

const store = createStore<GlobalDataProps>({
    state:{
        columns: testData,
        posts: testPosts,
        user: { isLogin: false }
    },
    mutations:{
        login(state) {
            console.log(state,'wwwwww')
            state.user = {...state.user, isLogin: true,name:"ciso",id:'1'}
        }
    },
    getters:{
        biggerColumnsLen(state) {
            return state.columns.filter(c => c.id > 2).length
        },
        getColumnById: (state) => (id:number) => {
            return state.columns.find(c => c.id === id)
        },
        getPostsByCid: (state) => (cid:number) => {
            return state.posts.filter(post => post.columnId === cid)
        }
    }

})
export default store