// 該文件專門用於創建整個應用的路由器
import VueRouter from 'vue-router'
// 引入組件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 創建一個路由器
export default new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',
                            component:Detail,
                        }
                    ]
                },
            ]
        }
    ]
})