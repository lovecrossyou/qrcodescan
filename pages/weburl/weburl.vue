<template>
	<view class="main">
		<view class="uni-textarea">
			<textarea v-model="content" class="textarea" maxlength:200 placeholder="请输入网址" />
			</view>
			<view class="footer-btn" @click="fnModify">
			生成二维码
		</view>
        </view>
		
	</view>
</template>

<script>
	import {
		mapMutations,
		mapActions
	} from 'vuex'
	import qrcode from "@/util/qrcode.js"
	import service from '../../service.js'

	export default {
		data() {
			return {
				modifyMobile: true,
				content:''
			}
		},
		methods: {
			...mapMutations(['saveQRData']),
			...mapActions(['loadGenList']),
			fnModify() {
				if(this.content.length===0){
					uni.showToast({
						title: '请输入网址',
						icon:"none"
					});
					return;
				}
				const qrStr = qrcode.url(this.content);
				this.saveQRData(qrStr);
				//本地存储
				// service.genScanHistory(qrStr, 'url');
				// //刷新历史列表
				// this.loadGenList();
				
				uni.navigateTo({
					url:'/pages/buss-card/setting-qrcode?type=url'
				});
			},
		}
	}
</script>

<style>
.main{
	background-color: #F2F2F2;
	width: 100%;
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
	height: 702upx;
	background: #FFFFFF;
	margin: 20upx;
	padding: 32upx 26upx;
	box-sizing: border-box;
	border-radius: 16upx;
}



textarea{
	height: 702upx;
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
