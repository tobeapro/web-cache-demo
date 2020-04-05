<template>
    <div>
        <button @click="$router.push('/')">首页</button>
        <h1>Expires</h1>
        <h1>Cache-control:max-age=0</h1>
        <img class="test-pic" src="http://localhost:3000/img/2.jpg" />
    </div>
</template>

<script>
    export default {
        name:'view2'
    }
</script>
