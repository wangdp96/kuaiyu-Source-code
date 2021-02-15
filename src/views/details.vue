<template>
    <div class="details">
        <!-- 引入头部全局组件 -->
        <index-header></index-header>
        <!-- 图片和信息 -->
        <div class="details-product">
            <!-- 放大镜 -->
            <div class="details-imgs">
                <!-- 中图 -->
                <div class="imgs-md" >
                    <div id="mask" style="display:none"></div>
                    <div id="super-mask" @mouseover="into" @mouseout="out" @mousemove="move"></div>
                    <div><img :src="imgsm[i]" alt=""></div>
                </div>
                <!-- 小图 -->
                <div class="imgs-sm">
                    <div class="btnleft">
                        <el-button type="info" plain @click="right" :disabled="disbtn1"><i class="el-icon-arrow-left"></i></el-button>
                    </div>
                    <div class="imgs-sm-show" @click="change">
                        <ul>
                            <li v-for="(p,i) of imgsm" :key="i" ><img :src="p" :data-i="i"></li>
                           <!-- <li><img :src="imgsm[0]" alt=""></li>
                            <li><img src="../assets/product/sm/57ad359dNd4a6f130.jpg" alt=""></li>
                            <li><img src="../assets/product/sm/57ad359dNd4a6f130.jpg" alt=""></li>
                            <li><img src="../assets/product/sm/57ba6a27Nbb8d2dcf.jpg" alt=""></li>
                            <li><img src="../assets/product/sm/57ba6a27Nbb8d2dcf.jpg" alt=""></li>  -->
                        </ul>
                    </div>
                    <div class="btnright">
                        <el-button type="info" plain @click="left" :disabled="disbtn2"><i class="el-icon-arrow-right"></i></el-button>
                    </div>
                </div>
            </div>
            
            <!-- 详情 -->
            <div class="details-data">
                <div id="super-mask-lg" style="display:none" :style="{'background-image':`url(${imgsm[i]})`}"></div>
                <div class="details-title">
                    <p>{{product.book_name}}</p>
                        <span>{{product.book_author}}&nbsp;&nbsp;|&nbsp;&nbsp;{{product.book_date}}&nbsp;&nbsp;|&nbsp;&nbsp;{{product.book_press}}</span>
                </div>
                <div class="details-content" v-if="product.book_details">{{product.book_details}}</div>
                <div class="details-content" v-else>此商品暂无简介......</div>
                <div class="details-price">
                    <el-card shadow="always">售价：￥{{product.book_price}}</el-card>
                    <div class="price-yhj"></div>
                    <!-- <a> -->
                    <!-- <img src="../assets/yhj.gif" alt=""> -->
                    <!-- </a> -->
                </div>
                <div class="details-site">
                    <div style="width:15%">收货地址：</div>
                    <city></city>
                </div>
                <div class="details-card">
                    <div class="card-num"><count></count></div>
                    <div><el-button type="primary" size="">
                        <router-link to='/'>加入购物车</router-link>
                        <i class="el-icon-shopping-cart-2
 el-icon--right"></i></el-button></div>
                    <div class="card-buy"><el-button type="primary">
                        <router-link to='/'>立刻购买</router-link>
                        </el-button></div>
                </div>
            </div>
        </div>
        <!-- 相关推荐 -->
        <div class="details-com">
            <div >
               <el-button type="primary">相关推荐
                   <!-- <i class="el-icon-arrow-right el-icon--right"></i> -->
                </el-button>
            </div>
            <div class="com-imgs">
               <div  v-for="(p,i) of coment1" :key="i" >
                   <img :src="p" style="width:100%">
                </div>
            </div>
            <div>
               <el-button type="primary" @click="reqimg">换一批<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </div>
        </div>
        <!-- 引入脚部服务指南 -->
        <index-server></index-server>
        <!-- 引入脚部 -->
        <index-footer></index-footer>
    </div>
</template>
<script>
import city from '../components/city.vue'
import count from '../components/count.vue'
export default {
    props:["bid"],
    data(){
        return{
            coment:[],
            coment1:[],
            num:1,
            tims:0,
            disbtn1:true,
            disbtn2:false,
            product:{price:0},
            // pics:[{md:'',lg:''}],
            imgsm:[],
            cbook:["教材","外语","中小学辅导","传统文化","历史","宗教哲学","旅游","烹饪","养生","卡通动漫","励志成长","中国儿童文学","摄影","文学","艺术","都市","悬疑推理","中国近代小说"],
            // imglg:[],
            i:0
        }
    },
    methods:{
        // 相关推荐请求
        reqimg(){
            this.coment=[];
            this.coment1=[];
            let n=Math.floor(Math.random()*18);
            this.axios.get('http://127.0.0.1:8000/details/bookdet?book_classification2='+this.cbook[n]).then((result)=>{
                this.coment=result.data;               
                for(var i=0;i<this.coment.length;i++){
                    var add=require("../assets/images_booksData/"+this.coment[i].book_cover)
                    this.coment1.push(add);
                }
            })
        },
        // 放大镜和书籍详情请求
        getList(){
            // console.log(this.bid)
            this.axios.get("http://127.0.0.1:8000/details/bookdetails?bid="+this.bid).then((result)=>{
                console.log(result.data)
                this.product=result.data.result;
                this.pics=result.data.pics; 
                this.coment=result.data.cbooks;               
                // console.log(this.product);
                // console.log(this.pics,this.pics.length)
                for(var i=0;i<this.coment.length;i++){
                    var add=require("../assets/images_booksData/"+this.coment[i].book_cover)
                    this.coment1.push(add);
                }
                //   console.log(this.coment)
                //   console.log(this.coment1)
                var add1=require("../assets/images_booksData/"+this.pics.book_cover)
                var add2=require("../assets/images_booksData/"+this.pics.book_frontView1)
                var add3=require("../assets/images_booksData/"+this.pics.book_frontView2)
                var add4=require("../assets/images_booksData/"+this.pics.book_frontView3)
                this.imgsm.push(add1);
                this.imgsm.push(add2);
                this.imgsm.push(add3);
                this.imgsm.push(add4);
               
                // console.log(this.imgsm)
            })
        },
        // 小图片事件
        change(e){
            if(e.target.nodeName==='IMG'){
                this.i=e.target.dataset.i
            }
        },
        // 鼠标进入中图显示移动阴影
        move(e){
            var top=e.offsetY-100;
            var left=e.offsetX-100;
            var lgimg=document.getElementById('super-mask-lg')
            if(top<0){top=0}else if(top>150){top=150}
            if(left<0){left=0}else if(left>150){left=150}
            mask.style.left=left+'px';
            mask.style.top=top+'px';
            lgimg.style.backgroundPositionX=left*-2.4+'px',
            lgimg.style.backgroundPositionY=top*-2.4+'px'
            },
        // 移动阴影样式
        into(){
            mask.style.display="block";
            var lgimg=document.getElementById('super-mask-lg')
            lgimg.style.display="block"
        },
        out(){mask.style.display="none";
            var lgimg=document.getElementById('super-mask-lg')
            lgimg.style.display="none"},
        // 小图移动按钮事件
        right(){
            var imglength=document.querySelector('.details .imgs-sm>div>ul')
            if(this.tims!=0){
               this.tims--;
               imglength.style.marginLeft=this.tims*-60+'px';
               this.disbtn2=false;
            }else if(this.tims==0){this.disbtn1=true;}
        },
        left(){
            var imglength=document.querySelector('.details .imgs-sm>div>ul')
            // console.log(imglength)
            if(this.tims<1){
               this.tims++;
               imglength.style.marginLeft=-60*this.tims+'px';
               this.disbtn1=false;
            }else if(this.tims==1){
                this.disbtn2=true;
            }
        }
       
    },
    mounted(){
          this.getList();
          this.reqimg();

    },
    watch:{
        lid(){
            this.getList();
        }  
    },
    components:{city,count}
}
</script>
<style  scoped>
/* 公共 */
a{
    text-decoration: none;
    color:white;
}

/* 详情 */
.details{
    margin: 0 auto;
    width: 1200px;
    background-color: #e8e8e8;
}
.details>.details-product{
    margin: 0 auto;
    width: 1200px;
    height: 500px;
    /* border: 1px solid red; */
}


/* 放大镜 */
.details>.details-product>.details-imgs{
    width: 400px;height: 100%;
    /* border: 1px solid pink; */
    float: left;
    /* background-color: #555; */
}
.details .imgs-md{
    margin: 10px auto;
    width: 350px;height: 350px;
}
.details .imgs-sm{
    margin: 10px auto;
    width: 350px;height: 120px;
    background: -webkit-linear-gradient(top, #ffffff 0%, #cbc5d5 50%, #ffffff 100%);;
    display: flex;
    justify-content : space-around;
    align-items: center;
}
/* 中图片 */
.details .imgs-md img{
    width: 100%;
}
.details .imgs-md{
    position:relative;
}
/* 放大镜 */
#mask{
    width: 200px;height: 200px;
    position: absolute;
    z-index: 100;
    background-color: pink;
    opacity: 0.5;
}
#super-mask{
    width: 350px;height: 350px;
    position: absolute;
    z-index: 1000;
    background-color: green;
    opacity: 0.1;
}


/* 小图片 */
.details .imgs-sm>.imgs-sm-show{
    height: 54px;
    width: 180px;
    overflow: hidden;
    /* background-color: #fff; */
}
.details .imgs-sm>div>ul{
   list-style: none;
   display: flex;
   height: 100%;
   padding-left: 0;
   margin: 0;
} 
.details .imgs-sm>div>ul>li{
    margin: 3px;
    width: 54px;
    transition: 0.5s;
}
/* 小图片的切换按钮 */
.details .imgs-sm>div>button{
    width: 50px;height: 80px;
}
.details .imgs-sm>div>ul>li>img{
    height: 100%;
} 
/* 小图鼠标进入动画 */
.details .imgs-sm>div>ul>li:hover{
    transform: scale(1.2);
}




/* 简介 */
.details>.details-product>.details-data{
    width: 800px;
    float: right;
    position: relative;
}
/* 大图 */
#super-mask-lg{
    width: 350px;height: 350px;
    position:absolute;
    z-index: 1000;
    /* background-image: url(../assets/product/lg/57ba6a38N4f4670bd.jpg); */
    background-size: 200%;
}

/* 简介的各项类容 */
.details>.details-product>.details-data>.details-price,.details-site,.details-card{
    height: 100px;
    /* border: 1px solid aqua; */
    display: flex;
}  
/* 标题 */
.details>.details-product>.details-data>.details-title>p{
    margin: 0;
    font-size: 28px;
    font-weight: bolder;
    color:#000;
    text-align: center;
    padding:20px 10px 10px 30px;
} 
.details>.details-product>.details-data>.details-title>span{
    text-align: left;
    font-weight: bolder;
    color: #2b2a2a;
}



/* 内容 */
.details .details-data .details-content{
    height: 100px;
    font-size: 20px;
    line-height: 27px;
    color:#666;
    text-align: left;
    padding:10px 10px 5px 10px;
    text-indent: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
/* 价格 */
.details .details-data .details-price div{
    color: #0aa1ed;
    width: 400px;
    background:-webkit-linear-gradient(top, #f0f0f0 0%, #e0e0e0 100%);
    margin: 5px;
    border-radius: 5px;
    font-size: 32px;
    font-weight: bolder;
    box-shadow: -10px 0 10px #ccc;
    line-height: 50px;
}
.details .details-data .details-price .price-yhj{
    width: 350px;
    margin: 5px 10px;
    background-image: url(../assets/yhj.gif);
    background-size: 100% 100%;
}

/* 地址栏 */
.details .details-data .details-site{
    margin:10px 0 0 5px;
    padding: 20px 10px 20px;
    height: 40px;width: 790;
    line-height: 40px;
    font-weight: bolder;
    font-size: 16px;
    box-shadow: -10px 0 10px #ccc;
}


/* 购物车 */
.details .details-data .details-card{
    align-items: center;
}
.details .details-data .details-card .card-num{
    margin: 0 50px;
}
.details .details-data .details-card .card-buy{
    margin: 0 60px;
}
.details .details-data .details-card button{
    font-size:24px;
}


/* 相关推荐 */
.details>.details-com{
    position: relative;
    margin: 0 auto;
    width: 1200px;
    height: 250px;
    border: 1px solid green;
}
.details>.details-com>.com-imgs{
    height: 150px;
    overflow: hidden;
}
.details>.details-com>.com-imgs>div{
    width: 150px;height: 150px;
    background-color: pink;
    margin: 5px 10px;
    float: left;
    transition: 1s;
}
.details>.details-com>.com-imgs>div:hover{
    transform: scale(1.1);
    box-shadow:0 0 50px #6f5959;
}
.details>.details-com>div:first-child{
  margin: 5px 0 0 5px;
  text-align:left;
}
.details>.details-com>div:last-child{
  margin: 8px 8px 5px 0;
  text-align:right;
}
</style>