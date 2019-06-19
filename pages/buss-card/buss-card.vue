<template>
	<view>
		<!-- <cmd-nav-bar back title="修改密码"></cmd-nav-bar> -->
		<cmd-page-body type="top">
			<cmd-transition name="fade-up">
				<view class="modify">
					<view class="modify-phone">
						<cmd-input v-model="vcard.name" type="number" maxlength="11" placeholder="姓名"></cmd-input>
					</view>
					<view class="modify-code">
						<cmd-input v-model="vcard.phone" type="number" maxlength="11" placeholder="联系电话"></cmd-input>
					</view>
					<view class="modify-password">
						<cmd-input v-model="vcard.addr" maxlength="26" placeholder="联系地址"></cmd-input>
					</view>
					<view class="modify-password">
						<cmd-input v-model="vcard.company" maxlength="26" placeholder="公司名称"></cmd-input>
					</view>
					<view class="modify-password">
						<cmd-input v-model="vcard.work" maxlength="26" placeholder="职位"></cmd-input>
					</view>
					<view class="modify-password">
						<cmd-input v-model="vcard.email" maxlength="26" placeholder="邮件地址"></cmd-input>
					</view>
					<button class="btn-modify" :class="modifyMobile ? 'btn-modify-active':''" :disabled="!modifyMobile" hover-class="btn-modify-hover"
					 @click="fnModify">生成二维码</button>
				</view>
			</cmd-transition>
		</cmd-page-body>
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
					email:'',
					company:''
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
				const qrStr = qrcode.vcard(this.vcard);
				
				this.saveQRData(qrStr);
				uni.navigateTo({
					url: '/pages/buss-card/setting-qrcode'
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
	.modify {
		/* margin-top: 28upx; */
		margin-right: 72upx;
		margin-left: 72upx;
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
