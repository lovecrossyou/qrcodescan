<template>
	<view class="main">
		<image class="logo" src="http://qnimage.xiteng.com/1558085551925.jpg" ></image>
		
		<view class="about">
			<view class="text">
				北京智云海蓝网络科技有限公司,致力于通过现代互联网的技术与理念,解决企业难题,实现各方的降本增效.本软件为司机客户端,其中语音技术由科大讯飞提供.
			</view>
			
			<view class="text">
				联系方式
			</view>
			<view class="text">
				固定电话: 010-53609710
			</view>
			<view class="text">
				手机: 17001126996
			</view>
			<view class="text">
				节假日及周末期间,若固定电话无人接听,请拨打值班室客服手机.
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.main{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20upx;
}

.logo{
	height: 200upx;
	margin-top: 30upx;
	/* margin: auto; */
}

.about{
	margin-top: 20upx;
	background: #FFFFFF;
	border: solid 1upx #F1F1F1;
	padding: 10upx;
	border-radius: 8upx;
}

.text{
	font-size: 28upx;
	color: #8F8F94;
}

.contact{
	
}
</style>
