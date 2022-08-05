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
                            // props的第一種寫法，值為對象，該對象中的所有key-value都會以props的形式傳給Detail組件
                            // props:{a:1,b:'hello'},
                            // props的第二種寫法，值為布爾值，若布爾值為真，就會把該路由組件收到的所有params參數，以props的形式傳給Detail組件
                            // props:true,
                            // props的第三種寫法，值為函數
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
                        }
                    ]
                },
            ]
        }
    ]
})