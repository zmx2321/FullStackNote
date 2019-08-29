<template>
    <div>
        <Building></Building>
        <CarFlow></CarFlow>
        <GreenFlow></GreenFlow>
        <PersonFlow></PersonFlow>
    </div>
</template>
<script>
    import Building from '../chart/Building'
    import CarFlow from '../chart/CarFlow'
    import GreenFlow from '../chart/GreenFlow'
    import PersonFlow from '../chart/PersonFlow'
      export default {
        name: "Statistical",

        components: {
            Building,
            CarFlow,
            GreenFlow,
            PersonFlow,
        },
        created: function(){
            // console.log(this.md5("admin"));
        },
    }
</script>
<style scoped>
</style>
