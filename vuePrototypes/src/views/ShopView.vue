<script setup>
    import shop from "../data/shop.json";
    import {RouterLink} from "vue-router";

</script>

<template>
    <main>
        <h1>Shop</h1>
        <div class="shop">
            <RouterLink :to="`/shop/${item.id}`" v-for="item in shop" :key="item.id" href="">{{item.name}}</RouterLink>
        </div>
    </main>
</template>

<style scoped>
main{
    margin: 25px auto;
    width: 100%;
}
main h1{
    width: 100%;
    text-align: center;
}
.shop{
    display: flex;
    flex-wrap: wrap;
}
.shop a{
    text-decoration: none;
    color: #000;
    width: 100px;
    margin: 10px;
    box-shadow: 0 2px 2px 0 #000000;
    text-align: center;
}
.shop a:hover{
    font-weight: bold
}
</style>