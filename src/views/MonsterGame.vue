<template>
  <div>
    <section class="row">
          <div class="small-6 columns">
              <h1 class="text-center">YOU</h1>
              <div class="healthbar" v-bind:style="{width:player.health + '%'}">
                  <div class="healthbar text-center" >
                      <p>{{player.health}}</p>
                  </div>
              </div>
          </div>
          <div class="small-6 columns">
              <h1 class="text-center">MONSTER</h1>
              <div class="healthbar" v-bind:style="{width:monster.health + '%'}">
                  <div class="healthbar text-center" >
                      <p>{{monster.health}}</p>
                  </div>
              </div>
          </div>
      </section>
      <section v-if="!gameStarted" class="row controls">
          <div class="small-12 columns">
              <button @click="init()" id="start-game">START NEW GAME</button>
          </div>
      </section>
      <section v-if="gameStarted" class="row controls">
          <div  class="small-12 columns">
              <button @click="attack" id="attack">ATTACK</button>
              <button @click="specialAttack" id="special-attack">SPECIAL ATTACK</button>
              <button @click="heal" id="heal">HEAL</button>
              <button @click="stopGame" id="give-up">GIVE UP</button>
          </div>
      </section>
      <section v-show="logPanel" class="row log">
          <div class="small-12 columns">
              <ul>
                  <li v-for="log in logs" >
                      <span v-for="(value, key) in log" :key="key"> 
                        <p :class="{'monster-turn': key == 'monster', 'player-turn': key == 'player'}" >{{key}} {{value}}</p>
                      </span>
                   </li>   
              </ul>
          </div>
      </section>
    </div>  
</template>

<script>
export default {
  data(){
    return {
      gameStarted: false,
      logPanel: false,
      monster:{
        health: 100
      },
      player:{
        health: 100
      },
      logs:[]
    }
  },
  methods:{
      attack: function(){
          if(this.monster.health >= 0 && this.player.health >= 0){
            let mRand = Math.floor(Math.random() * (12 - 5) ) + 5;
            let pRand = Math.floor(Math.random() * (12 - 5) ) + 5;
            this.monster.health -= mRand;
            this.player.health -= pRand;
            this.logPanel = true;
            this.logs.unshift({
                monster: ` punched player for: ${pRand}`,
                player: ` punched monster for: ${mRand}`
            });
          }else{
                this.gameStarted = false;
                this.monster.health = 100;
                this.player.health = 100;
          }
      },
      init: function(){
        this.gameStarted=true;
        this.logPanel=false;
        this.monster.health = 100;
        this.player.health = 100;
      },
      specialAttack: function(){
          if(this.monster.health >= 0 && this.player.health >= 0){
            let mRand = Math.floor(Math.random() * (20 - 10) ) + 10;
            let pRand = Math.floor(Math.random() * (20 - 10) ) + 10;
            this.monster.health -= mRand;
            this.player.health -= pRand;
            this.logPanel = true;
          }else{
                this.logPanel = false;
                this.gameStarted = false;
                this.monster.health = 100;
                this.player.health = 100;
          }
      },
      heal: function() {
          if(this.monster.health >= 0 && this.player.health >= 0){
            let mRand = Math.floor(Math.random() * (12 - 5) ) + 5;
            let pRand = Math.floor(Math.random() * (12 - 5) ) + 5;
            this.monster.health += mRand;
            this.player.health += pRand;
            this.logPanel = true;
          }else{
                this.logPanel = false;
                this.gameStarted = false;
                this.monster.health = 100;
                this.player.health = 100;
          }
      },
      stopGame: function(){
            this.logPanel = false;
            this.gameStarted = false;
            this.monster.health = 100;
            this.player.health = 100;
      }
  }
}
</script>

<style scoped>
  .text-center {
    text-align: center;
}

    .healthbar {
        width: 100%;
        height: 40px;
        margin: auto;
        transition: width 500ms;
        background-color: green; 
        margin: 0; 
        color: white; 
    }

.controls, .log {
    margin-top: 30px;
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
}

.turn {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 22px;
}

.log ul {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
}

.log ul li {
    margin: 5px;
}

.player-turn {
    color: blue;
    background-color: #e4e8ff;
}

.monster-turn {
    color: red;
    background-color: #ffc0c1;
}

button {
    font-size: 20px;
    background-color: #eee;
    padding: 12px;
    box-shadow: 0 1px 1px black;
    margin: 10px;
}

#start-game {
    background-color: #aaffb0;
}

#start-game:hover {
    background-color: #76ff7e;
}

#attack {
    background-color: #ff7367;
}

#attack:hover {
    background-color: #ff3f43;
}

#special-attack {
    background-color: #ffaf4f;
}

#special-attack:hover {
    background-color: #ff9a2b;
}

#heal {
    background-color: #aaffb0;
}

#heal:hover {
    background-color: #76ff7e;
}

#give-up {
    background-color: #ffffff;
}

#give-up:hover {
    background-color: #c7c7c7;
}
</style>