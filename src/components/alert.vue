<template>
      <div id="alert" ref="alert"> 
        <div class="alert-content">
            <p class="alert-head">呼叫</p>
            <p class="alert-phone">{{phoneNumber}}</p>
            <div class="alert-btn">
                <!-- <button>拨打</button>
                <button @touchstart="hideAlert">取消</button> -->
                <div class="btn"  @touchstart="hideAlert">取消</div>
                <div class="btn"  @touchstart="hideAlert">确定</div>
            </div>
        </div>        
    </div>   
</template>
<script>
    export default{
        data(){
            return{
            }
        },
        computed:{
            phoneNumber(){
                return this.$store.state.phoneNumber
            }
        },
        methods:{
            hideAlert(){
                console.log(this.$store.state.isShowAlert+"     this.$store.state.isShowAlert1111111")
                this.$store.dispatch('hideAlert',false)   
                console.log(this.$store.state.isShowAlert+"     this.$store.state.isShowAlert22222222")        
            }
        }      
    }
</script>
<style lang='less' scoped>
#alert{
    border:1px solid black;
    width:100%;
    height: 100%;
    background:rgba(0,0,0,.5);
    position: fixed;
    left: 0;
    top:0;
    display:flex;   
    .alert-content{
        color:#000;
        width:80%;
        height: 200px;
        background: #fff;
        margin:auto;
        border: 2px solid white;
        border-radius: 5px;
        position: relative;
        .alert-head{
            margin-top:25px;
            font-size: 30px;
            font-weight: 12pt;
            text-align: center;
        }
        .alert-phone{
            margin-top:20px;
            font-size: 20px;
            text-align: center;
        }
        .alert-btn{    
            position: absolute;
            bottom:0;
            width:100%;
            overflow: hidden;
            border-top:1px solid black;
            .btn{
                display: inline-block;
                text-align: center;
                width:49%;
                font-size: 20px;
                background: #fff;
                &:nth-child(1){
                    margin-right:-1px;
                    border-right:1px solid black;
                }
            }
            
        }
    }
}
</style>

