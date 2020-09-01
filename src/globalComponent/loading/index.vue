
<template>
    <transition appear name="fade" v-if="visible">
        <div class="box" :style="{background}">
            <div class="icon-box" :style="{top,color}">
                <img :src="loadingImgUrl" class="icon" alt="">
                <div>{{text}}</div>
            </div>
        </div>
    </transition>
</template>

<script >
import icon from './images/loading.gif';
export default {
    name: 'loading',
    data(){
        return {
            text:'loading...',
            visible: false,
            loadingImgUrl:icon,
            top:'40%',
            background: 'black',
            color: '#fff'
        }
    },
    watch:{
        visible(val){
            console.log('visible:' + val);
        }
    }
}
</script>

<style lang="scss">
$top:40%;

.box{
    width: 100%;
    height: 100%;
    min-width: 960px;
    min-height: 200px;
    position: fixed;
    background: black;
    display: flex;
    top: 0;
    left: 0;
    opacity: .8;
    justify-content: center;
    .icon-box{
        position: relative;
        top: $top;
        text-align: center;
        >*{ 
            margin: auto;
        }
        .icon {
            width: 26px;
            height: 26px;
        }
    }
}
</style>