<template>
    <div>
        <button @click="$router.push('/')">首页</button>
        <h1>Cache-Control:max-age=10</h1>
        <img class="test-pic" src="http://localhost:3000/img/3.jpg" />
    </div>
</template>

<script>
    export default {
        name:'view3'
    }
</script>
