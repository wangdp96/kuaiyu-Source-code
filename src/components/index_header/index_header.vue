<template>
    <!-- 首页头部分 -->
    <div class="header">
        <header class="center">
        <!-- 左侧logo -->
        <div class="logo"><img src="../../assets/logo/logo.png" alt="logo"></div>
        <!-- 一级导航栏 -->
        <ul class="headNavbar">
            <li><div class="line"></div><router-link to="/">快鱼首页</router-link></li>
            <li><div class="line"></div><router-link to="/collection">收藏夹</router-link></li>
            <li><div class="line"></div><router-link to="/shoppingCart">购物车</router-link></li>
            <li><div class="line"></div><router-link to="/orders">订单中心</router-link></li>
            <li><div class="line"></div><router-link to="/user">个人首页</router-link></li>
        </ul>
        <!-- 查询搜索所有书籍模块 -->
        <div class="headSearch">
            <div>
                <input type="text" placeholder="随机的推荐书籍的书名" autofocus v-model="inputContent" :style="input_style_width" @mouseover="inp_mouseover" @mouseout="inp_mouseout" @blur="inp_blur" /><button><span class="iconfont icon-sousuo"></span></button>
            </div>
        </div>
        <!-- 用户首页登录与注册分块 -->
        <div class="headUser">
            <!-- 首页登录与注册信息 -->
            <div>
                <span class="greetings">您好，请</span>
                <router-link to="/login">登录</router-link><span>|</span>
                <router-link to="/reg">注册</router-link>
            </div>
        </div>
    </header>
    </div>
</template>
<style scoped>
    /* 头部背景色设置#cae2ee*/
    .header {
        background-color: #cae2ee;
        border-bottom: 2px solid tomato;
    }
    /* header部分 */
    header {
        display: flex;
        height: 60px;
        padding-top: 10px;
        box-sizing: border-box;
        background-color: #cae2ee;
    }
    /* logo部分 */
    .logo img {
        width: 80px;
        height: 40px;
        margin-left: 40px;
    }
    /* 一级导航栏 */
    .headNavbar {
        display: flex;
        margin-left: 20px;
    }
    .headNavbar li {
        height: 38px;
    }
    .headNavbar .line {
        height: 2px;
        width: 0;
        background-color: tomato;
        margin: 0 auto;
        transition: all 0.3s;
        opacity: 0;
    }
    .headNavbar li:hover .line {
        width: 90%;
        opacity: 1;
    }
    .headNavbar a {
        line-height: 40px;
        margin: 0 10px;
        font-weight: 700;
        color: #666;
        transition: all 0.2s;
    }
    .headNavbar a:hover {
        color: tomato;
    }
    /* 查询搜索所有书籍模块 */
    .headSearch {
        margin-left: 20px;
        width: 410px;
    }
    .headSearch>div {
        float: right;
    }
    .headSearch input {
        height: 40px;
        box-sizing: border-box;
        padding-left: 10px;
        font-size: 14px;
        border: 2px solid tomato;
        border-radius: 15px 0 0 15px;
        transition: all 0.5s;
    }
    .headSearch button {
        width: 60px;
        height: 40px;
        vertical-align: top;
        background-color: pink;
        border: 2px solid tomato;
        box-sizing: border-box;
        border-left: 0;
        color: #fff;
        border-radius: 0 15px 15px 0;
    }
    .headSearch button:hover span {
        color: tomato;
    }
    .headSearch button span {
        font-size: 24px;
        transition: all 0.2s;
    }
    /* 用户首页登录与注册分块 */
    .headUser {
        height: 30px;
        text-align: center;
        line-height: 30px;
        margin-top: 5px;
        box-sizing: border-box;
        font-size: 14px;
        margin-left: 60px;
    }
    .headUser a {
        color: tomato;
        font-weight: 600;
    }
    .headUser span:nth-child(3) {
        color: thistle;
    }
    .greetings {
        font-size: 12px;
        padding-right: 10px;
        font-weight: 600;
        font-family: MingLiU;
    }
</style>
<script>
export default {
    data() {
        return {
            inputContent: '',  //变量为input的value值
            input_style_width:'width: 200px;'//变量为input的宽度style
        }
    },
    methods: {
//-----------------------input搜索框的width变化脚本-----------------------------

        //当鼠标进入，inp的宽变为300px;
        inp_mouseover() {
            this.input_style_width='width: 300px;';
        },
        //当鼠标离开，如果inp中的value值为空，inp的宽变为200px，否则不变
        inp_mouseout() {
            if(!this.inputContent) this.input_style_width='width: 200px;';
        },
        //当inp失去焦点，如果inp中的value值为空，inp的宽变为200px，否则不变
        inp_blur() {
            this.inp_mouseout();
        }
//----------------------input搜索框的width变化脚本结束-----------------
    },
    watch: {
//-----------------------input搜索框的width变化脚本-----------------------------
        inputContent() {
            //监听inputContent,一旦非空，怎立即变为300px;
            if(this.inputContent) this.input_style_width='width: 300px;';
//-----------------------input搜索框的width变化脚本结束--------------------
        }
    }
}
</script>