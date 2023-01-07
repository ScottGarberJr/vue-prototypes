<script setup>
    import {RouterLink} from "vue-router";
    import {ref} from "vue";
    // import HanoiView from './HanoiView.vue';

    const demos = ref([]);
    demos.value.push(
        {
        id: 0,
        title: 'Schultz',
        page: '/schultz',
        img: "https://images.unsplash.com/photo-1616628188550-808682f3926d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3JpZCUyMG51bWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
        },
        {
        id: 1,
        title: 'Hanoi',
        page: '/hanoi',
        img: "https://images.unsplash.com/photo-1599708153386-62bf3f035c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
        id: 2,
        title: 'Shop',
        page: '/shop',
        img: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNob3BwaW5nJTIwYmFza2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
        }   
  );

</script>

<template>
    <div class="container">
        <!-- <div class="overlay">
            <button class="exit">x</button>
            <HanoiView v-if="activated='hanoi'" />
        </div> -->
        <div class="greeting">
            <h1>Welcome to My Odd Collection of Prototypes!</h1>
            <h3>I created this as a place to build prototypes of ideas before extracting them out of putting them together in larger-scoped projects. Plus, theyre fun and my son loves to see what's new :D</h3>
        </div>
        <div class="card-container">
            <div class="card" v-for="demo in demos" :key="demo.id" > <!--:style="{background: url('demo.img')}"-->
                <router-link :to="demo.page" class="card-title">{{ demo.title }}</router-link>
            </div>
        </div>
    </div>   
</template>

<style scoped>
.container{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.greeting{
    width: 800px;
    text-align: center;
}
.card-container{
    margin-top: 15px;
    display:flex;
    flex-wrap: wrap;
    
  }
.card{
    width: 150px;
    height: 150px;
    
    padding: 0;
    margin-right: 20px;
    margin-bottom:20px;

    /* border-radius: 15px; */
    box-shadow: 1px 4px #808080cc;

    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.card:hover{
    opacity: #0000001a;
    box-shadow: 4px 4px #808080cc;
}
.card-img{
    width:100%;
    height: 150px;
    overflow: hidden;
}
.card-title{
    text-align: center;
    padding: 0;
    text-decoration: none;
    color: black;
    font-size: 1.2rem;  
    
}
</style>