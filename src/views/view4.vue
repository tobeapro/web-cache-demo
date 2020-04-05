<template>
    <div>
        <button @click="$router.push('/')">首页</button>
        <h1>Cache-Control:s-maxage=10</h1>
        <img class="test-pic" src="http://localhost:3000/img/4.jpg" />
    </div>
</template>

<script>
    export default {
        name:'view4'
    }
</script>