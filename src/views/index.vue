<template>
    <div>
        <!-- 引入头部全局组件 -->
        <index-header></index-header>
        <!-- 首页主体部分 -->
        <div class="index_body center">
            <!-- ------------------------------------banner1部分开始--------------------------- -->
            <!-- 新书推荐 -->
            <div class="banner1">
                <!---------------- 二级导航栏开始 ------------------->
                <ul class="left">
                    <li class="navbar" v-for="(item,index) of book_classification1" :key="index">
                        <router-link to="/search">
                            <div class="own">{{item.title}}</div>
                            <div class="aside"></div>
                            <div class="aside2"><span class="iconfont icon-zhixiang"></span></div>
                        </router-link>
                        <div class="classification2">
                            <div class="classification2-pipe"></div>
                            <div class="classification2-font"><div v-for="(item2,index2) of item.content" :key="index2"><router-link to="/search">{{item2}}</router-link></div></div>
                        </div>
                    </li>
                </ul>
                <!------------------ 二级导航栏结束 -------------------->
                <!-- -----------------新书轮播图--------------------- -->
                <div class="right">
                    <div class="img" :style="banner1_move_translate">
                        <!-- 轮播图片 -->
                        <router-link :to="`/details/${item.bid}`" v-for="(item,index) of book_index_newbooks" :key="index">
                            <img :src="item.book_cover" alt="">
                        </router-link>
                    </div>
                    <!-- 小点控制组件 -->
                    <ul class="point">
                        <li :class="banner1_move_times == index+1 ? 'chosen' : ''" @click="banner1_point_chose(index+1)" v-for="(item,index) of book_index_newbooks.length" :key="index"></li>
                    </ul>
                    <!-- 按钮控制组件 -->
                    <button class="btn-left" @click="banner1_btn_move('left')"><span>&lt;</span></button>
                    <button class="btn-right" @click="banner1_btn_move('right')"><span>&gt;</span></button>
                </div>
                <!-- ------------------新书轮播图结束-------------- -->
            </div>
            <!-- ------------------------------------banner1部分结束--------------------------- -->
            <!-- 首页推荐 -->
            <!-- 横幅告示：首页热门推荐 -->
            <div class="banner2_notice center">
                首页热门推荐
            </div>
            <!-- -------------------------------------banner2部分开始----------------------------- -->
            <!-- banner2轮播图开始 -->
            <div class="banner2">
                <!-- 左侧轮播按钮 -->
                <div class="left" @click="banner2_btn_move('left')">
                    <button>&lt;</button>
                </div>
                <!-- 中间轮播部分 -->
                <div class="banner2_shuffling">
                    <!-- 要轮播的图片组 -->
                    <div class="img" :style="banner2_move_translate">
                        <!-- 轮播图片 -->
                        <router-link :to="`/details/${item.bid}`" v-for="(item,index) of bookmall_index_recommendation" :key="index">
                            <img :src="item.book_cover" alt="">
                        </router-link>
                    </div>
                    <!-- 小点控制组件 -->
                    <ul class="point">
                        <li :class="banner2_move_times == index+1 ? 'chosen' : ''" @click="banner2_point_chose(index+1)" v-for="(item,index) of bookmall_index_recommendation.length/4" :key="index"></li>
                    </ul>
                    <!-- 按钮控制组件 -->
                </div>
                <!-- 右侧轮播按钮 -->
                <div class="right"  @click="banner2_btn_move('right')">
                    <button>&gt;</button>
                </div>
            </div>
            <!-- banner2轮播图结束 -->
            <!-- -------------------------------------banner2部分结束----------------------------- -->
            <!-- 图书分类 -->
            <div class="banner3_classification center">
                图书分类
            </div>
            <!-- -------------------------------------banner3部分开始----------------------------- -->
            <div class="banner3">
                <!-- 一级分类栏 -->
                <div class="classification1 center">
                    <div class="notice1">一级分类：</div>
                    <button 
                        v-for="(item,index) of book_classification1" :key="index" :class="banner3_classification1 == item.title ? 'banner3_chosen': ''" @click="banner3_classification1_chose(item.title)" >{{item.title}}</button>
                </div>
                <!-- 二级分类栏 -->
                <div class="classification2 center">
                    <div class="notice2">二级分类：</div>
                    <div class="group" v-for="(item,index) of book_classification1" :key="index"    :class="banner3_classification1 == item.title ? 'displayBlock':''">
                        <button 
                        v-for="(item2,index2) of item.content"
                        :key="index2" 
                        :class="banner3_classification2 == item2 ? 'banner3_chosen' : ''" 
                        @click="banner3_classification2_chose(item2)" >{{item2}}</button>
                    </div>
                </div>
                <!-- 已选条件通知栏 -->
                <div class="selected-conditions">
                    已筛选条件:<span>{{banner3_classification1}}</span>&nbsp;<span :class="!banner3_classification2 ? 'clearborder' : ''">{{banner3_classification2}}</span>
                </div>
                <!-- 筛选结果展示 -->
                <div class="results center">
                    <!-- 包含图片元素和详情元素 -->
                    <div class="theImage"  v-for="(item,index) of banner3_results" :key="index">
                        <router-link :to="`/details/${item.bid}`">
                            <img :src="item.book_cover" alt="">
                            <div class="theImage-details"></div>
                            <div class="details">
                                <ul>
                                    <li><span>图书名称</span>：{{item.book_name}}</li>
                                    <li><span>作者</span>：{{item.book_author}}</li>
                                    <li><span>价格</span>：￥{{item.book_price}}</li>
                                    <li><span>出版日期</span>：{{item.book_date}}</li>
                                    <li><span>出版社</span>：{{item.book_press}}</li>
                                </ul>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="more center">
                    <router-link :to="`/search`"><button >查看更多》</button></router-link>
                    
                </div>
            </div>
            <!-- -------------------------------------banner3部分结束----------------------------- -->
            
            <!-- -------------------------------------banner4部分开始----------------------------- -->
            <div class="banner45 center">
                <!-- 左上角 -->
                <div class="banner45_notice">独家推送</div>
                <div class="content">
                    <!-- 左侧详情 -->
                    <div class="details">
                        <ul>
                            <li class="clearfix"><span>图书：</span><span>{{bookmall_index_exclusive[banner4_chosen_id-1].book_name}}</span></li>
                            <li class="clearfix"><span>作者：</span><span>{{bookmall_index_exclusive[banner4_chosen_id-1].book_author}}</span></li>
                            <li class="clearfix"><span>简介：</span><span>{{bookmall_index_exclusive[banner4_chosen_id-1].book_details ? bookmall_index_exclusive[banner4_chosen_id-1].book_details : '无简介'}}</span></li>
                        </ul>
                    </div>
                    <!-- 图书部分 -->
                    <div class="theImage">
                        <div class="img" v-for="(item,index) of bookmall_index_exclusive" :key="index" @mouseover="banner4_chosen(index+1)">
                            <router-link :to="`/details/${item.bid}`">
                                <img :src="item.book_cover" alt="">
                                <div class="banner45_chosen" :class="banner4_chosen_id == index+1 ? 'displayBlock' : ''"></div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- -------------------------------------banner4部分结束----------------------------- -->

            <!-- -------------------------------------banner5部分开始----------------------------- -->
             <div class="banner45 center">
                <!-- 左上角 -->
                <div class="banner45_notice">猜你喜欢</div>
                <div class="content">
                    <!-- 左侧详情 -->
                    <div class="details">
                        <ul>
                            <li class="clearfix"><span>图书：</span><span>《书名称我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我1我我我我》</span></li>
                            <li class="clearfix"><span>作者：</span><span>作者名称我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我哦我我我我我我我我我哦</span></li>
                            <li class="clearfix"><span>简介：</span><span>我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我哦</span></li>
                        </ul>
                    </div>
                    <!-- 图书部分 -->
                    <div class="theImage">
                        <div class="img">
                            <router-link to="/">
                                <img src="../assets/images_booksData/22603296-1_u_4.jpg" alt="">
                                <div class="banner45_chosen"></div>
                            </router-link>
                        </div>
                        <div class="img">
                            <router-link to="/">
                                <img src="../assets/images_booksData/22603296-1_u_4.jpg" alt="">
                                <div class="banner45_chosen"></div>
                            </router-link>
                        </div>
                        <div class="img">
                            <router-link to="/">
                                <img src="../assets/images_booksData/22603296-1_u_4.jpg" alt="">
                                <div class="banner45_chosen"></div>
                            </router-link>
                        </div>
                        <div class="img">
                            <router-link to="/">
                                <img src="../assets/images_booksData/22603296-1_u_4.jpg" alt="">
                                <div class="banner45_chosen"></div>
                            </router-link>
                        </div>
                        <div class="img">
                            <router-link to="/">
                                <img src="../assets/images_booksData/22603296-1_u_4.jpg" alt="">
                                <div class="banner45_chosen"></div>
                            </router-link>
                        </div>
                        <div class="img">
                            <router-link to="/">
                                <img src="../assets/images_booksData/22603296-1_u_4.jpg" alt="">
                                <div class="banner45_chosen"></div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- -------------------------------------banner5部分结束----------------------------- -->
        </div>
        <!-- 引入脚部服务指南 -->
        <index-server></index-server>
        <!-- 引入脚部 -->
        <index-footer></index-footer>
    </div>
</template>
<style scoped>
    /* 首页主体 */
    .index_body {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    /* banner1 */
    .banner1 {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    /*------------------- banner1二级导航栏 --------------------*/
    .banner1 .left {
        border: 1px solid tomato;
        box-sizing: border-box;
        margin-right: 20px;
        border-radius: 20px;
    }
    .banner1 .left .navbar {
        width: 308px;
        line-height: 65px;
        background-color: #E2EEF3;
        font-weight: 700;
        border-bottom: 1px dotted #fff;
        box-sizing: border-box;
        position: relative;
        opacity: 0.8;
    }
    .banner1 .left .navbar:first-child {
        border-radius: 20px 20px 0 0;
    }
    .banner1 .left .navbar:last-child {
        border-radius: 0 0 20px 20px;
    }
    .banner1 .left .navbar a {
        color: #666;
        transition: all 0.2s;
        display: block;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }
    .banner1 .left .navbar .aside {
        height: 3px;
        width: 0px;
        transition: all 0.3s;
    }
    .banner1 .left .navbar:hover .aside {
        width: 130px;
        background-color: tomato;
        margin: 0 10px;
    }
    .banner1 .left .navbar .aside2 {
        opacity: 0;
    }
    .banner1 .left .navbar:hover {
        opacity: 1;
    }
    .banner1 .left .navbar:hover .aside2 {
        opacity: 1;
    }
    .banner1 .left .navbar a:hover {
        color: tomato;
    }
    .banner1 .left .navbar:last-child {
        border: 0;
    }
    .banner1 .left .classification2 {
        width: 200px;
        position: absolute;
        top: 2px;
        left: 108px;
        display: block;
        transition: all 0.4s;
        z-index: 1;
        display: flex;
        justify-content: left;
        align-items: center;
    }
    .banner1 .left .navbar:hover .classification2 {
        left: 308px;
    }
    .banner1 .left .navbar .classification2-pipe {
        width: 0px;
        height: 30px;
        background-color: #E2EEF3;
        transition: width 0.3s;
    }
    .banner1 .left .navbar:hover .classification2-pipe {
        width: 100px;
    }
    .banner1 .left .classification2 .classification2-font {
        background-color: #CAE2EE;
        width: 100px;
        border-radius: 15px;
        opacity: 0;
        transition: all 0.3s;
    }
    .banner1 .left .navbar:hover .classification2 .classification2-font {
        display: block;
        opacity: 1;
    }
    .banner1 .left .classification2 a {
        font-size: 12px;
        line-height: 20px;
    }
    /*-------------------- banner1二级导航栏结束 -----------------*/

    /* ---------------- banner1右侧轮播------------------------- */
    .banner1 .right {
        width: 800px;
        height: 380px;
        border: 2px solid #CAE2EE;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
    }
    /* --------图片轮播部分---------- */
    .banner1 .right .img {
        display: flex;
        transition: all 0.6s;
    }
    .banner1 .right .img img {
        width: 796px;
        height: 376px;
    }
    /* ---------轮播小点部分---------- */
    .banner1 .right .point {
        width: 150px;
        height: 10px;
        position: absolute;
        top: 93%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .banner1 .right .point li {
        background-color: #E2EEF3;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s;
    }
    .banner1 .right .point li:not(:last-child) {
        margin-right: 8px;
    }
    /* 选中状态的class样式(结合js脚本) */
    .banner1 .chosen {
        background-color: tomato !important;
        width: 15px !important;
        border-radius: 6px !important;
    }
    /* ---------轮播按钮部分---------- */
    .banner1 .right .btn-left,.btn-right {
        position: absolute;
        height: 80px;
        width: 60px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #E2EEF3;
        opacity: 0.8;
        transition: all 0.4s;
    }
    .banner1 .right:hover .btn-left {
        left: 0;
    }
    .banner1 .right:hover .btn-right {
        right: 0;
    }
    .banner1 .right .btn-left span,.btn-right span {
        background-color: #fff;
        display: block;
        width: 40px;
        height: 50px;
        line-height: 50px;
        font-weight: 900;
        transition: all 0.3s;
    }
    .banner1 .right .btn-left span:hover,.btn-right span:hover {
        color: tomato;
    }
    .banner1 .right .btn-left {
        left: -60px;
        border-radius: 0 10px 10px 0;
    }
    .banner1 .right .btn-left span {
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 5px 0 0 5px;
    }
    .banner1 .right .btn-right span {
        border-radius: 0 5px 5px 0;
    }
    .banner1 .right .btn-right {
        right: -60px;
        border-radius: 10px 0px 0 10px;
    }
    /* ---------------- banner1右侧轮播结束------------------------- */

    /* -------------------- banner2首页推荐开始 ------------------ */
    /* 标题 */
    .banner2_notice {
        /* background-color: #CAE2EE; */
        line-height: 60px;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 15px;
        border-radius: 5px;
        font-weight: 700;
        background-image: url(../assets/banner_bgimg.jpg);
        font-size: 20px;
    }
    /* ---------banner2轮播图开始-------- */
    .banner2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 400px;
        background-color: #eee;
        border-radius: 8px;
    }
    /* 中心部分 */
    .banner2 .banner2_shuffling {
        width: 930px;
        height: 400px;
        background-color: #eee;
        overflow: hidden;
        position: relative;
    }
    /* 左右按钮部分 */
    .banner2 .left,.banner2 .right {
        height: 400px;
        width: 60px;
        opacity: 0.7;
    }
    .banner2 .left button,.banner2 .right button {
        line-height: 400px;
        text-align: center;
        color: tomato;
        font-size: 42px;
        display: block;
        width: 60px;
        display: block;
        font-weight: 900;
    }
    .banner2 .left:hover,.banner2 .right:hover {
        opacity: 1;
    }
    .banner2 .left button {
        background-image: linear-gradient(90deg,#bbb,#eee);
        border-radius: 8px 0 0 8px;
    }
    .banner2 .right button {
        background-image: linear-gradient(90deg,#eee,#bbb);
        border-radius: 0 8px 8px 0;
    }
    /* 图片部分 */
    .banner2 .img {
        display: flex;
        align-items: center;
        height: 400px;
        transition: all 0.5s;
    }
    .banner2 .img img {
        width: 203px;
        height: 300px;
        box-shadow: 0px 0px 10px 3px #999;
        box-sizing: border-box;
    }
    .banner2 .img img:hover {
        border: 2px solid tomato;
    }
    .banner2 .img a {
        margin-right: 22px;
        border: 1px solid #E2EEF3;
    }
    .banner2 .img a:first-child {
        margin-left: 22px;
    }
    /* 小点状态部分 */
    .banner2 .banner2_shuffling .point {
        width: 150px;
        height: 10px;
        position: absolute;
        top: 95%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .banner2 .banner2_shuffling .point li {
        background-color: #96daf7;
        width: 15px;
        height: 5px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;
    }
    .banner2 .banner2_shuffling .point li:not(:last-child) {
        margin-right: 20px;
    }
    /* 选中状态的class样式(结合js脚本) */
    .banner2 .chosen {
        background-color: tomato !important;
        width: 20px !important;
        border-radius: 6px !important;
    }
    /* -------------------- banner2首页推荐结束 ------------------ */
    /* 标题 */
    /* -------------------- banner3图书分类开始 ------------------ */
    .banner3_classification {
        line-height: 60px;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 15px;
        border-radius: 5px;
        font-weight: 700;
        background-image: url(../assets/banner_bgimg.jpg);
        font-size: 20px;
    }
    /* 一级分类与二级分类导航 */
    .banner3 .classification1 .notice1,.banner3 .classification2 .notice2 {
        width: 100px;
        line-height: 40px;
        position: absolute;
        left: 160px;
        font-weight: 600;
        color: tomato;
    }
    .banner3 .classification1 {
        padding-bottom: 30px !important;
        padding-top: 20px !important;
        position: relative;
    }
    .banner3 .classification1,.banner3 .classification2 .group {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #E2EEF3;
        padding: 5px 0;
    }
    .banner3 .classification2 .group {
        display: none;
        justify-content: left;
        width: 630px;
    }
    .banner3 .classification1 {
        border-radius: 5px 5px 0 0 ;
    }
    .banner3 .classification2 {
        justify-content: center;
        display: flex;
        background-color: #E2EEF3;
        position: relative;
    }
    .banner3 .classification1 button,.banner3 .classification2 .group button {
        line-height: 40px;
        background-color: #cae2ee;
        width: 80px;
        font-weight: 700;
        color: #666;
        border-radius: 5px;
        transition: all 0.2s;
    }
    .banner3 .classification1 button:hover,.banner3 .classification2 button:hover {
        color: tomato;
    }
    .banner3 .classification1 button:not(:last-child) {
        margin-right: 30px;
    }
    .banner3 .classification2 button:not(:last-child) {
        margin-right: 50px;
    }
    .banner3 .classification2 .group button {
        width: 120px;
    }
    /* 被选中的class样式 */
    .banner3_chosen {
        background-color: #1b58e6 !important;
        color: tomato !important;
    }
    .banner3 .selected-conditions {
        background-color: #E2EEF3;
        padding-left: 20px;
        color: tomato;
        padding-top: 50px;
        padding-bottom: 10px;
        font-size: 14px;
    }
    .banner3 .selected-conditions span {
        line-height: 26px;
        padding-left: 10px;
        padding-right: 10px;
        border: 1px solid #1b58e6;
        display: inline-block;
    }
    /* 图片部分样式 */
    .banner3 .results {
        background-color: #E2EEF3;
        display: flex;
        flex-wrap: wrap;
        padding: 40px;
        box-sizing: border-box;

    }
    .banner3 .results a {
        display: block;
        position: relative;
    }
    .banner3 .theImage {
        margin-right: 30px;
        margin-bottom: 30px;
        overflow: hidden;
        box-shadow: 0px 0px 5px 2px #999;
    }
    .banner3 .theImage:nth-child(5n) {
        margin-right: 0;
    }
    .banner3 .results .theImage,.banner3 .results img {
        width: 200px;
        height: 250px;
        border-radius: 10px;
    }
    /* 详情定位div */
    .banner3 .results .details {
        position: absolute;
        top: -250px;
        width: 200px;
        height: 250px;
        background-color: #24252299;
        border-radius: 3px;
        color: #fff;
        line-height: 40px;
        font-size: 14px;
        padding-left: 20px;
        padding-top: 20px;
        padding-right: 20px;
        box-sizing: border-box;
        transition: all 0.3s;
    }
    .banner3 .results .theImage:hover .details {
        top: 0;
    }
    .banner3 .results .details span {
        color: #9fcbdf;
        font-weight: 600;
    }
    .banner3 .results .details li {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-weight: normal;
        font-size: 12px;
    }
    /* 更多 */
    .banner3 .more {
        background-color: #E2EEF3;
        border-radius: 0 0 5px 5px;
        padding-bottom: 30px;
        display: flex;
        justify-content: flex-end;
    }
    .banner3 .more button {
        display: block;
        width: 120px;
        height: 50px;
        border-radius: 10px;
        background-color: #1b58e6;
        color: #eee;
        font-size: 16px;
        font-weight: 700;
        margin-right: 40px;
        transition: all 0.2s;
    }
    .banner3 .more button:hover {
        color: tomato;
    }
    /* -------------------- banner3图书分类结束 ------------------ */

    /* -------------------- banner4、banner5 ------------------ */
    .banner45 {
        background-color: #CAE2EE;
        margin-top: 20px;
        border-radius: 10px;
        overflow: hidden;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        box-sizing: border-box;
    }
    /* 左上角div */
    .banner45 .banner45_notice {
        width: 150px;
        height: 40px;
        background-color: rgb(95, 126, 155);
        margin-top: 20px;
        text-align: center;
        line-height: 40px;
        color: tomato;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    /* 中间图片内容部分 */
    .banner45 .content {
        display: flex;
        justify-content: space-between;
    }
    .banner45 .theImage {
        width: 1000px;
        display: flex;
    }
    .banner45 .theImage .img {
        position: relative;
    }
    .banner45 .theImage .img,.banner45 .theImage img,.banner45 .img .banner45_chosen {
        width: 150px;
        height: 200px;
        border-radius: 10px;
    }
    .banner45 .theImage .img:not(:last-child) {
        margin-right: 15px;
    }
    /* 鼠标进入被选中时候的样式 */
    .banner45 .img .banner45_chosen {
        position: absolute;
        background-color: #24252299;
        top: 0;
        display: none;
    }
    /* 左侧详情部分 */
    .banner45 .details {
        width: 150px;
        height: 200px;
        background-color: #E2EEF3;
        box-sizing: border-box;
        border: 1px solid tomato;
        border-radius: 10px;
    }
    .banner45 .details li {
        width: 140px;
        padding: 10px 5px 0 5px;
    }
    .banner45 .details li span:first-child {
        width: 45px;
        white-space: nowrap;
        float: left;
        color: tomato;
        margin-bottom: 15px;
    }
    .banner45 .details li span:last-child {
        width: 95px;
        font-size: 12px;
        float: right;
        padding-top: 4px;
    }
    .banner45 .details li:first-child span:last-child {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .banner45 .details li:nth-child(2) span:last-child {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .banner45 .details li:last-child span:last-child {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 7;
        overflow: hidden;
    }
    /* -------------------- banner4、banner5结束 ------------------ */
</style>
<script>
import E from 'wangeditor'
export default {
    data() {
        return {
            //-----------------------------通用变量---------------------------------
            //保存一级分类变量及其对应的二级分类(banner1)
            book_classification1: [],//该变量为共享变量
            //保存首页新书推荐的数据
            book_index_newbooks: [],
            //保存首页热门推荐的数据
            bookmall_index_recommendation: [],
            //保存首页独家推送的数据
            bookmall_index_exclusive: [{"bid":null,"book_name":"加载中...","book_author":"加载中...","book_cover":"加载中...","book_details":"加载中..."}],
            //----------------------------通用变量结束-------------------------------

            //-----------------------------banner1变量开始---------------------------
            //banner1轮播图移动的距离(banner1)
            banner1_move_translate: 'transform: translateX(0px);',
            //保存轮播图几号位置移动(banner1)
            banner1_move_times: 1,
            //保存周期性移动函数(banner1)
            banner1_timrer_fun: null,
            //-----------------------------banner1变量结束---------------------------

            //-----------------------------banner2变量开始---------------------------
            /* banner2轮播图移动的距离(banner2) */
            banner2_move_translate: 'transform: translateX(0px);',
            /* 保存轮播图几号位置移动(banner2) */
            banner2_move_times: 1,
            /* 保存周期性移动函数(banner2) */
            banner2_timrer_fun: null,
            //-----------------------------banner2变量结束---------------------------

            //-----------------------------banner3变量开始---------------------------
            /* 绑定一级分类被选中的值 */
            banner3_classification1: '',//初始值从服务器端获取
            /* 绑定二级分类被选中的值 */
            banner3_classification2: '',//初始值从服务器端获取
            /* 保存查询结果的数据 */
            banner3_results: [],
            //-----------------------------banner3变量结束---------------------------

            //-----------------------------banner4变量开始---------------------------
            //保存当前选中的是第几个图片
            banner4_chosen_id: 1,
            //-----------------------------banner4变量结束---------------------------
        }
    },
    methods: {
        //----------------------------------banner1方法开始-----------------------------
        //banner1轮播图移动函数(banner1)
        banner1_move() {
            if(this.banner1_move_times < 6) {
                this.banner1_move_translate = `transform: translateX(${-796*this.banner1_move_times}px);`
                this.banner1_move_times++;
            } else {
                //图片移完了移动到初始位置(banner1)
                this.banner1_move_translate = `transform: translateX(${796*(this.banner1_move_times-6)}px);`
                this.banner1_move_times = 1;
            }
        },
        //周期性移动(banner1)
        banner1_timer() {
            this.banner1_timrer_fun = setInterval(()=>{
                    this.banner1_move();
                },5000);
        },
        //小点选择的单击事件函数(banner1)
        banner1_point_chose(a) {
            //先清除周期定时器
            clearInterval(this.banner1_timrer_fun);
            this.banner1_move_times = (a-1);
            this.banner1_move();
            //再启动周期定时器
            this.banner1_timer();
        },
        // 按钮点击轮播事件函数(banner1)
        banner1_btn_move(direction) {
            if(direction == 'left') {
                clearInterval(this.banner1_timrer_fun);
                if(this.banner1_move_times != 1) {
                    let n1 = this.banner1_move_times - 2;
                    this.banner1_move_times = n1;
                    this.banner1_move();
                } else {
                    this.banner1_move_times = 5;
                    this.banner1_move();
                }
                this.banner1_timer();
            }else{
                clearInterval(this.banner1_timrer_fun);
                if(this.banner1_move_times != 7) {
                    let n2 = this.banner1_move_times;
                    this.banner1_move_times = n2;
                    this.banner1_move();
                }
                this.banner1_timer();
            }
        },
        //----------------------------------banner1方法结束----------------------------

        //----------------------------------banner2方法结束----------------------------
        banner2_move() {
            if(this.banner2_move_times < 3) {
                this.banner2_move_translate = `transform: translateX(${-908*(this.banner2_move_times)}px);`
                this.banner2_move_times++;
            } else {
                //图片移完了移动到初始位置(banner1)
                this.banner2_move_times = 1;
                this.banner2_move_translate = `transform: translateX(0px);`;
            }
        },
        //周期性移动(banner2)
        banner2_timer() {
            this.banner2_timrer_fun = setInterval(()=>{
                    this.banner2_move();
                },5000);
        },
        //小点选择的单击事件函数(banner2)
        banner2_point_chose(a) {
            //先清除周期定时器
            clearInterval(this.banner2_timrer_fun);
            this.banner2_move_times = (a-1);
            this.banner2_move();
            //再启动周期定时器
            this.banner2_timer();
        },
        // 按钮点击轮播事件函数(banner2)
        banner2_btn_move(direction) {
            if(direction == 'left') {
                clearInterval(this.banner2_timrer_fun);
                if(this.banner2_move_times != 1) {
                    let n2 = this.banner2_move_times - 2;
                    this.banner2_move_times = n2;
                    this.banner2_move();
                } else {
                    this.banner2_move_times = 2;
                    this.banner2_move();
                }
                this.banner2_timer();
            }else{
                clearInterval(this.banner2_timrer_fun);
                if(this.banner2_move_times != 12) {
                    let n2 = this.banner2_move_times;
                    this.banner2_move_times = n2;
                    this.banner2_move();
                }
                this.banner2_timer();
            }
        },
        //----------------------------------banner2方法结束----------------------------

        //----------------------------------banner3方法开始----------------------------
        //点击之后请求查询的封装的方法
        banner3_search() {
            this.axios.get("/bookdata/banner3_results",{
                params:{
                    banner3_classification1: this.banner3_classification1,
                    banner3_classification2: this.banner3_classification2
                }
            })
            .then(result=>{
                this.banner3_results = result.data;
                this.banner3_results.forEach((item,index)=>{
                    item.book_cover = require('../assets/images_booksData/'+item.book_cover);
                });
            });
        },
        //鼠标单击事件绑定函数，改变当前选中哪个一级分类
        banner3_classification1_chose(a) {
            if(this.banner3_classification1 != a) {
                this.banner3_classification2 = '';
                this.banner3_classification1 = a;
                this.banner3_search();
            }
        },
        //鼠标单击事件绑定函数，改变当前选中哪个二级分类
        banner3_classification2_chose(a) {
            this.banner3_classification2 = a;
            this.banner3_search();
        },
        //----------------------------------banner3方法结束----------------------------

        //----------------------------------banner4方法开始----------------------------
        //鼠标经过事件绑定函数，改变当前选中第几张图的变量
        banner4_chosen(a) {
            this.banner4_chosen_id = a;
        }
        //----------------------------------banner4方法开始----------------------------
    },
    watch: {
        
    },
    computed: {

    },
    mounted() {
    // -----------------------------------------------------------------------------
        //查询一级分类的种类数量
        this.axios.get("/bookdata/book_classification1")
        .then(result1=>{
            this.book_classification1 = result1.data;
            //一开始使banner3_classification1从服务器端获得初始值
            this.banner3_classification1 = result1.data[0].title;
            //一开始使banner3_classification2从服务器端获得初始值
            this.banner3_classification2 = result1.data[0].content[0];
            //一开始搜索默认选中项
            this.banner3_search();
        });
        //查询首页新书推荐
        this.axios.get("/bookdata/book_index_newbooks")
        .then(result=>{
            this.book_index_newbooks = result.data;
            this.book_index_newbooks.forEach((item,index)=>{
                item.book_cover = require('../assets/images_booksData/'+item.book_cover);
            });
        });
        //查询首页热门推荐
        this.axios.get("/bookdata/bookmall_index_recommendation")
        .then(result=>{
            this.bookmall_index_recommendation = result.data;
            this.bookmall_index_recommendation.forEach((item,index)=>{
                item.book_cover = require('../assets/images_index_recommendation/'+item.book_cover);
            });
        });
        //查询首页独家推送
        this.axios.get("/bookdata/bookmall_index_exclusive")
        .then(result=>{
            this.bookmall_index_exclusive = result.data;
            this.bookmall_index_exclusive.forEach((item,index)=>{
                item.book_cover = require('../assets/images_booksData/'+item.book_cover);
            });
        });
        //页面一加载就启动轮播图定时器
        this.banner2_timer();
        this.banner1_timer();
    },
    created() {
        
    },
}
</script>