<template>
    <div class="footer">
        <!-- 头部导航 -->
        <ul class="footer_top">
            <li><a href="javascript:;"> 公司简介</a></li><span>|</span>
            <li><a href="javascript:;"> 诚聘英才</a></li><span>|</span>
            <li><a href="javascript:;"> 网站联盟</a></li><span>|</span>
            <li><a href="javascript:;"> 快鱼招商</a></li><span>|</span>
            <li><a href="javascript:;"> 机构销售</a></li><span>|</span>
            <li><a href="javascript:;"> 手机快鱼</a></li><span>|</span>
            <li><a href="javascript:;"> 官方Blog</a></li><span>|</span>
            <li><a href="javascript:;"> 热词搜索</a></li>
        </ul>
        <!-- 尾部备案 -->
        <div class="footer_bottom center">
            <div>
                <span>Copyright © 2004 - 2020 快鱼网. All Rights Reserved</span><img src="../../assets/validate/validate.gif" alt=""><span>京ICP证041189号</span><span>|</span><span>出版物经营许可证 新出发京批字第直0673号</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
    /* 首页脚步背景色为#cae2ee */
    .footer {
        background: #cae2ee;
        min-width: 1200px;
    }
    /* 手脚脚部的头部导航 */
    .footer_top,.footer_bottom {
        display: flex;
        width: 1000px;
        margin: 0 auto;
        padding-top: 20px;
    }
    .footer_top li {
        width: 125px;
        text-align: center;
    }
    .footer_top li a {
        color: #666;
    }
    .footer_top li a:hover {
        color: tomato;
    }
    .footer_bottom>div {
        font-size: 12px;
        margin: 10px auto;

    }
</style>