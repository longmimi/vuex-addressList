<template>
  <div>
    <headerView custom-title="通讯录">
      <!-- <button slot="left">返回</button>
      <button slot="right">主页</button> -->
    </headerView>
    <listView>    
    </listView>
    <alertView  v-if="isShowAlert"></alertView>
  </div>
</template>

<script>
import headerView from './components/header.vue'
import listView from './components/list.vue'
import alertView from './components/alert.vue'


export default {
  name: 'app',
  data () {
    return {   
    }
  },
  computed: {
    isShowAlert:function(){
        return this.$store.state.isShowAlert
    }
  },
  components:{
    headerView,
    listView,
    alertView
  }
}
</script>

<style>
*{
    margin:0;
    padding: 0;
    list-style: none;
}
body{
    height:100%;
}
</style>
