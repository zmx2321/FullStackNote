<template>
    <section class="main_cont f-pr">
        <div class="content">
            <cesium-viewer></cesium-viewer>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'cesium_viewer1',

        data() {
            return {
                
            }
        },
        methods: {
        },
        // 预处理
        created () {
        }
    }
</script>

<style lang="less" scoped>
.main_cont {
    margin: 30px;
}

.content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 80vh;
    background-color: #f9f9f9;
}
</style>