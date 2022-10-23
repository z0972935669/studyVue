

// 求和功能相關的配置
export default {
    // 命名空間
    namespaced: true,
    actions:{
        jiaOdd(context,value) {
            // console.log('actions中的jiaOdd被調用了',context,value);
            if(context.state.sum % 2){
                context.commit('JIA',value)
            }
        },
        jiaWait(context,value) {
            // console.log('actions中的jiaWait被調用了',context,value);
            setTimeout(() => {
                context.commit('JIA',value)
            }, 500);
        }
    },
    mutations:{
        JIA(state,value) {
            console.log('mutations中的JIA被調用了',state,value);
            state.sum += value
        },
        JIAN(state,value) {
            console.log('mutations中的JIAN被調用了',state,value);
            state.sum -= value
        },
    },
    state:{
        sum:0, //當前的和
        school:'台科大',
        subject:'前端',
    },
    getters:{
        bigSum(state) {
            return state.sum * 10
        }
    },
}