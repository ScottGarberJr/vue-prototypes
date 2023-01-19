<script setup>
    import {useRoute} from "vue-router";
    import {RouterLink} from "vue-router";
    import items from "@/data/shop.json";

    const route = useRoute();

    const item = items.find(i => i.id === parseInt(route.params.id));

</script>
<template>
    <div class="item">
        <div class="top">
            <h1>Item View</h1>
            <router-link to="/Shop"><button class="back">Back</button></router-link>
        </div>
        <div class="body" v-if="item">
            <h3>{{ item.name[0].toUpperCase() + item.name.substring(1)}}</h3>
            <p>{{ item.category }}</p>
            <p>{{ item.price }}</p>
        </div>
        <div class="body" v-else>
            <h2>Sorry! That item is not found.</h2>
        </div>
    </div>
    
</template>
<style scoped>
.item{
    width: 600px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 2px 2px 0 #000000;
}
.top{
    display: flex;
    justify-content: space-between;

    padding: 0 20px;
}
.top h1{
    width:100%;
    text-align: center;
}
.back{
    width: 40px;
    border: none;
    background-color: white;
}
.back:hover{
    font-weight: bold;
    color: red;
}
.body{
    padding: 5px 15px;
}
.body h2{
    font-style:italic;
    padding: 30px 0;
    text-align: center;
}
</style>