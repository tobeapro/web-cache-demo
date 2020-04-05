<template>
    <div>
        <button @click="$router.push('/')">首页</button>
        <h1>Cache-Control:no-cache</h1>
        <h1>Last-Modified</h1>
        <img class="test-pic" src="http://localhost:3000/img/8.jpg" />
    </div>
</template>

<script>
    export default {
        name:'view8'
    }
</script>