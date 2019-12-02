<template>
  <div class="m-nav-list">
      <span :class="{active: item.id === currentId}" v-for="item in navList" :key="item.id" @click="handleNav(item.id)">{{item.title}}</span>
  </div>
</template>

<script>
export default {
    props:['navList'],
    computed: {
        currentId(){
            return this.$store.state.currentId
        }
    },
    methods: {
        handleNav(id){
            this.$store.commit({type:'setState',key:'currentId',value:id})
            this.$store.dispatch({type:'getList'})
        }
    },

}
</script>

<style lang="scss" scoped>
.m-nav-list{
    display: flex;
    span{
        width: 100px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background: skyblue;
        border-right: 2px solid #fff;
        &.active{
            background: red;
        }
    }
}
</style>