<template>
    <nav  id="nav" class="navbar navbar-default">
    <ul class="nav nav-pills">
            <li><img alt="Vue" src="../assets/logo.png">     </li>

            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        
            <router-link to="/monstergame" tag="li" active-class="active"><a>MonsterGame</a></router-link>
        
            <router-link to="/server-status" tag="li" active-class="active"><a>ServerStatus(props/$emit)</a></router-link>
        
            <router-link to="/components" tag="li" active-class="active"><a>Components</a></router-link>
        
            <router-link to="/componentsProject" tag="li" active-class="active"><a>CompProject</a></router-link>
        
            <router-link to="/colorTemplates" tag="li" active-class="active"><a>ColorTemplates</a></router-link>
        
            <router-link to="/quotes" tag="li" active-class="active"><a>QuotesAppv</a></router-link>
        
            <router-link to="/forms" tag="li" active-class="active"><a>Forms</a></router-link>
        
            <router-link to="/directives" tag="li" active-class="active"><a>Directives</a></router-link>
        
            <router-link to="/filters-mixins" tag="li" active-class="active"><a>FiltersMixins</a></router-link>
        
            <router-link to="/animations-transitions" tag="li" active-class="active"><a>AnimationsTransitions</a></router-link>
        
            <router-link to="/quizz-app" tag="li" active-class="active"><a>QuizzApp</a></router-link>
        
            <router-link to="/http" tag="li" active-class="active"><a>HTTP</a></router-link>

            <router-link to="/router" tag="li" active-class="active"><a>Router</a></router-link>
            <router-link to="/vuex" tag="li" active-class="active"><a>Vuex</a></router-link>
        </ul>
    </nav> 
</template>
<script>
export default {
    
}
</script>
<style >
#nav {
  padding: 5px;
}
/* #nav a {
  color: #2c3e50;
} */

#nav a.router-link-exact-active {
  color: #42b983;
}
img {
    width: 40px;
    height:auto;
}
</style>