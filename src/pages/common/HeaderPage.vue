<template>
	<!-- 头部导航 -->
	<header class="index-header clearfix">
		<div v-if="!isClose"
			class="index-header__go-back block--float-left"
			:class="{'index-header__go-back-white' : isWhite}"
			@click="goBack()"
		></div>
		<div v-if="isClose"
			class="index-header__close block--float-left"
			@click="goBack()"
		></div>
		<div 
			v-if="$slots.title"
			class="index-header__title detail-desc-text"
		>
			<slot name="title"></slot>
		</div>
		<div style="flex-grow:1;"></div>
		<div 
			v-if="$slots.next"
			class="block--float-right"
		>
			<slot name="next"></slot>
		</div>
	</header>
</template>
<script>
	export default {
		props: {
			// 关闭图标
			isClose: Boolean,
			// 白色图标
			isWhite: Boolean
		},
		methods: {
			goBack() {
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang="scss" scoped>
	/* 头部导航栏 */
	@include b(index-header) {
		display: flex;
		align-items: center;
		padding-bottom: 0.27rem;
		position: relative;
		justify-content: space-between;
		@include e(go-back) {
			width: 0.2rem;
			height: 0.36rem;
			background: $--nav-back-icon;
			background-size: 100% 100%;
		}
		@include e(go-back-white) {
			background: $--nav-close-icon-white;
			background-size: 100% 100%;
		}		
		@include e(close) {
			width: 0.33rem;
			height: 0.33rem;
			background: $--nav-close-icon;
			background-size: 100% 100%;
		}
		@include e(title) {
			// line-height: 1;
			position: absolute;
			// top: 0.29rem;
			left: 50%;
			transform: translateX(-50%);
		}		
	}
</style>