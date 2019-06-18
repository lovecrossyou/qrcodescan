<template>
	<view class="main">
		<view class="uni-textarea">
			<textarea @blur="bindTextAreaBlur" auto-height maxlength:200 placeholder="请输入内容" />
			</view>
			<button class="btn-modify" :class="modifyMobile ? 'btn-modify-active':''" :disabled="!modifyMobile" hover-class="btn-modify-hover"
					 @tap="fnModify">生成二维码</button>
        </view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modifyMobile: true
			}
		},
		methods: {
			fnModify() {
				console.log(JSON.stringify(this.mobile));
			},
		}
	}
</script>

<style>
.main{
	background-color: #F2F2F2;
	width: 100%;
}

.uni-textarea{
	height: 300upx;
	background: #FFFFFF;
	margin: 20upx;
	padding: 20upx;
	box-sizing: border-box;
}

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
