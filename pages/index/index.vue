<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎登录车配匹配</view>
			<u-input v-model="tel" type="number" placeholder-style="font-size:35rpx;color:#C0C4CC;"
			 placeholder="请输入手机号" />
			<u-line color="#999999" />
			<view v-if="login_type == 2" style="height: 50rpx;"></view>
			<u-input v-if="login_type == 2" v-model="value" type="password" placeholder-style="font-size:35rpx;color:#C0C4CC;"
			 placeholder="请输入密码" />
			<u-line v-if="login_type == 2" color="#999999" />
			<view v-if="login_type == 1" class="tips">未注册的手机号验证后自动创建车货匹配账号</view>
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">获取短信验证码</button>
			<view class="alternative">
				<view class="password" ref='btn1' @tap="switch_click">{{ login_prompt }}</view>
				<view class="issue">遇到问题</view>
			</view>
		</view>
		<view class="buttom">
			<view class="loginType">
				<view class="wechat item">
					<view class="icon">
						<u-icon size="70" name="weixin-fill" color="rgb(83,194,64)"></u-icon>
					</view>
					微信
				</view>
				<view class="QQ item">
					<view class="icon">
						<u-icon size="70" name="qq-fill" color="rgb(17,183,233)"></u-icon>
					</view>
					QQ
				</view>
			</view>
			<view class="hint">
				登录代表同意
				<text class="link">车货匹配用户协议、隐私政策，</text>
				并授权使用您的车货匹配账号信息（如昵称、头像、收获地址）以便您统一管理
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tel: '',
				value: '',
				login_type: 2,
				login_prompt: "密码登录",
			}
		},
		computed: {
			inputStyle() {
				let style = {}
				if (this.tel) {
					style.color = "#fff"
					style.backgroundColor = this.$u.color['warning']
				}
				return style
			}
		},
		methods: {
			submit() {
				if (this.$u.test.mobile(this.tel)) {
					this.$u.route({
						url: 'pages/template/login/code'
					})
				}
			},
			switch_click() {
				
				if(this.login_type == 1){
					this.login_type = 2
					this.login_prompt = "验证码登录"
				}else if(this.login_type == 2){
					this.login_type = 1
					this.login_prompt = "密码登录"
				}
			},
		}
	};
</script>

<style lang="scss" scoped>
	.wrap {
		font-size: 28rpx;
		height: 80%;

		.content {
			width: 600rpx;
			margin: 0rpx auto 0;
			padding-top: 80rpx;
			overflow: hidden;
			

			.title {
				text-align: left;
				font-size: 60rpx;
				font-weight: 500;
				margin-bottom: 100rpx;
			}

			.tips {
				color: #999999;
				margin-bottom: 60rpx;
				margin-top: 8rpx;
				font-size: 26rpx;
			}

			.getCaptcha {
				background-color: rgb(253, 243, 208);
				color: $u-tips-color;
				border: none;
				font-size: 30rpx;
				padding: 12rpx 0;
				margin-top: 100rpx;

				&::after {
					border: none;
				}
			}

			.alternative {
				color: #555555;
				display: flex;
				justify-content: space-between;
				margin-top: 30rpx;
			}
		}

		.buttom {
			position: absolute;
			bottom: 0rpx;

			.loginType {
				display: flex;
				padding: 0rpx 200rpx 150rpx 200rpx;
				justify-content: space-between;

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;
					color: $u-content-color;
					font-size: 28rpx;
				}
			}

			.hint {
				padding: 20rpx 40rpx;
				font-size: 20rpx;
				color: $u-tips-color;

				.link {
					color: $u-type-warning;
				}
			}
		}
	}
</style>
