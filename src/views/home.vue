<template>
    <div class="home">
        <img alt="Vue logo" src="@/assets/logo.png">
        <h1>web-cache-demo</h1>
        <div class="handle-wrap">
            <button v-for="item in 9" :key="item" @click="$router.push(`/view${item}`)">demo{{item}}</button>
            <!-- <button @click="$router.push('/view2')">demo2</button>
            <button @click="$router.push('/view3')">demo3</button>
            <button @click="$router.push('/view4')">demo4</button>
            <button @click="$router.push('/view5')">demo5</button>
            <button @click="$router.push('/view6')">demo6</button>
            <button @click="$router.push('/view7')">demo7</button>
            <button @click="$router.push('/view8')">demo8</button>
            <button @click="$router.push('/view9')">demo9</button> -->
        </div>
    </div>
</template>

<script>
    export default {
        name:'home'
    }
</script>

<style scoped>
.handle-wrap{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.handle-wrap button{
    margin:4px 10px;
}
</style>