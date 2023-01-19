<script setup>
import draggable from 'vuedraggable';
import { ref } from 'vue';

const tower1 = ref(stack1);
const tower2 = ref(stack2);
const tower3 = ref(stack3);


var stack1 = ref([
    { id: 1, color:"green" },
    { id: 2, color:"blue" },
    { id: 3, color:"purple" },
    { id: 4, color:"red" }
]);
var stack2 = ([]);
var stack3 = ([]);


</script>

<template>
    <div class="app">
        <h1>Tower of Hanoi</h1>
        <div class="hanoi">

            <div class="stack">   
                
                <div class="block" v-for="block in stack1" :key="block.id" 
                :class="{green: block.color=='green', blue: block.color=='blue', purple: block.color=='purple', red: block.color=='red'}">
                    <!-- {{ block.id }}   -->
                    
                </div>
                <div class="bottom"></div>
                    
            </div>
            <div class="stack">   
                
                <div class="block" v-for="block in stack2" :key="block.id" 
                :class="{green: block.color=='green', blue: block.color=='blue', purple: block.color=='purple', red: block.color=='red'}">
                    <!-- {{ block.id }}   -->
                </div>
                <div class="bottom"></div>
                    
            </div>
            <div class="stack">   
                
                <div class="block" v-for="block in stack2" :key="block.id" 
                :class="{green: block.color=='green', blue: block.color=='blue', purple: block.color=='purple', red: block.color=='red'}">
                    <!-- {{ block.id }}   -->
                </div>
                <div class="bottom"></div>
                    
            </div>

        </div>
    </div>
    
</template>

<style scoped>
    .app{
        width: 900px;
        height: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .hanoi{
        width: 100%;
        height: 500px;
        border: 2px solid black;
        padding: 20px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        
    }
    .stack{
        width: 250px;
        height: 250px;
        /* margin-top: 20%; */

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:end;
        background-image: url("@/assets/Hanoi/tower-peg.png");
        background-size: cover;
        background-repeat: no-repeat;
        
    }
    .block{
        height: 1.8em;
        border: 1px solid white;
        
        text-align: center;
        color: white;
        font-size: 1.5em;
        
        

    }
    .green{
        width: 85px;
        background-color: #56D056;
    }
    .blue{
        width: 130px;
        background-color: blue;
    }
    .purple{
        width: 180px;
        background-color: #b100cd;
    }
    .red{
        width: 230px;
        background-color: red;
    }

    .bottom{
        background-color: black;
        width: 100%;
        height: 40px;
        border-radius: 15px;
    }
    
</style>