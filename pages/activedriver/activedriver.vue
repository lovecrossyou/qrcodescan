<template>
	<view class="main">
		<view class="input-group">
			<view class="input-row border">
				<m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入身份证后六位"></m-input>
			</view>
			<view class="phone">
				手机号码: 1320168837
			</view>
			<view class="verify-code">
				<m-input class="code_input" type="number" focus clearable v-model="code" placeholder="请输入验证码"></m-input>
				<button type="primary" class="primary" @tap="register">获取验证码</button>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="register">激活</button>
		</view>
	</view>
</template>

<script>
	import mInput from '@/components/m-input.vue';

	export default {
		components: {
			mInput
		},
		data() {
			return {
				account: '',
				code: ''
			}
		},
		methods: {

		}
	}
</script>

<style>
	.main {
		width: 100%;
		padding: 0 10%;
	}

	.input-group {
		/* width: 100%; */
		border: none;
	}

	.input-row {
		border: solid 1upx #C8C7CC;
		border-radius: 8upx;
		height: 80upx;
		line-height: 80upx;
		margin-top: 20upx;
		/* width: 80%; */
		margin: auto;
	}

	.phone {
		height: 60upx;
		line-height: 60upx;
		color: #8F8F94;
		font-size: 24upx;
		/* text-align: center; */
	}

	.verify-code {
		/* width: 80%; */
		display: flex;
		flex-direction: row;
		align-items: center;
		/* padding: 0 15upx; */
		box-sizing: border-box;

		margin-top: 20upx;
	}

	.code_input {
		border: solid 1upx #C8C7CC;
		height: 80upx;
		line-height: 80upx;
		margin-right: 10upx;
	}
</style>
