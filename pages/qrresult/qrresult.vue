<template>
	<view class="main">
		<view class="qrimg">

		</view>

		<view class="item">
			复制
		</view>
		
		<view class="item">
			保存到相册
		</view>
	</view>
</template>

<script>
</script>

<style>
	.main {
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;

		display: flex;
		flex-direction: column;
		align-items: center;
		background: #F2F2F2;
	}

	.qrimg {
		width: 500upx;
		height: 500upx;
		background: gray;
	}
	
	.item{
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		
		color: #333333;
		font-size: 28upx;
		margin-top: 20upx;
		background: #FFFFFF;
		width: 100%;
	}
	
	.item_40{
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
