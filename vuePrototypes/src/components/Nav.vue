<script setup>
    import {RouterLink} from "vue-router";

</script>

<template>
    <div>
        <header>
            <img src="../assets/PracticeLogo.png" class="logo" alt="Practice Makes Stuff Look Cool" />
            <nav>
                <RouterLink class="nav-item" active-class="active" to="/">Home</RouterLink>
                <RouterLink class="nav-item" active-class="active" to="/about">About</RouterLink>
            </nav>
            
        </header>
        
    </div> 
</template>

<style scoped>
header{
    height: 50px;
    width: 100%;
    margin: 5px 10px;
    padding-left: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav{
    height: 100%;
    margin-top: 1em;
    padding: 0 20px;
    
}
.nav-item{
    padding: 1em 1em;
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
}
.nav-item:hover{
    /* background-color: #8080801a; */
    font-weight: bold;
}
.active{
    background-color: #000000cc;
    color: #fff;
}
.active:hover{
    font-weight: normal;
}
.logo{
    height: 100%;
    width: auto;
}
</style>