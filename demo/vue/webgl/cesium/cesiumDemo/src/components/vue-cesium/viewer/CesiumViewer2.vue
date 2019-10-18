<template>
    <section class="main_cont f-pr">
        <div class="content">
            <cesium-viewer :animation="animation" :camera="camera" @ready="ready"></cesium-viewer>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'cesium_viewer2',

        data() {
            return {
                camera: {
                    position: {
                    longitude: 104.06,
                    latitude: 30.67,
                    height: 2000
                    },
                    heading: 360,
                    pitch: -90,
                    roll: 0
                },
                animation: false
            }
        },
        methods: {
            ready (cesiumInstance) {
                const { Cesium, viewer } = cesiumInstance
                // 在这儿获取Cesium和viewer实例，再执行相关逻辑代码
                this.camera.position.longitude = 116.46
                this.camera.position.latitude = 39.92
                this.camera.position.height = 500
                this.animation = true
            }
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