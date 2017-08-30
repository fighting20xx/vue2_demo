<%--  Created by IntelliJ IDEA.
  User: seven.li
  Date: 2017/8/28
  Time: 15:08 
  Emali: fighting20xx@126.com   --%>    


<template>
    <li>
        <a v-if="item.type === 0" href="javascript:;">
            <i v-if="item.icon != null" :class="item.icon"></i>
            <span>{{item.name}}</span>
            <i class="fa fa-angle-left pull-right"></i>
        </a>',

        <ul v-if="item.type === 0" class="treeview-menu">
            <menu-item :item="item" v-for="item in item.list"></menu-item>
        </ul>

          <a v-if="item.type === 1" :href="'#'+item.url"><i v-if="item.icon != null" :class="item.icon"></i>
              <i v-else class="fa fa-circle-o"></i> {{item.name}}
          </a>
    </li>
</template>
<script>
    export default {
        name: 'menuItem',
        props:{item:{}},
    }
</script>
<style>


</style>