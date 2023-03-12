//该文件用于创建整个应用的路由器
import vueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Message from "@/pages/Message";
import News from "@/pages/News";
import Detail from "@/pages/Detail";

//创建一个路由器
export default new vueRouter({
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
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
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
                    path:'news',
                    component:News
                }
            ]
        }
    ]
})