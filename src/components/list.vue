<template>
  <div id="list">
    <ul class="list-user" ref="listUser" @touchmove="bMove=true">
        <li v-for="item in userData" :key="item.index">
          <p>{{item.index}}</p>       
          <ul>
              <li v-for="item2 in item.user" @touchend="showTel(item2.tel)">{{item2.name}}</li>             
          </ul> 
        </li>
    </ul>
    <ul class="list-title" ref="listTitle">
      <li v-for="item in userIndex" @touchstart='setScroll'>{{item}}</li>
    </ul>
  </div>
</template>
<script>
    export default{
       data(){
         return {
           userData:[
            {
              'index':'A','user':[
                {'name':'a11','tel':'13026665555'},
                {'name':'a2','tel':'13026665115'},
                {'name':'a3','tel':'13026615555'}          
            ]},
            {
              'index':'B','user':[
                {'name':'b1','tel':'13026665555'},
                {'name':'b22','tel':'13026665115'},
                {'name':'b3','tel':'13026615555'}          
            ]},
            {
              'index':'C','user':[
                {'name':'c1','tel':'13026665555'},
                {'name':'c2','tel':'13026665115'},
                {'name':'c32','tel':'13026615555'}          
            ]},
            {
              'index':'D','user':[
                {'name':'c1','tel':'13026665555'},
                {'name':'c2','tel':'13026665115'},
                {'name':'c32','tel':'13026615555'}          
            ]},
            {
              'index':'E','user':[
                {'name':'c1','tel':'13026665555'},
                {'name':'c2','tel':'13026665115'},
                {'name':'c32','tel':'13026615555'}          
            ]},
            {
              'index':'F','user':[
                {'name':'c1','tel':'13026665555'},
                {'name':'c2','tel':'13026665115'},
                {'name':'c32','tel':'13026615555'}          
            ]}
            ,
            {
              'index':'G','user':[
                {'name':'c1','tel':'13026665555'},
                {'name':'c2','tel':'13026665115'},
                {'name':'c32','tel':'13026615555'}          
            ]},
            {
              'index':'H','user':[
                {'name':'c1','tel':'13026665555'},
                {'name':'c2','tel':'13026665115'},
                {'name':'c32','tel':'13026615555'}          
            ]}
            ,
            {
              'index':'I','user':[
                {'name':'c1','tel':'13026665555'},
                {'name':'c2','tel':'13026665115'},
                {'name':'c32','tel':'13026615555'}          
            ]}
           ],
           bMove:'flase'
         }
       },
       computed:{
         userIndex:function(){
           return this.filterIndex(this.userData)
         }
       },
       methods:{
         filterIndex:function(userData){
           var result=[]
          //  userData.forEach(function (index,item){ 
          //    if(userData[index].index){
          //         result.push(userData[index].index)
          //     } 
          //     return result
          //   })    
          for(let i=0;i<userData.length;i++){
            if(userData[i].index){
                  result.push(userData[i].index)
              }               
          }
          return result
         },
         setListIndexPosition:function(){
              var HEIGHT=this.$refs.listTitle.offsetHeight
              // console.log(this.$refs.listTitle.offsetHeight)
              this.$refs.listTitle.style.marginTop=-HEIGHT/2+'px'
              //margin 负一半自身高度 外加top 50%
         },
         setScroll:function(ev){
           console.log(document.body.clientHeight+"   document.body.offsetHeight")
            var titleCon=ev.target.innerHTML
            var listUser = this.$refs.listUser.getElementsByTagName('p')
            for(let i=0;i<listUser.length;i++){
              if(listUser[i].innerHTML == titleCon){
                // if(listUser[i].offsetTop<document.documentElement.clientHeight)
                  document.documentElement.scrollTop=listUser[i].offsetTop
              }
            }
         },
         showTel:function(tel){
           if(!this.bMove){
             this.$store.dispatch('showTel',{
               flag:true,
               tel:tel
             })     
           }else{
             this.bMove=false
           }
         }
       },
       mounted:function () {  
         this.setListIndexPosition()    
       }
    }
</script>
<style lang='less' scoped>
#list{
    position: relative;
    top:50px;
    left:0;
    overflow: hidden;
    .list-user{
        p{
          background:#ccc;
          padding-left: 10px;
          height:40px;
          line-height:40px; 
          font-size:20px;
        }
        ul{
            li{
                height:40px;
                line-height:40px; 
                padding-left: 15px;
                border-bottom: 1px solid #ccc;  
                font-size: 20px;
            }
            
        }
    }
    .list-title{
      position: fixed;
      right: 0;
      top:50%;
      width:40px;
      background:transparent;
      li{
        margin: 20px 0;
        border-bottom:1px solid #ccc;
        font-size: 20px;
        text-align: center;
      }

    }
}
</style>

