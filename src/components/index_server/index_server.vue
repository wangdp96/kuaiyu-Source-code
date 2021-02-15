<template>
    <div>
        <!-- 通栏显示模块 -->
        <div class="serverNav">
            <ul class="center">
                <li>
                    <span class="iconfont icon-qian4"></span>
                    <p>放心购物<br>货到付款</p>
                </li>
                <li>
                    <span class="iconfont icon-zhengque"></span>
                    <p>放心购物<br>货到付款</p>
                </li>
                <li>
                    <span class="iconfont icon-huoche"></span>
                    <p>625城市<br>次日到达</p>
                </li>
                <li>
                    <span class="iconfont icon-shouhuo"></span>
                    <p>上门退换<br>购物无忧</p>
                </li>
            </ul>
        </div>
        <!-- 具体六个模块 -->
        <div class="serverDetails">
            <div class="center">
                <dl>
                    <dt>购物指南</dt>
                    <dd><a href="javascript:;">购物流程</a></dd>
                    <dd><a href="javascript:;">发票制度</a></dd>
                    <dd><a href="javascript:;">服务协议</a></dd>
                    <dd><a href="javascript:;">会员优惠</a></dd>
                </dl>
                <dl>
                    <dt>支付方式</dt>
                    <dd><a href="javascript:;">货到付款</a></dd>
                    <dd><a href="javascript:;">网上支付</a></dd>
                    <dd><a href="javascript:;">礼品卡支付</a></dd>
                    <dd><a href="javascript:;">银行转帐</a></dd>
                </dl>
                <dl>
                    <dt>订单服务</dt>
                    <dd><a href="javascript:;">配送服务查询</a></dd>
                    <dd><a href="javascript:;">订单状态说明</a></dd>
                    <dd><a href="javascript:;">自助取消订单</a></dd>
                    <dd><a href="javascript:;">自助修改订单</a></dd>
                </dl>
                <dl>
                    <dt>配送方式</dt>
                    <dd><a href="javascript:;">当日递</a></dd>
                    <dd><a href="javascript:;">次日达</a></dd>
                    <dd><a href="javascript:;">订单自提</a></dd>
                    <dd><a href="javascript:;">验货与签收</a></dd>
                </dl>
                <dl>
                    <dt>退换货</dt>
                    <dd><a href="javascript:;">退换货服务查询</a></dd>
                    <dd><a href="javascript:;">自助申请退换货</a></dd>
                    <dd><a href="javascript:;">退换货进度查询</a></dd>
                    <dd><a href="javascript:;">退款方式和时间</a></dd>
                </dl>
                <dl>
                    <dt>商家服务</dt>
                    <dd><a href="javascript:;">商家中心</a></dd>
                    <dd><a href="javascript:;">运营服务</a></dd>
                    <dd><a href="javascript:;">加入尾品汇</a></dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<style scoped>
    /* 通栏显示模块 */
    .serverNav {
        border-top: 2px solid tomato;
        background-color: #cae2ee;
        border-bottom: 1px solid #ccc;
    }
    .serverNav ul {
        display: flex;
    }
    .serverNav ul li {
        display: flex;
        width: 300px;
        box-sizing: border-box;
        padding-left: 70px;
        color: tomato;
    }
    .serverNav ul li:last-child {
        margin-right: 0;
    }
    /* 文字模块 */
    .serverNav li p {
        padding-top: 30px;
        line-height: 30px;
        font-size: 20px;
        font-weight: 600;
    }
    /* icon字体模块 */
    .serverNav span.iconfont {
        font-size: 50px;
        line-height: 120px;
        padding-right: 10px;
    }
    /* 具体六个模块 */
    .serverDetails {
        padding-top: 60px;
        background-color: #e2eef3;
        padding-bottom: 30px;
    }
    .serverDetails>.center {
        display: flex;
    }
    .serverDetails dl {
        width: 200px;
        text-align: center;
    }
    .serverDetails dl dt {
        font-size: 14px;
        font-weight: 700;
        padding-bottom: 10px;
    }
    .serverDetails dd a {
        color: #666;
    }
    .serverDetails dd a:hover {
        color: tomato;
    }
    .serverDetails dl dd {
        font-size: 12px;
        line-height: 20px;
    }
</style> 