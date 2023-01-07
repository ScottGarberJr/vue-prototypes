<script setup>
    import shop from "../data/shop.json";

</script>

<template>
    <main>
        <h1>Shop</h1>
        <div class="shop">
            <a v-for="item in shop" :key="item.id" href="">{{item.name}}</a>
        </div>
    </main>
</template>

<style scoped>
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