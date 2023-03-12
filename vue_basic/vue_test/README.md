# 笔记

## 脚手架文件结构
    |——node_modules
    |——public
    |   |——favicon.ico:页签图标
    |   |__index.html:主页面
    |—— src
    |   |——assets：存放静态资源
    |   |   |__logo.png
    |   |—— component：存放组件
    |   |   |__HelloWorld.vue 
    |   |—— App.vue:汇总所有组件
    |   |—— main.js:入口文件
    |—— .gitignore：git版本管制忽略配置
    |—— babel.config.js：babel配置文件
    |—— package.json：应用包配置文件
    |—— README.md：应用描述文件
    |—— package-lock.json：包版本控制文件

## vue.config.js配置文件
>使用vue inspect > output.js可以查看到vue脚手架的默认配置
> 使用vue.config.js可以对脚手架进行定制，https://cli.vuejs.org/zh
## ref属性
    1.被用来给元素或子组件注册引用信息(id的替代者)
    2.应用在htm1标签上获取的是真实DoM元素，应用在组件标签上是组件实例对象(vc)
    3.使用方式：
        打标识：<h1 ref="xx">...</h1>或<School ref="xx"></School>
        获取：this.$refs,xxx

## 配置项props
    功能：让组件接收外部传过来的数据
    (1).传递数据：
        <Demo name="xxx"/>
    (2).接收数据：
        第一种方式（只接收）：
            props:['name']
        第二种方式（限制类型）：
            props:{
                name Number
            }
    第三种方式(限制类型、限制必要性、指定默认值)：
    props:{
        name:{
        type:String,//类型
        required:true,/必要性
        default:'老王'//默认值
        }
    }
    备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
    若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据
## es6的3种暴露方式
    ①var name = 'lisi'
     var age = 20
     function say(){}
     export {name,age,say}
     引入：import {name,age,say} from 'path'
    ②export var name = ""
     export var age = 
     export function say()
     import {name,age,say} from 'path'
    ③var obj = {
        name:'lili',
        age:20,
        say(){return name+age;}
    }
    export default obj
## mixin（混入）
    功能：可以把多个组件共用的配置提取成一个混入对象
    方式：
        定义混合：
            {
                data(){},
                methods:{}
            }
        使用混合:
            ①全局混入：Vue.mixin(xxx)
            ②局部混入：mixins:[]
## 插件
    功能：用于增强Vue
    本质：包含install方法的一个对象，install可包含多个参数，第一个是Vue，其他是使用者传递的数据
    定义插件：
    对象.install=function(Vue,options){
    //1.添加全局过滤器
    Vue.filter(....)
    //2.添加全局指令
    Vue.directive(....)
    //3.配置全局混入（合）
    Vue.mixin(....)
    //4.添加实例方法
    Vue.prototype.$myMethod function （）{...
    Vue.prototype.$myProperty xxxx
    使用插件：Vue.use(plugins)
## scope样式
    作用：让样式在局部生效，防止冲突
    写法：<style scope> <style lang="less"> less可以嵌套样式
## 总结TodoList案例
    1.组件化编码流程：
        (1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
        (2)实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一
    些组件在用：
            1).一个组件在用：放在组件自身即可。
            2).一些组件在用：放在他们共同的父组件上（状态提升）。
        (3)实现交互：从绑定事件开始。
    2.propsi适用于：
        (1).父组件=>子组件通信
        (2).子组件=>父组件通信（要求父先给子一个函数）
    3.使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props
     是不可以修改的！
    4.propst传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推
     荐这样做。
## WebStorage
    1.存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
    2.浏览器端通过Vindow.sessionStorage和Window.localStorage属性来实现本地存储机制。
    3.相关API:
        1.xxxxxStorage.setItem('key','value');
        该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
        2.xxxxxStorage.getItem('person');
        该方法接受一个键名作为参数，返回键名对应的值。
        3.xxxxxStorage.removeItem('key');
        该方法接受一个键名作为参数，并把该键名从存储中删别除。
        4.xxxxxStorage.clear()
        该方法会清空存储中的所有数据。
    4.备注：
        1.SessionStorage存储的内容会随着浏览器窗口关闭而消失。
        2.LocalStorage1存储的内溶，需要手动清除才会消失。
        3.
        xxxxxStorage.getItem(xxx)如果XXx对应的value?获取不到，那么getltem的返回值是null。
        4.JsoN.parse(nul1)的结果依然是null。
## 组件的自定义事件
    1、一种组件间通信方式，适用于:子组件===》父组件
    2、使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）
    3、绑定自定义事件：
        ①在父组件中：<Student @student="test" />
        ②在父组件：
        <Student ref="demo" />
        ......
        mounted(){
            //this.$ref.demo获取组件
            this.$ref.demo.$on('student',this.test)
        }
        ③若想自定义事件只触发一次，使用once,或$once
    4、触发自定义事件：this.$emit("student",params)
    5、解绑自定义事件：this.$off()
    6、组件上绑定原生DOM事件：@click.native
    7、通过this.$ref.demo.$on('student',回调)，回调要么配置在methods中，如果直接写必须写成箭头函数。function()=>{}
## 全局事件总线
    1、一种组件间通信方式，适用于任意组件间通信
    2、安装全局事件总线
        new Vue({
            ...
            beforeCreate(){
                Vue.prototype.$bus=this //安装全局事件总线，$bus就是当前的vm
            }
        })
    3、使用事件总线
        ①接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，
        事件的回调留在A组件自身。
        methods(){
            demo(data){}
        },
        mounted(){
            this.$bus.$on('xxx',this.demo())
        }
    4、最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件。
## 消息订阅与发布
    1、一种组件间通信方式，适用于任意组件间通信
    2、使用步骤：
        ①npm i pubsub-js
        ②引入 import pubsub from 'pubsub-js'
        ③接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身。
        methods(){
            demo(data){}
        },
        mounted(){
            this.pid=pubsub.subscribe('xxx',this.demo)
        }
    3、提供数据
        pubsub.publish('xx',数据)
    4、释放：pubsub.unsubscribe(this.pid) 取消订阅
## nextTick
    1、语法 this.$nextTick(回调函数)
    2、在下一次DOM更新结束后执行其指定的回调
    3、使用情景：当数据改变后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行
## Vue脚手架配置代理
    方式一
        在vue.config.js中配置：
        devServer:{
            proxy:'http://localhost:5000'
        }
        说明：
        1.优点：配置简单，请求资源时直接发给前端(8080)即可。
        2.缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
        3.工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）
    方式二
        devServer:{
            proxy:{
              '/testProxy':{
                target:'http://localhost:5000',
                pathRewrite:{'^/testProxy':''}, //重写路径
                // ws:true, //用于支持websocket
                // changeOrigin:true
              },
              '/demo':{
                target:'http://localhost:5001',
                pathRewrite:{'^/demo':''}, //重写路径
                // ws:true, //用于支持websocket
                // changeOrigin:true //用于控制请求头中的host 欺骗服务器
              }
            }
        }
## 插槽
    1、作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于父组件==>子组件。
    2、分类：默认、具名、作用域
    3、使用方式
        1、默认：
        父组件中：
            <Category>
                <div>htm1结构1</div>
            </Category>
        子组件中：
            <template>
                <div>
                    <!-·定义插槽->
                    <slot>插槽默认内容..</slot>
                </div>
            </template>
        2、具名：
            父组件中：
                <Category>
                    <template slot="center">
                        <div>html结构1</div>
                    </template>
                    <template v-slot:footer>
                        <div>html结构2</div>
                    </template>
                </Category>
            子组件中：
                <template>
                    <div>
                        <!-·定义插槽->
                        <slot name="center">插槽默认内容..</slot>
                        <slot names="footer">插槽默认内容...</slot>
                    </div>
                </template>
        3、作用域：
            1、理解：数据在组件自身，数据展示模式由使用者决定
            2、<slot :name="games">
            父组件中：
            <Category>
            <template scope="scopeData">
            <!-·生成的是u1列表-->
                <u1>
                <li v-for="g in sdopeData.games"key="g">{{g})</li>
                </u1>
            </template>
            </Category>
            <Category>
            <template slot-scope="scopeData">
                <!-生成的是h4标题->
                <h4 v-for="g in scopeData.games"key="g">{{g))</h4>
            </template>
            </Category>
            子组件中：
            <template>
                <div>
                    <slot
                    games="games"></slot>
                </div>
            </template>
            <script>
            export default{
                name:'Category',
                props:['title'bp
                /数据在子组件自身
                data(){
                return
                games:['红色警戒'，'穿越火线'，'劲舞团'，'超级玛丽']
                },
            }
            </script>
## Vuex
    1、概念
        在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读写），也是一种组件间通信的方式，且适用于任意组件间通信。
    2、应用场景：多个组件共享数据
    3、搭建vuex环境
    //引入
    npm i vuex
        //创建最为核心的store
        import Vue from 'vue'
        //引入vuex
        import Vuex from 'vuex'
        //准备actions-响应组件中的动作
        const actions={}
        //准备mutations-处理数据
        const mutations={}
        //准备state-存储数据
        const state={}
        
        Vue.use(Vuex)
        
        export default new Vuex.Store({
        actions,
        mutations,
        state
        })
        在main.js中创建vm时传入store配置项
        //引入store
        import store from './store'
        //创建vm
        new Vue({
        el:'#app',
        render:h =h(App),
        store
        })
## getters的使用
    1、对state中的数据进行加工
    2、在store.js中进行配置
    const getters =
        bigSum(state){
            return state.sum 10
        }
        }
        /创建并暴露store
        export default new Vuex.Store({
            getters
        })
    3、读取数据：$store.getters.bigSum
## 4个map方法的使用
    1、mapState：用于映射state中的数据为计算属性
        computed:{
        //借助mapState生成计算属性：sum、school、subject(对象写法)
        ..mapState({sum:'sum',school:school',subject:'subject'}),
        /借助mapState生成计算属性，sum、school、subject(数组写法)
        ...mapState(['sum','school','subject']),
        }
    2、mapGetters：用于映射getters中的数据为计算属性
        computed:{
            /借助mapGetters生成计算属性：bigSum(对象写法)
            ...mapGetters((bigSum:bigSum)
            //借助mapGetters:生成计算属性：bigSum(数组写法)
            ...mapGetters(['bigSum'])
        }
    3、mapActions，与actions进行对话，即包含$store.dispatch()
        methods:{
        //靠mapActions生成：incrementodd、incrementWait(对象形式)
        ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
        //靠mapActions生成：incrementodd、incrementWait(数组形式)
        ..mapActions(['jiaOdd','jiaWait'])
        }
        4、mapMutations：与mutations对话，包含$store.commit()
        methods:{
        /靠mapActions生成：increment、decrement(对象Π形式)
        ...mapMutations({increment:'JIA',decrement:'JIAN'}),
        /靠mapMutations生成：JIA、JIAN(对家形式)
        ..mapMutations(['JIA','JIAN'])
        }
## 模块化+命名空间
    1、目的：数据分类，维护代码
    2、修改store.js
```
    const countAbout ={
        namespaced:true,/开启命名空间
        state:{x:1},
        mutations:{..}
        actions:{..},
        getters:{
        bigSum(state){
        return state.sum 10
            }
        }
    }
    
    const personAbout = {
        namespaced:true,/开启命名空间
        state:{...}
        mutations:{..}
        actions:{..}
    }
    const store = new Vuex.Store({
        modules:
        countAbout,
        personAbout
        }
    })
```
    3、开启命名空间，读取state数据
```
   //一，自己直接读取
   this.$store.state.personAbout.list 
   //二、借助mapState
   ...mapState('personAbout',['list'])
```
    4、读取getters数据
```
    /方式一：自己直接读取
    this.$store.getters['personAbout/firstPersonName']
    /方式二：借助mapGettersi读取：
    ..mapGetters('countAbout',['bigSum'])
```
    5、调用dispatch
```
//方式一：自己直接dispatch
this.$store.dispatch('personAbout/addPersonWang',person)
/方式二：借助mapActions:
...mapActions('countAbout',{incrementodd:jiaOdd',incrementWait:'jiaWait'))
```
    6、调用commit
```
//方式-：自己直接commit
this.$store.commit('personAbout/ADD_PERSON',person)
//方式二：借助mapMutations:
...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN')),
```
## vue-router路由
    1、安装vue-router，npm i vue-router
    2、Vue.use(vueRouter)
    3、router/index.js配置路由基本信息
```
//该文件用于创建整个应用的路由器
import vueRouter from "vue-router";
import About from "@/components/About";
import Home from "@/components/Home";

//创建一个路由器
export default new vueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})
```
    4、页面切换
```
<router-link class="list-group-item" active-class="active" to="/about">About</router-link>
<router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
```
    5、页面呈现
```
<router-view></router-view>
```
## 路由注意点
    1.路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹。
    2.通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
    3.每个组件都有自己的$route属性，里面存储着自己的路由信息。
    4.整个应用只有一个router,可以通过组件的$router属性获取到。
## 多级路由
    1、配置路由规则，使用children配置项
```
path:'/home',
            component:Home,
            children:[
                {
                    path:'message', //不需要写/
                    component:Message
                },
                {
                    path:'news',
                    component:News
                }
            ]
```
    2、此处写完整路径
`<router-link to="/home/news">News</router-link>`
## 路由传递query参数
    1、传递参数
```
<!--        js传递query参数-->
<!--        <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;-->

<!--        对象写法-->
        <router-link :to="{
          path:'/home/message/detail',
          query:{
            id:m.id,
            title:m.title
          }
        }"
        >
          {{m.title}}
        </router-link>
```
    2、接收参数
    $route.query.id
## 命名路由
    1、作用：简化路由的跳转
    2、路由命名：直接使用 name 进行命名
    注：如果使用路由名，必须使用:to='{}'对象模式
## 路由的params参数
    1、配置路由：声明接收params参数
    2、router/index.js配置
```
name:'xiangqing',
path:'detail/:id/:title',
component:Detail
```
    3、传递参数
```
<router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;
<router-link :to="{
          // path:'/home/message/detail',配置name之后必须使用name
          name:'xiangqing',
          params:{
            id:m.id,
            title:m.title
          }
        }"
        >
          {{m.title}}
        </router-link>-->
```

## 路由的props配置
    目的：方便组件接收数据
```
//    props第一种写法，值为对象，该对象所有key-value以props形式传给Detail
//     props:{a:1,b:'hello'}

//    props第二种写法,值为true，所有params参数以props的形式传给Detail
//     props:true

//    props第三种写法，值为函数
      props($router){
        return{
            id:$router.params.id,
            title:$router.params.title
               }
      }                      
```
## <router-link>的replace属性
    1、作用：控制路由跳转时操作历史记录的模式
    2、浏览器历史记录模式：push（默认）和replace push是栈操作，replace是替代操作
    3、开启replace <router-link replace>
## 编程式路由导航
    1、不借助<router-link>实现路由跳转，让路由跳转更加灵活
    2、编码
```
    pushShow(m){
      this.$router.push({
        name:'xiangqing',
        query:{
          id:m.id,
          title:m.title
        }
      })
    },
    replaceShow(m){
      this.$router.replace({
        name:'xiangqing',
        query:{
          id:m.id,
          title:m.title
        }
      })
    }
    //前进和后退
    forward(){
      this.$router.forward()
    },
    back(){
      this.$router.back()
    }
    
    go(){
        this.$router.go(num) //num为1，向前前进1步；num为-1，后退1步
    }
```
## 缓存路由组件
    1、作用：让不展示的路由组件保持挂载，不被销毁
    2、实现：
```
<!--include包裹的是组件名-->
<keep-alive include="News">
   <router-view></router-view>
</keep-alive>
```
## 两个新的生命周期钩子
    路由组件独有的两个钩子，用于捕获路由组件的激活状态
    activated路由组件被激活时触发。
    deactivated路由组件失活时触发。
## 路由守卫
    作用：对路由进行权限控制
    分类：全局守卫、独享守卫、组件内守卫
    全局守卫：
```
//全局前置路由守卫,路由切换之前、初始化时被调用
router.beforeEach((to,from,next)=>{
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
})

//全局前置路由守卫,路由切换之后、初始化时被调用
router.afterEach((to,from,next)=>{
    console.log('后置路由守卫')
    document.title=to.meta.title || '路由测试'
})
```
## 独享路由守卫
    单个路由使用，只有前置路由，可以和全局后置路由配合使用
```
                name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title: '新闻'},
                    beforeEnter:(to,from,next)=>{
                        if(to.meta.isAuth){ //判定是否需要权限
                            if(localStorage.getItem('school') === 'atguigu'){
                                next()
                            }else {
                                alert('学校名不对，无权查看')
                            }
                        }else {
                            next()
                        }
                    }
```
    组件内守卫：在单个组件内使用
```
//通过路由规则，进入该组件时调用
  beforeRouteEnter(to,from,next){
    // to固定
  },
  //通过路由规则，离开组件时调用
  beforeRouteLeave(to,from,next){
    //from固定
  }
```
## 路由器的两种工作模式
    1.对于一个url来说，什么是hash值？——#及其后面的内容就是hash值
    2.hash值不会包含在HTTP请求中，即：hash值不会带给服务器。
    3.hash模式：
        1.地址中永远带看#号，不美观。
        2.若以后将地址通过第三方手机pp分享，若app校验严格，则地址会被标记为不合法。
        3.兼容性较好。
    4.history模式：
    1.地址干净，美观。
    2.兼容性和hash模式相比略差.
    3.应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。