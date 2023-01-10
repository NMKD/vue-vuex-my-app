<template>
    <div>
        <button class="btn btn-success m-3" @click="counterUpdate(1)">Add</button>
        <button class="btn btn-danger m-3" @click="counterUpdate(-1)">Sub</button>
    </div>
</template>

<script>
export default {
    name: 'v-buttons',
    methods: {
        counterUpdate(val) {
            // this.$store.commit('changeCounter', val)
            this.$store.dispatch('asyncChange', {
                value: val,
                timeoutDelay: 500
            })
        }
    }
}
</script>