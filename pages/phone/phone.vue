<template>
	<view class="main">
		<view class="uni-textarea">
			<textarea placeholder-class="placeholder" v-model="content" @maxlength='200' placeholder="请输入电话号码或手机号码" />
			</view>
			<view class="footer-btn" @click="fnModify">
			生成二维码
		</view>
        </view>
		
	</view>
</template>

<script>
	import qrcode from "@/util/qrcode.js"
	import {
        mapMutations
    } from 'vuex'
	export default {
		data() {
			return {
				modifyMobile: true,
				content:''
			}
		},
		methods: {
			...mapMutations(['saveQRData']),
			fnModify() {
				if(this.content.length===0){
					uni.showToast({
						title: '请输入电话',
						icon:"none"
					});
					return;
				}
				const qrStr = qrcode.phone(this.content);
				
				this.saveQRData(qrStr);
				uni.navigateTo({
					url:'/pages/buss-card/setting-qrcode?type=phone'
				});
			}
		}
	}
</script>

<style>
.main{
	background-color: #F2F2F2;
	width: 100%;
}

.placeholder{
	font-size: 24upx ;
	color: #999999;
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
		width: 702upx;
		margin:56upx auto 0 auto;
	}

.uni-textarea{
	height: 100upx;
	background: #FFFFFF;
	margin: 20upx;
	padding: 20upx;
	box-sizing: border-box;
	border-radius: 16upx;
	
	display: flex;
	flex-direction: column;
	justify-content: center;
}
textarea{
	height: 100upx;
	line-height: 100upx;
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
