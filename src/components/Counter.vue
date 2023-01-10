<template>
    <div>
        <h1>Counter {{ count }}</h1>
    </div>
</template>

<script>

export default {
    name: 'v-counter',
    computed: {
        count() {
            return this.$store.getters.computedCounter
        }
    }
}
</script>