<template>
    <div>
        <button @click="$router.push('/')">首页</button>
        <h1>Expires</h1>
        <h1>Cache-Control:private</h1>
        <img class="test-pic" src="http://localhost:3000/img/6.jpg" />
    </div>
</template>

<script>
    export default {
        name:'view6'
    }
</script>