<template>
    <section class="main_cont">
        报警管理
        <Alarm></Alarm>
    </section>
</template>

<script>
    import Alarm from '../../components/tools/Alarm'

    export default {
        name: "alarm_manager",

        components: {
            Alarm
        },

        methods: {
            
        },

        created: function(){

        }, 
    }
</script>

<style scoped lang="less">
</style>