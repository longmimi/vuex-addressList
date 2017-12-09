<template>
  <div id="header">
    <button @touchstart="backBtn">返回</button>
    {{customTitle}}
    <button @touchstart="backHome">主页</button>   
  </div>
</template>
<script>
    export default{
        methods:{
            backBtn(){
                alert(1)
            }, 
            backHome(){
                alert(1)
            }
        },
        props:{
            'customTitle':{
                type: String,
                default:'标题'
            }
        }
    }
</script>
<style lang='less' scoped>
#header{
    width:100%;
    height:50px;
    background: #666;
    color: white;
    text-align: center;
    line-height: 50px;
    position: fixed;
    top:0;
    left:0;
    font-size: 30px;
    z-index: 10;
    button{
    height:50px;
    padding:0 20px;
    font-size: 30px;
    &:nth-child(1){
        float: left;
    }
    &:nth-child(2){
        float: right;
    }
}
}

</style>

