<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">手机号：</text>
				<m-input type="number" focus clearable v-model="phone" placeholder="请输入手机号"></m-input>
			</view>
			<view class="verify-code">
				<m-input type="number" focus clearable v-model="code" placeholder="请输入验证码"></m-input>
				<button type="primary" class="primary" @tap="register">发送验证码</button>
			</view>
			<view class="input-row border">
				<text class="title">新密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
			<view class="input-row">
				<text class="title">确认新密码：</text>
				<m-input type="password" clearable v-model="confirmpwd" placeholder="请输入确认新密码"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="register">提交</button>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
	import mInput from '../../components/m-input.vue';

	export default {
		components: {
			mInput
		},
		data() {
			return {
				phone: '',
				password: '',
				confirmpwd:'',
				code: ''
			}
		},
		methods: {
			register() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				if (this.email.length < 3 || !~this.email.indexOf('@')) {
					uni.showToast({
						icon: 'none',
						title: '邮箱地址不合法'
					});
					return;
				}

				const data = {
					account: this.account,
					password: this.password,
					email: this.email
				}
				service.addUser(data);
				uni.showToast({
					title: '注册成功'
				});
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
	.title {
		width: 40%;
	}

	.verify-code {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 15upx;
		box-sizing: border-box;
	}
</style>
