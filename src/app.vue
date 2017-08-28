<style>
    /*@import 'sass/main.scss';*/

</style>
<template>
    <div class="body-bg">
        <!--<main v-if="$pageFinishedLoading" v-class="{ 'menu-collapsed': $baSidebarService.isMenuCollapsed() }">   &lt;!&ndash;这是主模块， 只有在加载图片结束的时候 才会显示&ndash;&gt;-->

            <page-top></page-top>                        <!--这是顶部模块  ，写成一个指令的样式-->
            <ba-sidebar></ba-sidebar>                   <!--这是侧边栏 模块，写成一个指令的样式-->

            <!--<div class="al-main">-->
                <!--<div class="al-content">-->
                    <!--<content-top></content-top>-->
                    <!--<div ui-view autoscroll="true" autoscroll-body-top></div>-->
                <!--</div>-->
            <!--</div>-->

            <!--<footer class="al-footer clearfix">-->
                <!--<div class="al-footer-right">Created with <i class="ion-heart"></i></div>-->
                <!--<div class="al-footer-main clearfix">-->
                    <!--<div class="al-copy">Blur Admin 2016</div>-->
                    <!--<ul class="al-share clearfix">-->
                        <!--<li><i class="socicon socicon-facebook"></i></li>-->
                        <!--<li><i class="socicon socicon-twitter"></i></li>-->
                        <!--<li><i class="socicon socicon-google"></i></li>-->
                        <!--<li><i class="socicon socicon-github"></i></li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</footer>     &lt;!&ndash;-这是底部的 每个页面都有的分享按钮一直存在的  Facebook  tumblr   &ndash;&gt;-->
            <!--<back-top></back-top>                        &lt;!&ndash;这是返回到顶部的按钮，  只有在滑动条出现的时候才会出现&ndash;&gt;-->
        <!--</main>-->

        <!--<div id="preloader" v-show="!$pageFinishedLoading">     &lt;!&ndash;这是加载图片，一直转圈，只有加载完成，才不显示&ndash;&gt;-->
            <!--<div></div>-->
        <!--</div>-->

    </div>
</template>
<script>

    export default {}
</script>