<template>
    <div>
        <!-- 引入头部全局组件 -->
        <index-header></index-header>
        <!-- 书籍搜索页主体部分 -->
        <div class="search_body">
            <!------------------ 搜索导航栏 --------------------->
            <!-- 通知已筛选条件 -->
            <div class="search_notice center">
                <span>已筛选条件:</span>
                <span
                    :class="book_classification1 ? '' : 'displayNone'">
                        {{book_classification1}}
                </span>
                <span
                    :class="book_classification2 ? '' : 'displayNone'">
                        {{book_classification2}}
                </span>
                <span
                    :class="book_price.start == 0 && book_price.end == 10000 ? 'displayNone' : ''">
                        {{book_price.start == 300 && book_price.end == 10000 ? `价格:￥${book_price.start}以上` : `价格:￥${book_price.start}-￥${book_price.end}` }}
                </span>
                <span
                    :class="book_author ? '' : 'displayNone'">
                        {{book_author}}
                </span>
                <span
                    :class="book_press ? '' : 'displayNone'">
                        {{book_press}}
                </span>
            </div>
            <!-- 筛选功能模块 -->
            <div class="nav_search center">
                <!-- 一级分类 -->
                <ul class="nav_search_classification1">
                    <li>
                        <div>一级分类</div>
                    </li>
                    <li>
                        <button @click="change_classification1('')" :class="book_classification1 == '' ? 'book_search_chosen' : ''">全部</button>
                    </li>
                    <li v-for="(item,index) of book_classification" :key="index">
                        <button @click="change_classification1(item.title)" :class="book_classification1 == item.title ? 'book_search_chosen' : ''">{{item.title}}</button>
                    </li>
                </ul>
                <!-- 二级分类 -->
                <ul class="nav_search_classification2">
                    <li>
                        <div>二级分类</div>
                    </li>
                    <li>
                        <button @click="change_classification2('')" :class="book_classification2 == '' ? 'book_search_chosen' : ''">全部</button>
                    </li>
                    <li  v-for="(item,index) of book_classification" :key="index" :class="book_classification1 == item.title ? 'displayBlock' : ''">
                        <button v-for="(item2,index2) of item.content" :key="index2" @click="change_classification2(item2)" :class="book_classification2 == item2 ? 'book_search_chosen' : ''">{{item2}}</button>
                    </li>
                </ul>
                <!-- 价格 -->
                <ul class="nav_search_price">
                    <li>
                        价格
                    </li>
                    <li>
                        <button
                            @click="change_price(0,10000)"
                            :class="book_price.start == 0 && book_price.end == 10000 ? 'book_search_chosen' : ''">
                                价格不限
                        </button>
                    </li>
                    <li v-for="(item,index) of book_price_type" :key="index">
                        <button
                            @click="change_price(item.start,item.end)"
                            :class="book_price.start == item.start && book_price.end == item.end ? 'book_search_chosen' : ''">
                                {{index == book_price_type.length-1 ? `￥${item.start}以上` : `￥${item.start}-￥${item.end}`}}
                        </button>
                    </li>
                    <li>
                        <span>请输入价格区间</span>
                        ￥<input
                            :class="inp1_ErrorClass"
                            type="number"
                            v-model="book_price_start">
                                &nbsp;-&nbsp;
                        <input
                            :class="inp2_ErrorClass"
                            type="number"
                            v-model="book_price_end">
                        <button
                            @click="change_inp_price"
                            :class="sureClass">
                                确定
                        </button>
                    </li>
                </ul>
                <!-- 作者 -->
                <ul class="nav_search_author">
                    <li>作者</li>
                    <li>
                        <button
                            @click="change_author('')"
                            :class="book_author == '' ? 'book_search_chosen' : ''">
                                不限
                        </button>
                        <button
                            v-for="(item,index) of book_search_author" :key="index"
                            @click="change_author(item.book_author)"
                            :class="book_author == item.book_author ? 'book_search_chosen' : ''">
                                {{item.book_author}}
                        </button>
                    </li>
                </ul>
                <!-- 出版社 -->
                <ul class="nav_search_press">
                    <li>出版社</li>
                    <li>
                        <button
                            @click="change_press('')"
                            :class="book_press == '' ? 'book_search_chosen' : ''">不限</button>
                        <button
                            v-for="(item,index) of book_search_press" :key="index"
                            @click="change_press(item.book_press)"
                            :class="book_press == item.book_press ? 'book_search_chosen' : ''">
                                {{item.book_press}}
                        </button>
                    </li>
                </ul>
            </div>
            <!-- 搜索结果模块 -->
            <div class="search_result center">
                <!-- 通知栏 -->
                <div class="search_result_notice">
                    <span>搜索结果</span>
                    <div>
                        <button class="iconfont icon-iconfontzhizuobiaozhun31"><span>大图</span></button>
                        <button class="iconfont icon-liebiao"><span>列表</span></button>
                    </div>
                </div>
                <!-- 结果 -->
                <!-- ------列表视图-------- -->
                <div class="result_list">
                    <!-- 有结果 -->
                    <ul v-if="book_search_results.length">
                        <li v-for="(item,index) of book_search_results" :key="index">
                            <!-- 左侧图片 -->
                            <div class="img">
                                <router-link :to="`/details?bid=${item.bid}`">
                                    <img :src="item.book_cover" alt="">
                                </router-link>
                            </div>
                            <!-- 右侧详情 -->
                            <div class="details">
                                <ul>
                                    <li class="book_name"><router-link :to="`/details?bid=${item.bid}`">{{item.book_name}}</router-link></li>
                                    <li class="book_author">{{item.book_author}}</li>
                                    <li class="book_price">￥{{item.book_price}}</li>
                                    <li class="book_data">出版时间:{{item.book_date}}&nbsp;出版社:{{item.book_press}}</li>
                                    <li class="book_detail">{{item.book_details ? item.book_details : '无简介'}}</li>
                                    <li class="book_buy">
                                        <button>收藏</button>
                                        <button>加入购物车</button>
                                        <button>立即购买</button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <!-- 无结果 -->
                    <ul class="no_result" v-else>
                        <li>对不起！没有您想要的结果哦，除非亲我一下哦~</li>
                    </ul>
                </div>
                <!-- ------列表视图结束-------- -->
            </div>
            <!-- 显示页码以及页数 -->
            <div class="search_page center">
                <!-- 搜索结果小于等于25条 -->
                <ul v-if="search_result_length <= 25 " class="less center">
                    <li v-for="(item,index) of Math.ceil(search_result_length/5)" :key="index" @click="changePage(index+1)">
                        <button>{{index+1}}</button>
                    </li>
                </ul>
                <!-- 搜索结果大于25条 -->
                <ul v-else class="more center">
                    <li>
                        <button @click="prev_page">上一页</button>
                    </li>
                    <li v-for="(item,index) of 4" :key="index">
                        <button @click="changePage(index+1)">{{index+1}}</button>
                    </li>
                    <li>
                        ...
                    </li>
                    <li>
                        <button @click="changePage(Math.ceil(search_result_length/5))">{{Math.ceil(search_result_length/5)}}</button>
                    </li>
                    <li>
                        <button @click="next_page">下一页</button>
                    </li>
                    <li class="inp_page">
                        <span>请输入页码</span>
                        <input :class="inp_pageClass" type="number" v-model="inp_page">
                        <button @click="inp_changePage(inp_page)">确定</button>
                    </li>
                    <!-- 页码显示 -->
                </ul>
                <ul class="pageShow">
                    <li>{{`${ search_result_length ? result_page : '0' }/${Math.ceil(search_result_length/5)}`}}</li>
                </ul>
            </div>
        </div>
        <!-- 引入脚部服务指南 -->
        <index-server></index-server>
        <!-- 引入脚部 -->
        <index-footer></index-footer>
    </div>
</template>
<style scoped>
    /* 通知已筛选条件 */
    .search_notice {
        margin-top: 10px;
        border-top: 2px solid #ccc;
        background-color: #E2EEF3;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        box-sizing: border-box;
        display: flex;
    }
    .search_notice span {
        line-height: 30px;
        display: block;
    }
    .search_notice span:first-child {
        color: tomato;
        font-weight: 700;
        margin-right: 10px;
    }
    .search_notice span:not(:first-child) {
        margin-right: 10px;
        border: 1px solid #1B58E6;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 12px;
    }
    /* 筛选功能模块 */
    .nav_search {
        background-color: #E2EEF3;
        border-top: 2px solid #ccc;
        border-bottom: 2px solid #ccc;
    }
    .nav_search ul {
        display: flex;
        align-items: center;
    }
    .nav_search ul li button {
        background-color: #CAE2EE;
        line-height: 26px;
        font-size: 14px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 5px;
        margin-right: 20px;
        transition: all 0.2s;
    }
    .nav_search ul li button:hover {
        color: tomato;
    }
    .nav_search ul li:first-child {
        background-color: #f1cfd5;
        width: 150px;
        line-height: 40px;
        text-align: center;
        border-right: 1px dashed #fff;
        font-size: 14px;
        margin-right: 10px;
    }
    .nav_search ul:not(:last-child) {
        border-bottom: 1px dashed #fff;
    }
    /* 二级分类 */
    .nav_search .nav_search_classification2 li:not(:first-child) {
        display: none;
    }
    .nav_search .nav_search_classification2 li:nth-child(2) {
        display: block;
    }
    /* 价格分类 */
    .nav_search .nav_search_price li button {
        width: 90px;
        padding-left: 0px;
        padding-right: 0px;
    }
    .nav_search .nav_search_price li:last-child {
        margin-left: 15px;
    }
    .nav_search .nav_search_price li:last-child span {
        font-size: 12px;
    }
    .nav_search .nav_search_price li:last-child input {
        width: 30px;
        font-size: 12px;
        line-height: 16px;
    }
    .nav_search .nav_search_price li:last-child button {
        width: 35px;
        font-size: 12px;
        margin-left: 10px;
        margin-right: 0;
        padding-left: 5px;
        padding-right: 5px;
    }
    /* -------------------------搜索结果模块开始----------------------- */
    .search_result {
        margin-top: 5px;
    }
    /* 搜索结果通知栏 */
    .search_result .search_result_notice {
        padding-top: 5px;
        padding-bottom: 5px;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        font-weight: 700;
        margin-bottom: 10px;
        border-bottom: 1px solid tomato;
    }
    .search_result .search_result_notice button {
        font-size: 16px;
        margin-right: 10px;
        padding: 2px;
        border-radius: 3px;
        color: #666;
    }
    .search_result .search_result_notice button:hover {
        color: tomato;
    }
    .search_result .search_result_notice button span {
        font-size: 12px;
    }
    /* ----------------搜索结果列表形式--------------- */
    .search_result .result_list>ul>li {
        background-color: #eeeeee99;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
    }
    .search_result .result_list>ul>li:hover {
        background-color: #eee;
    }
    /* 左侧图片部分 */
    .search_result .result_list li .img {
        width: 180px;
        height: 250px;
        margin-left: 30px;
    }
    .search_result .result_list li .img img {
        width: 180px;
        height: 250px;
        border-radius: 10px;
    }
    /* 右侧详情 */
    .search_result .result_list .details .book_name {
        margin-top: 20px;
    }
    .search_result .result_list .details li {
        width: 930px;
        margin-bottom: 10px;
    }
    .search_result .result_list .details .book_name a {
        color: #666;
        font-size: 20px;
    }
    .search_result .result_list .details .book_name a:hover {
        color: tomato;
        text-decoration: underline;
    }
    .search_result .result_list .details .book_price {
        color: #f00;
        font-size: 32px;
        font-weight: 700;
    }
    .search_result .result_list .details .book_data {
        font-size: 12px;
    }
    .search_result .result_list .details .book_detail {
        height: 62px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
    }
    .search_result .result_list .details .book_buy {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        margin-bottom: 0;
    }
    .search_result .result_list .details .book_buy button {
        color: #fff;
        border-radius: 5px;
        line-height: 30px;
        display: inline;
        padding-left: 5px;
        padding-right: 5px;
        margin-right: 20px;
    }
    .search_result .result_list .details .book_buy button:not(:first-child) {
        background-color: #ff2832cc;
    }
    .search_result .result_list .details .book_buy button:not(:first-child):hover {
        background-color: #ff2832;
    }
    .search_result .result_list .details .book_buy button:first-child {
        background-color: #FFEDEEcc;
        border: 1px solid #f00;
        color: #f00;
        padding-left: 10px;
        padding-right: 10px;
    }
    .search_result .result_list .details .book_buy button:first-child:hover {
        background-color: #FFEDEE;
    }
    /* 无搜索结果 */
    .search_result .result_list .no_result li {
        text-align: center !important;
        display: block;
        margin-top: 20px;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    /* ----------------搜索结果列表形式结束--------------- */
    /* ----------页码按钮样式--------- */
    /* 小于等于25长度 */
    .search_page {
        margin-top: 50px;
        margin-bottom: 150px;
    }
    .search_page .less,.search_page .more {
        display: flex;
        justify-content: center;
    }
    .search_page .less li button,.search_page .more li button {
        background-color: #fff;
        text-decoration:none;
        background:#2f435e;
        color:#f2f2f2;
        padding: 5px 15px 5px 15px;
        font-size:14px;
        font-family: 微软雅黑,宋体,Arial,Helvetica,Verdana,sans-serif;
        font-weight:bold;
        border-radius:3px;
        -webkit-transition:all linear 0.20s;
        -moz-transition:all linear 0.20s;
        transition:all linear 0.20s;
    }
    .search_page .less li button:hover,.search_page .more li button:hover {
        background-color: #385f9e;
    }
    .search_page .less li:not(:last-child),.search_page .more li:not(:last-child) {
        margin-right: 6px;
    }
    /* 大于25长度 */
    .search_page .more .inp_page {
        margin-left: 70px;
    }
    .search_page .more li:nth-child(6) {
        font-size: 26px;
    }
    .search_page .more .inp_page span {
        font-size: 14px;
        margin-right: 5px;
        color: #2f435e;
    }
    .search_page .more .inp_page input {
        width: 60px;
        border: 1px solid #2f435e;
        height: 25px;
        margin-right: 10px;
        text-align: center;
    }
    /* 页码显示 */
    .search_page .pageShow li {
        text-align: center;
        padding-top: 40px;
    }
    /* -------------------------搜索结果模块结束----------------------- */
</style>
<script>
export default {
    data() {
        return {
            //保存一级分类变量及其对应的二级分类,服务器端获取
            book_classification: [],
            //保存已选一级分类(---查询条件---)
            book_classification1: '',
            //保存已选二级分类(---查询条件---)
            book_classification2: '',
            //保存已选价格区间(---查询条件---)
            book_price: { start: 0,end: 10000 },
            //保存作者(---查询条件---)
            book_author: '',
            //保存动态返回的作者（数组）
            book_search_author: [
                { book_author: '' }
            ],
            //保存出版社(---查询条件---)
            book_press: '',
            //保存当前页码(---查询条件---)
            result_page: 1,
            //保存动态返回的出版社（数组）
            book_search_press: [
                {book_press: ''}
            ],
            //保存查询结果（-->查询结果<--）
            book_search_results: [],
            //保存价格区间分类
            book_price_type: [
                { start: 0,end: 20 },
                { start: 20,end: 50 },
                { start: 50,end: 100 },
                { start: 100,end: 150 },
                { start: 150,end: 300 },
                { start: 300,end: 10000 }
            ],
            //双向绑定书籍的价格起始区间
            book_price_start: '',
            //双向绑定书籍的价格结束区间
            book_price_end: '',
            //如果输入有误则显示红框的样式
            //框1输入是否错误样式
            inp1_ErrorClass: {
                borderDanger: false,
            },
            //框2输入是否错误样式
            inp2_ErrorClass: {
                borderDanger: false,
            },
            //页码框输入是否错误样式
            inp_pageClass: {
                borderDanger: false,
            },
            //确定按钮的样式
            sureClass: {
                book_search_chosen: false,
            },
            //保存搜索结果的长度(分页相关)
            search_result_length: 1,
            //页码输入框的双向绑定
            inp_page: '',
        }
    },
    methods: {
        //改变当前选中的一级分类
        change_classification1(a) {
            if(this.book_classification1 != a) {
                this.book_classification1 = a;
                this.book_classification2 = '';
                this.book_author = '';
                this.book_press = '';
                this.search_author();
                this.search_press();
                this.result_page = 1;
                this.search_all_length().then(this.search_all);
            }
        },
        //改变当前选中的二级分类
        change_classification2(a) {
            this.book_classification2 = a;
            this.book_author = '';
            this.book_press = '';
            this.search_author();
            this.search_press();
            this.result_page = 1;
            this.search_all_length().then(this.search_all);
        },
        //改变当前选中的价格区间
        change_price(start,end) {
            this.book_price.start = start;
            this.book_price.end = end;
            this.sureClass.book_search_chosen = false;
            this.inp1_ErrorClass.borderDanger = false;
            this.inp2_ErrorClass.borderDanger = false;
            this.book_author = '';
            this.book_press = '';
            this.search_author();
            this.search_press();
            this.result_page = 1;
            this.search_all_length().then(this.search_all);
        },
        //inp框改变价格区间
        change_inp_price() {
            var reg = /^\d{1,4}$/;
            if(!reg.test(this.book_price_start)) {
                this.inp1_ErrorClass.borderDanger = true;
                return;
            } else {
                this.inp1_ErrorClass.borderDanger = false;
            }
            if(!reg.test(this.book_price_end)) {
                this.inp2_ErrorClass.borderDanger = true;
                return;
            } else {
                this.inp2_ErrorClass.borderDanger = false;
            }
            if(parseInt(this.book_price_end) <= parseInt(this.book_price_start)) {
                this.inp2_ErrorClass.borderDanger = true;
                return;
            } else {
                this.inp2_ErrorClass.borderDanger = false;
            }
            this.book_price.start = this.book_price_start;
            this.book_price.end = this.book_price_end;
            this.sureClass.book_search_chosen = true;
            this.result_page = 1;
            this.search_all_length().then(this.search_all);
        },
        //改变当前选中的作者
        change_author(a) {
            this.book_author = a;
            this.result_page = 1;
            this.search_all_length().then(this.search_all);
        },
        //改变当前选中的出版社
        change_press(a) {
            this.book_press = a;
            this.result_page = 1;
            this.search_all_length().then(this.search_all);
        },
        //数字页码按钮改变当前页码
        changePage(a) {
            this.inp_pageClass.borderDanger = false;
            this.result_page = a;
            this.search_all_length().then(this.search_all);
            document.body.scrollTop = 335;
            document.documentElement.scrollTop = 335;
        },
        //输入框按确定改变当前的页码
        inp_changePage(a) {
            var reg = /^\d{1,4}$/;
            if(!reg.test(a) || a> Math.ceil(this.search_result_length/5) || a == 0) {
                this.inp_pageClass.borderDanger = true;
                return;
            } else {
                this.inp_pageClass.borderDanger = false;
                this.changePage(a);
            }
        },
        //点击上一页事件函数
        prev_page() {
            this.inp_pageClass.borderDanger = false;
            if(this.result_page == 1) return;
            this.result_page --;
            this.search_all_length().then(this.search_all);
            document.body.scrollTop = 335;
            document.documentElement.scrollTop = 335;
        },
        //点击下一页事件函数
        next_page() {
            this.inp_pageClass.borderDanger = false;
            if(this.result_page == Math.ceil(this.search_result_length/5)) return;
            this.result_page ++;
            this.search_all_length().then(this.search_all);
            document.body.scrollTop = 335;
            document.documentElement.scrollTop = 335;
        },
        //执行根据一级、二级分类以及价格查询作者的封装函数
        search_author() {
            return new Promise(
                (door) => {
                    this.axios.get("http://127.0.0.1:8000/bookdata/search_author",{
                        params:{
                            book_classification1: this.book_classification1,
                            book_classification2: this.book_classification2,
                            price_start: this.book_price.start,
                            price_end: this.book_price.end,
                        }
                    })
                    .then(result=>{
                        this.book_search_author = result.data;
                    });
                    door();
                }
            );
        },
        //执行根据一级、二级分类以及价格查询作者的封装函数
        search_press() {
            return new Promise(
                (door) => {
                    this.axios.get("http://127.0.0.1:8000/bookdata/search_press",{
                        params:{
                            book_classification1: this.book_classification1,
                            book_classification2: this.book_classification2,
                            price_start: this.book_price.start,
                            price_end: this.book_price.end,
                        }
                    })
                    .then(result=>{
                        this.book_search_press = result.data;
                    });
                    door();
                }
            );
        },
        // 执行查询所有的结果长度的封装函数
        search_all_length() {
            return new Promise(
                (door) => {
                    this.axios.get("http://127.0.0.1:8000/bookdata/search_all_length",{
                        params:{
                            book_classification1: this.book_classification1,
                            book_classification2: this.book_classification2,
                            price_start: this.book_price.start,
                            price_end: this.book_price.end,
                            book_author: this.book_author,
                            book_press: this.book_press,
                        }
                    })
                    .then(result=>{
                        this.search_result_length = result.data.length;
                    });
                    door();
                }
            );
        },
        // 执行查询所有的封装函数
        search_all() {
            return new Promise(
                (door) => {
                    this.axios.get("http://127.0.0.1:8000/bookdata/search_all",{
                        params:{
                            book_classification1: this.book_classification1,
                            book_classification2: this.book_classification2,
                            price_start: this.book_price.start,
                            price_end: this.book_price.end,
                            book_author: this.book_author,
                            book_press: this.book_press,
                            result_page: this.result_page,
                        }
                    })
                    .then(result=>{
                        this.book_search_results = result.data;
                        this.book_search_results.forEach((item,index)=>{
                            item.book_cover = require('../assets/images_booksData/'+item.book_cover);
                        });
                    });
                    door();
                }
            );
        }
    },
    mounted() {
        //查询一级分类和二级分类的种类数量
        this.axios.get("http://127.0.0.1:8000/bookdata/book_classification1")
        .then(result=>{
            this.book_classification = result.data;
        });
        this.search_author();
        this.search_press();
        this.search_all_length().then(this.search_all);
    },
    watch: {
        //一旦价格输入框改变，确定按钮选中样式取消
        book_price_start() {
            this.sureClass.book_search_chosen = false;
        },
        book_price_end() {
            this.sureClass.book_search_chosen = false;
        },
        //一旦页码输入，错误样式取消
        inp_page() {
            this.inp_pageClass.borderDanger = false;
        }
    }
}
</script>