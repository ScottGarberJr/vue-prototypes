<script setup>

    var showing
</script>

<template>
 <main>
    <h1>Profile Builder</h1>
    <div class="profile">
        <div class="sidebar">
            <div class="top-pane">
                <div class="circle">
                    <img src="@/assets/ProfBuilder/Nagina.png" alt="sample person img">
                </div>
                <div class="nametag">
                    <h1 class="name">Nagina Mirza</h1>
                    <h2 class="title">Photographer</h2>
                </div>
                <div class="social">
                    <ul><a href="">a</a></ul>
                    <ul><a href="">b</a></ul>
                    <ul><a href="">c</a></ul>
                </div>
            </div>
            <div class="bottom-pane">
                <ul><a href="">Main</a></ul>
                <ul><a href="">Gallery</a></ul>
                <ul><a href="">Settings</a></ul>
            </div>
        </div>
        <div class="content">
            
        </div>
    </div>
</main>
</template>

<style scoped>
    main{
        display: flex;
        align-items: center;
    }
    
    .profile{
        margin: 0 20px;
        display: flex;

    }
    .sidebar{
        background-color: orangered;
        height: 700px;
        width: 350px;
        /* padding: 20px; */
    }
    .top-pane{
        display:flex;
        align-items: center;
        flex-direction: column;
        /* height: 250px; */
        margin: 20px;
    }
    .content{
        background-color: violet;
        height: 700px;
        width: 750px;
        margin: 0 20px;
    }
    ul{
        list-style: none;
        padding-left: 0;
    }
    ul a{
        text-decoration: none;
    }
    /* --------------------------------- */
    .circle{
        height: 250px;
        width: 250px;

        border-radius: 100%;
        overflow: hidden;

    }
    .circle img{
        height: 250px;
        transform: translateX(-45px);
    }
    .nametag{
        width: 100%;
        padding: 0 20px;
    }
    .nametag h1{
        width: 100%;
        text-align: left;
    }
    .nametag h2{
        width: 100%;
        text-align: right;
    }
    .social{
        background-color: lightblue;
        display: flex;

        width: 250px;
        height: 70px;
    }
    
</style>
