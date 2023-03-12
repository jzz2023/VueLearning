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
                            path:'detail',
                            component:Detail
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