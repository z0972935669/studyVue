// 該文件專門用於創建整個應用的路由器
import VueRouter from 'vue-router'
// 引入組件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 創建一個路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '關於' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主頁' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新聞' },
                    // 獨享路由守衛:只有前置，沒有後置
                    beforeEnter: (to, from, next) => {
                        console.log('獨享路由守衛', to, from);
                        if (to.meta.isAuth) { //判斷是否需要權限
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else {
                                alert('學校名不對，無權限查看!')
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: { isAuth: true, title: '詳情' },
                            // props的第一種寫法，值為對象，該對象中的所有key-value都會以props的形式傳給Detail組件
                            // props:{a:1,b:'hello'},
                            // props的第二種寫法，值為布爾值，若布爾值為真，就會把該路由組件收到的所有params參數，以props的形式傳給Detail組件
                            // props:true,
                            // props的第三種寫法，值為函數
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                },
            ]
        }
    ]
})

// 全局前置路由守衛-初始化的時候被調用、每次路由切換之前被調用
// router.beforeEach((to,from,next)=>{
//     console.log('前置路由守衛',to,from);
//     if(to.meta.isAuth){ //判斷是否需要權限
//         if(localStorage.getItem('school') === 'atguigu'){
//             next()
//         }else{
//             alert('學校名不對，無權限查看!')
//         }
//     }else{
//         next()
//     }
// })

// 全局後置路由守衛-初始化的時候被調用、每次路由切換之後被調用
// router.afterEach((to,from)=>{
//     console.log('後置路由守衛',to,from);
//     document.title = to.meta.title || '硅谷系統'
// })

export default router