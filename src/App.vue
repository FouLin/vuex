<template>
    <div id="app">
        <form @submit.prevent="submit">
            <div class="container">

                <h1>Sing up</h1>

                <label> Login<span>*</span></label>
                <input class="form-styling" v-model="login" type="text" name="fullname"/>
                <label>Email<span>*</span></label>
                <input class="form-styling" type="email" name="email" v-model="email"/>
                <label>Password</label>
                <input class="form-styling" v-model="password" type="password" name="password"/>
                <label>First name</label>
                <input class="first_name" type="text" v-model="firstname" name="first_name">
                <label>Last name</label>
                <input class="last_name" type="text" v-model="lastname" name="last_name">
                <label>Date of birth</label>
                <input class="date_of_dirth" type="date" name="date_of_dirth" min="1890-01-01">
                <label>Country</label>
                <select class="country" type="text" name="country"></select>
                <label>City</label>
                <select class="city" type="text" name="city"/>
                <label>Zip code</label>
                <input class="zip_code" type="text" name="zip_code">

                <button type="submit" class="registerbtn">Sing up</button>
            </div>

        </form>
    </div>
</template>

<script>
    import {mapMutations} from "vuex"

    export default {
        data() {
            return {
                login: '',
                firstname: '',
                lastname: '',
                email: '',
                password: '',
            }
        },
        methods: {
            ...mapMutations(["createUser"]),
            submit() {
                this.createUser({
                    login: this.login,
                    firstname: this.firstname,
                    lastname: this.lastname,
                })
            }
        },
    }

</script>

<style>


    body {
        background: url("../public/image/bg.png") no-repeat;
        background-attachment: fixed;
    }


    .container > h1 {
        padding: 1em 0 1em 0;
        background-color: rgba(255, 255, 255, .8);
    }

    label {
        text-align: left;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        /* identical to box height */

        display: flex;
        align-items: center;

        /* Дополнительный */

        color: #888888;
    }

    label > span {
        color: red;
    }

    input, select {
        width: 324px;
        height: 64px;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        /* identical to box height */
        top: calc(50% - 24px / 2);
        padding-left: 1.5em;
        display: flex;
        align-items: center;

        /* Черный */

        color: #333333;
        border: 1px solid #C1C1C1;
        box-sizing: border-box;
        border-radius: 4px;
    }

    input, label {
        display: block;
    }

    .container > input {
        text-align: left;
        display: inline-block;
    }

    button {
    //padding: 0px 132px; background-color: #0056D8; border: none; border-radius: 0px 50px 0px 50px; width: 324px; height: 64px;
        content: '';
        display: inline-block;
        vertical-align: top;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: aliceblue;
    }

    button:hover {
        background-color: #003585;

    }

    button:active {
        margin-top: .25em;
        background-color: #C1C1C1;
        width: 292px;
        height: 56px;
    }

    #app {
        background: rgba(0, 0, 0, 0.9);
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        position: relative;
        margin: 0 auto;
        width: 324px;
        padding: 5% 5%;
    }

</style>
