<script setup>
    import {ref} from "vue";

    var size = ref(9);
    const schultz = ref([]);

    class Item{
        constructor(num){
            this.number = num;
            this.color = getRandomColor();
        }
    }
    function makeSet(){
        const array = [];
        for(let i=0; i<size.value; i++) array[i] = i+1;
        // console.log("array: \t" + array); //test
        
        const set = array;
        for (let i = array.length-1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            set[j] = temp;
        }
        // console.log("set: \t" + set) //test
        return set;
    }
    function makeSchultz(){
        const set = makeSet();
        // set.forEach(i => {
        //     schultz.value.push(new Item(set[i]));
        // });
        for(let i=0; i<set.length;i++){
            schultz.value.push(new Item(set[i]));
        }
        // console.log("set: \t" + set) //test
    }
    function getRandomColor() {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    }
    
    makeSchultz();

    // =========================== DASHBOARD & GAME ========================
    var next = ref('?');

    var isStarted = false;
    var isIncreasing = true;

    function step(pressed){
        if (!isStarted){
            switch (pressed){
                case 1:
                    isStarted = true;    
                    isIncreasing = true;
                    next.value = pressed;
                    runTimer();
                    break;
                case size.value:
                    isStarted = true;
                    isIncreasing = false;
                    next.value = pressed;
                    runTimer();
                    break;
                default:
                    next.value = '?'
                    isStarted = false;
                    console.log(`test...\n
                        size: ${size.value},\n
                        started: ${isStarted},\n
                        pressed: ${pressed}
                        `);
                    return;
                    break;
            }
        }
        if (pressed==next.value && 
        ((isIncreasing && next.value == size.value ) || (!isIncreasing && next.value == 1 ))){
            isStarted = false;
            stopTimer();
            next.value = "?";
            alert(`\n\nCOMPLETED!!!!\n
            Time : ${time.value}`)
        }
        else if (isIncreasing && pressed==next.value) {
            next.value = pressed + 1;
            console.log(`
                correct,\n
                started: ${isStarted},\n
                increasing: ${isIncreasing},\n
                next: ${next.value}`
                ); //TEST
        }
        else if (pressed== next.value){
            next.value = pressed - 1;
            console.log(`
                correct,\n
                started: ${isStarted},\n
                increasing: ${isIncreasing},\n
                next: ${next.value}`
                ); //TEST
        }
        else console.log(`WRONG,\n
            started: ${isStarted},\n 
            increasing: ${isIncreasing},\n
            next: ${next.value}`); //TEST
    
    }
// ================================= TIMER ==================================
var min = 0;
var sec = 0;
var time = ref(`${min}:${sec.toString().padStart(2,'0')}`);
var timer;
function runTimer(){
    timer = setInterval(iterateTime, 1000);
    console.log("Time started");
    
}
function iterateTime(){
    if(isStarted){
        sec++;
        if(sec >= 60){
            sec = 0;
            min++;
        }
        updateTime();
    }
    else stopTimer();
    
}
function updateTime(){
    time.value = `${min}:${sec.toString().padStart(2,'0')}`;
}
function stopTimer(){
    clearInterval(timer);
    console.log(`time stopped. Time : ${time.value}`)
}
function reset(){
    stopTimer();
    isStarted = false;
    min = 0;
    sec = 0;
    time.value = `${min}:${sec.toString().padStart(2,'0')}`;
    next.value = '?';

}

// ========================= NEW BUTTON & CHANGING SIZE ========================
var newSize=ref(9);
var setSize=ref();

function loadNew(){
    do{
        schultz.value.pop();
    }
    while(schultz.value.length>0);
    newSize.value = size.value;
    makeSchultz();
    reset();
    
    
}
    
</script>

<template>
    <main :class="{size9: newSize==9, size16: newSize==16, size25: newSize==25}">
        <header :class="{size9: newSize==9, size16: newSize==16, size25: newSize==25}">
            <h1>Schultz Table {{size}}</h1>
            <div class="new">
                <button @click="loadNew()">New</button>
                <select v-model="size">
                    <option disabled>Size</option>
                    <option value="9">9</option>
                    <option value="16">16</option>
                    <option value="25">25</option>
                </select>
            </div>
        </header>
        
        <div class="card-container" :class="{size9: newSize==9, size16: newSize==16, size25: newSize==25}">
            <div class="card" v-for="item in schultz" 
                :style="{backgroundColor: item.color}" :key="item.id"
                @click="step(item.number)">
                <p>{{item.number}}</p>
            </div>
        </div>
        <div class="dashboard" :class="{size9: newSize==9, size16: newSize==16, size25: newSize==25}">
            <h2>Time:   {{time}}</h2>
            <button @click="reset()">Restart</button>
            <h2>Next:  {{next}}</h2>
        </div>
        
    </main>
</template>

<style scoped>
main{
    /* width: 100%; */
    /* margin: 0 auto; */
}
header{
    /* width: 450px; */
    display: flex;
    justify-content: space-between;
    
}
.new{
    width: 150px;
    margin-bottom: 10px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
}
.new button{
    width: 45%;
    font-size: 1.2em;;
}
.new select{
    width: 45%;
    font-size: 1.2em;
    text-align: center;
}
.card-container{
    display: flex;
    flex-wrap: wrap;
}
.size9{
    width: 450px;
}
.size16{
    width: 600px;
}
.size25{
    width: 750px;
}
.card{
    width: 150px;
    height: 150px;
    padding: 5px;
    border: 1px solid black;

    display: flex;
    align-items: center;
    justify-content: center;

}
.card:hover{
    opacity: 50%;
}
.card p{
    font-size: 2em;
    font-weight: bold;
}
.dashboard{
    /* width: 450px; */
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
}
.dashboard h2{
    width: 150px;
    text-align: center;
}
.dashboard button{
    width: 100px;
    font-size: 1.2em;
}
</style>