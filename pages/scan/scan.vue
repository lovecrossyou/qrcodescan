<template>
	<view class="main">
		<view class="result-item">
			<view class="title">
				扫描类型
			</view>
			<view class="">
				{{scanType}}
			</view>
		</view>

		<view class="result-item">
			<view class="title">
				扫描结果
			</view>
			<view class="">
				{{result}}
			</view>
		</view>
		<view class="item" @click="scan">
			扫描
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scanType: '',
				result: ''
			}
		},
		methods: {
			scan() {
				let that = this;
				uni.scanCode({
					success: function(res) {
						that.scanType = res.scanType;
						that.result = res.result;
					}
				});
			}
		}
	}
</script>

<style>
	.main {
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* background: #F2F2F2; */
	}
	
	.result-item{
		width: 100%;
		display: flex;
		/* flex-direction: column;
		height: 90upx;
		/* align-items: center; */
		/* line-height: 90upx; */ 
	}
	
	.title{
		font-size: 24upx;
		color: #333333;
	}

	.qrimg {
		width: 500upx;
		height: 500upx;
		background: gray;
	}

	.item {
		height: 80upx;
		line-height: 80upx;
		text-align: center;

		color: #fff;
		font-size: 28upx;
		margin-top: 20upx;
		background: linear-gradient(to right, #88a1f9, #9ac6ff);
		width: 100%;
		
		
		position: fixed;
		bottom: 30upx;
	}

	.item_40 {
		height: 80upx;
		line-height: 80upx;
		text-align: center;

		color: #333333;
		font-size: 28upx;
		margin-top: 20upx;
		background: #FFFFFF;
		width: 100%;
		margin-top: 60upx;
	}
</style>
