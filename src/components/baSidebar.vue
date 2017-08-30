<style >
    .main-sidebar {
        /*width: 200px;*/
        /*height: 100%;*/
        /*box-shadow: 5px 5px 5px hsla(0, 30%, 86%, 10);*/
        /*background-color: #0177B5;*/
        /*opacity: 0.8;*/
    }
    aside{
        background:#dcdcdc;
    }
    .sidebar-menu>li{
        background:#4fbd88;
        margin-bottom:8px;

    }
    .sidebar-menu>li a{
        color:#fff
    }
    .sidebar-menu>li ul{
        background:#dcdcdc;
        color:#333;
        text-align: 30px;
    }
    .sidebar-menu>li ul a{
        color:#000;
    }
    .sidebar-menu>li a span{
        margin-left:30px;
        font-weight:700;'
    }
</style>

<template>
    <aside class="main-sidebar">
        <section class="sidebar">
            <ul class="sidebar-menu">
                <li class="header">导航菜单</li>
                <!-- vue生成的菜单 -->
                <menu-item :item="item" v-for="item in menuList"></menu-item>
            </ul>
        </section>
    </aside>
</template>


<script>
    export default {
        name: 'baSidebar',
        data:function(){
            return {
                menuList:[],
                password:'',
                newPassword:'',
                navTitle:"欢迎页"
            }
        },
        methods: {
            getMenuList: function () {
                console.log(localStorage.getItem("token"));
                this.$http.get('sys/menu/user').then(response => {
                    console.log(response);
                    this.menuList = response.body.menuList;
                    window.permissions = response.body.permissions;
                }, response => {

                });
            },
            getUser: function(){
                $.getJSON("sys/user/info", function(r){
                    vm.user = r.user;
                });
            },
            updatePassword: function(){
                layer.open({
                    type: 1,
                    skin: 'layui-layer-molv',
                    title: "修改密码",
                    area: ['550px', '270px'],
                    shadeClose: false,
                    content: jQuery("#passwordLayer"),
                    btn: ['修改','取消'],
                    btn1: function (index) {
                        var data = "password="+vm.password+"&newPassword="+vm.newPassword;
                        $.ajax({
                            type: "POST",
                            url: "sys/user/password",
                            data: data,
                            dataType: "json",
                            token:localStorage.getItem('token'),
                            success: function(result){
                                if(result.code == 0){
                                    layer.close(index);
                                    layer.alert('修改成功', function(index){
                                        location.reload();
                                    });
                                }else{
                                    layer.alert(result.msg);
                                }
                            }
                        });
                    }
                });
            },
            logout: function () {
                //删除本地token
                localStorage.removeItem("token");
                //跳转到登录页面
                location.href = baseURL + 'login.html';
            }
        },
        created: function(){
            this.getMenuList();
            this.getUser();
        },
        updated: function(){
            //路由
            var router = new Router();
            routerList(router, vm.menuList);
            router.start();
        }
    }
</script>