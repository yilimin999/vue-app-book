<template>
  <div class="m-nav-list">
<div v-for="item in currendList" :key="item.id" @click="handleToDetail(item.id)">{{item.title}}</div>
  </div>
</template>

<script>
export default {
    name:'list',
    props:['currendList'],
    methods: {
        handleToDetail(id){
            this.$router.push(`/detail/${id}`);
            this.$store.commit({type:'setState',key:'detailId',value:id});
        }
    },

}
</script>

<style lang="scss" scoped>
.m-nav-list{
    div{
        width: 200px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-bottom: 1px solid #ccc;
    }
}
</style>