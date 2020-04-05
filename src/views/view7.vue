<template>
    <div>
        <button @click="$router.push('/')">首页</button>
        <h1>Cache-Control:no-store</h1>
        <img class="test-pic" src="http://localhost:3000/img/7.jpg" />
    </div>
</template>

<script>
    export default {
        name:'view7'
    }
</script>