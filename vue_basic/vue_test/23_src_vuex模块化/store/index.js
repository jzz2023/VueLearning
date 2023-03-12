//创建最为核心的store
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
import axios from "axios";
import {nanoid} from "nanoid";

//求和相关配置
const countOptions={
    namespaced:true,
    actions:{
        odd(context,value){
            if(value % 2){
                context.commit('odd',value)
            }
        },
        wait(context,value){
            setTimeout(()=>{
                context.commit('jia',value)
            },500)
        }
    },
    mutations:{
        jia(state,value){
            state.sum += value
        },
        jian(state,value){
            state.sum -= value
        },
        odd(state,value){
            state.sum += value
        },
    },
    state:{
        sum:0,
        school:'b站',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}
//人员相关配置
const personOptions={
    namespaced: true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf("王") === 0){
                context.commit('ADD_PERSON',value)
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response=>{
                    context.commit('ADD_PERSON', {id:nanoid(),name:response.data})
                },
                error=>{
                    console.log(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'张三'},
            {id:'002',name:'李四'}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        person:personOptions
    }
})