<template>
   <div id="info">
       <h1>New User</h1>
       <div class="name">
           <p>{{user.firstname}} {{user.lastname}} / <span>{{user.login}}</span></p>
       </div>
   </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        computed: mapGetters(["user"]),
        method: mapActions(["user"]),
        name: "fieldMapping",
        mounted(){
            this.user;
        }
    }
</script>

<style scoped>
    h1, p
    {
        padding: 1em 0 1em 0;
        background-color: rgba(255,255,255, .8);
    }
    #info {
        background: rgba(0,0,0, 0.9);
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        position: relative;
        margin: 0 auto;
        width: 608px;
        height: 232px;
        padding: 5% 5%;
    }
</style>