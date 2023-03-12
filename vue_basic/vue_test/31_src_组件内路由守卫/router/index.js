//该文件用于创建整个应用的路由器
import vueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Message from "@/pages/Message";
import News from "@/pages/News";
import Detail from "@/pages/Detail";

//创建一个路由器
const router = new vueRouter({
    mode:'hash', //默认hash，其他history
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{isAuth:true,title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title: '主页'},
            children:[
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            meta:{title:'详情'},
                        //    props第一种写法，值为对象，该对象所有key-value以props形式传给Detail
                        //     props:{a:1,b:'hello'}

                        //    props第二种写法,值为true，所有params参数以props的形式传给Detail
                        //     props:true

                        //    props第三种写法，值为函数
                            props($router){
                                return{
                                    id:$router.query.id,
                                    title:$router.query.title
                                }
                            }
                        }
                    ]
                },
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title: '新闻'},
                    /*beforeEnter:(to,from,next)=>{
                        if(to.meta.isAuth){ //判定是否需要权限
                            if(localStorage.getItem('school') === 'atguigu'){
                                next()
                            }else {
                                alert('学校名不对，无权查看')
                            }
                        }else {
                            next()
                        }
                    }*/
                }
            ]
        }
    ]
})

//全局前置路由守卫,路由切换之前、初始化时被调用
/*router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫',to,from)
    if(to.meta.isAuth){ //判定是否需要权限
        if(localStorage.getItem('school') === 'atguigu'){
            next()
        }else {
            alert('学校名不对，无权查看')
        }
    }else {
        next()
    }
})*/

//全局前置路由守卫,路由切换之后、初始化时被调用
/*router.afterEach((to,from,next)=>{
    console.log('后置路由守卫')
    document.title=to.meta.title || '路由测试'
})*/

export default router