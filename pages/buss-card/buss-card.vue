<template>
	<view class="main">
		<view class="input-item">
			<input v-model="vcard.name" class="uni-input" type="text" placeholder="姓名" />
		</view>

		<view class="input-item">
			<input v-model="vcard.phone" class="uni-input" type="number" placeholder="联系电话" />
		</view>

		<view class="input-item">
			<input v-model="vcard.addr" class="uni-input" type="text" placeholder="联系地址" />
		</view>


		<view class="input-item">
			<input v-model="vcard.company" class="uni-input" type="text" placeholder="公司名称" />
		</view>

		<view class="input-item">
			<input v-model="vcard.work" class="uni-input" type="text" placeholder="职位" />
		</view>

		<view class="input-item">
			<input v-model="vcard.email" class="uni-input" type="text" placeholder="邮件地址" />
		</view>


		<view class="footer-btn" @click="fnModify">
			生成二维码
		</view>

	</view>
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	import cmdPageBody from "@/components/cmd-page-body/cmd-page-body.vue"
	import cmdTransition from "@/components/cmd-transition/cmd-transition.vue"
	import cmdInput from "@/components/cmd-input/cmd-input.vue"
	import {
		mapMutations
	} from 'vuex';

	import qrcode from "@/util/qrcode.js"
	export default {
		components: {
			cmdNavBar,
			cmdPageBody,
			cmdTransition,
			cmdInput
		},

		data() {
			return {
				vcard: {
					phone: '',
					name: '',
					addr: '',
					work: '',
					email: '',
					company: ''
				},
				passwordReg: /^\w+$/,
				phoneReg: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
				safety: {
					time: 60,
					state: false,
					interval: ''
				},
				modifyMobile: true
			};
		},

		methods: {
			...mapMutations(['saveQRData']),
			/**
			 * 提交按钮点击执行
			 */
			fnModify() {
				if(this.vcard.name.length==0){
					uni.showToast({
						title: '请输入名字',
						icon:'none'
					});
					return;
				}
				if(this.vcard.phone.length==0){
					uni.showToast({
						title: '请输入名字',
						icon:'none'
					});
					return;
				}
				if(this.vcard.addr.length==0){
					uni.showToast({
						title: '请输入联系地址',
						icon:'none'
					});
					return;
				}
				if(this.vcard.company.length==0){
					uni.showToast({
						title: '请输入公司名称',
						icon:'none'
					});
					return;
				}
				if(this.vcard.work.length==0){
					uni.showToast({
						title: '请输入职位',
						icon:'none'
					});
					return;
				}
				if(this.vcard.email.length==0){
					uni.showToast({
						title: '请输入邮件地址',
						icon:'none'
					});
					return;
				}
				const qrStr = qrcode.vcard(this.vcard);
				this.saveQRData(qrStr);
				uni.navigateTo({
					url: '/pages/buss-card/setting-qrcode?type=vcard'
				});
			}
		},

		beforeDestroy() {
			/**
			 * 关闭页面清除轮询器
			 */
			clearInterval(this.safety.interval);
		}
	}
</script>

<style>
	.main {
		background-color: #F2F2F2;
		width: 100%;
		padding: 24upx;
		box-sizing: border-box;
	}

	.footer-btn {
		background: #0AC160;
		border: 2upx solid rgba(5, 5, 5, 0.08);
		border-radius: 16upx;
		text-align: center;
		line-height: 100upx;
		height: 100upx;

		font-family: PingFangSC-Regular;
		font-size: 36upx;
		color: #FFFFFF;
		margin-top: 56upx;
	}

	.modify {
		/* margin-top: 28upx; */
		margin-right: 72upx;
		margin-left: 72upx;

	}

	.input-item {
		width: 100%;
		height: 100upx;
		border-radius: 16upx;
		background: #FFFFFF;
		padding-left: 32upx;
		box-sizing: border-box;
		line-height: 100upx;

		color: #333;
		font-size: 32upx;
		margin-bottom: 24upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.modify-phone {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2upx #dedede solid;
		margin-top: 118upx;
		margin-bottom: 40upx;
	}

	.modify-phone-getcode {
		color: #3F51B5;
		text-align: center;
		min-width: 140upx;
	}

	.modify-password,
	.modify-code {
		margin-bottom: 40upx;
		border-bottom: 2upx #dedede solid;
	}

	.btn-modify {
		margin-top: 100upx;
		border-radius: 50upx;
		font-size: 16px;
		color: #fff;
		background: linear-gradient(to right, #88a1f9, #9ac6ff);
	}

	.btn-modify-active {
		background: linear-gradient(to right, #365fff, #36bbff);
	}

	.btn-modify-hover {
		background: linear-gradient(to right, #365fdd, #36bbfa);
	}

	button[disabled] {
		color: #fff;
	}
</style>
