export default {
    install(Vue){
        console.log("插件调用",Vue)
        //此处的Vue是vm的构造函数
        //过滤器
        Vue.filter('mySlice',function(val){
            return val.slice(0, 4)
        })

    //    全局自定义之指令
        Vue.directive('fbind',{
            bind(element,binding){
                element.value = binding.value
            },
        //    指令所在元素被插入页面
            inserted(element,binding){
                element.focus()
            },
        //    指令被重新解析时
            update(element,binding){
                element.value = binding.value
            }
        })
    },
}
