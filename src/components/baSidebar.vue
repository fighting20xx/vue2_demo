<style>
    .al-sidebar {
        height: 100%;
        box-shadow: 5px 5px 5px hsla(0, 30%, 86%, 10);
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
        name: 'menu-item',
        props:{item:{}},
        methods: {
            getMenuList: function () {
                $.getJSON(this.GLOBAL.baseURL + "sys/menu/user", function(r){
                    vm.menuList = r.menuList;
                    window.permissions = r.permissions;
                });
            },
            get11: function () {
                this.$http.jsonp(this.GLOBAL.baseURL + "sys/menu/user",function () {
                    vm.menuList = r.menuList;
                    window.permissions = r.permissions;
                })
            },
            getUser: function(){
                console.log(this.GLOBAL.baseURL + "sys/menu/user");
                $.getJSON(this.GLOBAL.baseURL + "sys/user/info", function(r){
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
                            url: this.GLOBAL.baseURL + "sys/user/password",
                            data: data,
                            dataType: "json",
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
            this.get11();
        },
        updated: function(){
            //路由
            var router = new Router();
            routerList(router, vm.menuList);
            router.start();
        }
    }
</script>