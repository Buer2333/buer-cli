<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <img src="../assets/buer.jpg" alt="">
    </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
    },
};
</script>
<style lang="scss">
    h1 {
        display: flex;
        color: red;
        border: 1px solid black;
    }
</style>
