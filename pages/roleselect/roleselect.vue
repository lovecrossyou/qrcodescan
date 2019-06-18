<template>
	<view class="main">
		<image class="logo" src="http://qnimage.xiteng.com/1.jpg" ></image>
		
		<view class="item">
			司机
		</view>
		<view class="item">
			经销商
		</view>
		<view class="item">
			中心工厂
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
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.logo{
		width: 180upx;
		height: 180upx;
		margin-top: 60upx;
		margin-bottom: 80upx;
	}
	
	.item{
		border: solid 1upx #C8C7CC;
		border-radius: 8upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		margin-top: 20upx;
		width: 80%;
	}

</style>
