<template>
  <div class="box text-center">
      <div class="ss">
             <input type="search" >
            
      </div>
    
    <ul class="cc">
      <li>
        <router-link to="/home">首页</router-link>
        </li>
        <li><router-link to="/in_theaters">正在热映</router-link></li>
        <li><router-link to="/coming_soon">即将上映</router-link></li>
        <li><router-link to="/top250">top250</router-link></li>
    </ul>
 
    <router-view></router-view>
  </div>
</template>
<script>

</script>

<style  >
*{
  padding:0;
  margin:0
}

.cc{
    overflow: hidden;
   
}
 li{
    float: left;
   list-style:none;
   margin:10px 10px
 }
 .ss{
         margin: 0 auto
 }
</style>


