<template>
    <div>
        <button @click="$router.push('/')">首页</button>
        <h1>Cache-Control:no-cache</h1>
        <h1>ETage</h1>
        <img class="test-pic" src="http://localhost:3000/img/9.jpg" />
    </div>
</template>

<script>
    export default {
        name:'view9'
    }
</script>