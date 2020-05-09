<template>
    <div>
        <Header />
        <input type="text" v-model="userId">
        <button @click="onLoadUser">Load user</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            userId: ''
        }    
    },
    methods: {
        onLoadUser() {
            this.$router.push('/users/' + this.userId)
        }
    }
}
</script>

