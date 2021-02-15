<template>
    <div>
        <div class="count">
        数量：
        <button @click="cut">-</button>
        <input type="text" v-model="num">
        <button @click="add">+</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'count',
    data(){
        return{
            num:1
        }
    },
    methods:{
        cut(){
            if(this.num>1){this.num--}
        },
        add(){
            this.num++
        }
    }
}
</script>
<style scoped>
input{
    width: 60px;height: 38px;
    text-align: center;
    border: 0;
}
button{
    width: 40px;
    height: 40px;
    background-color: #f5f5f5;
    border: 0;
    margin: 0 5px;
    border-radius: 5px;
    font-size: 20px;
    box-shadow: 0 0 10px #ccc;
}
.count{ font-weight: bolder;
    font-size: 18px;
}
.count:hover button,input{
    box-shadow: 10px 0 30px 20px #ccc;
}
</style>