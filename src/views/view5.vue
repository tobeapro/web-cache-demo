<template>
    <div>
        <button @click="$router.push('/')">首页</button>
        <h1>Cache-Control:private</h1>
        <img class="test-pic" src="http://localhost:3000/img/5.jpg" />
    </div>
</template>

<script>
    export default {
        name:'view5'
    }
</script>