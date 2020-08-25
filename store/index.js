import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		vuex_tabbar: [{
				iconPath: "home",
				selectedIconPath: "home-fill",
				text: '首页',
				pagePath: 'pages/index/index'
			},
			{
				iconPath: "photo",
				selectedIconPath: "photo-fill",
				text: '货源',
				pagePath: '/pages/tabbar2/index'
			},
			{
				iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
				selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
				text: '发布',
				midButton: true,
				pagePath: '/pages/tabbar3/index'
			},
			{
				iconPath: "play-right",
				selectedIconPath: "play-right-fill",
				text: '订单',
				pagePath: '/pages/tabbar4/index'
			},
			{
				iconPath: "account",
				selectedIconPath: "account-fill",
				text: '我的',
				pagePath: '/pages/tabbar5/index'
			},
		],
	},
	mutations: {
		$uStore(state, payload) {
			// 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
			let nameArr = payload.name.split('.');
			let saveKey = '';
			let len = nameArr.length;
			if(len >= 2) {
				let obj = state[nameArr[0]];
				for(let i = 1; i < len - 1; i ++) {
					obj = obj[nameArr[i]];
				}
				obj[nameArr[len - 1]] = payload.value;
				saveKey = nameArr[0];
			} else {
				// 单层级变量，在state就是一个普通变量的情况
				state[payload.name] = payload.value;
				saveKey = payload.name;
			}
			// 保存变量到本地，见顶部函数定义
			saveLifeData(saveKey, state[saveKey])
		}
	},
	actions: {}
})
export default store
