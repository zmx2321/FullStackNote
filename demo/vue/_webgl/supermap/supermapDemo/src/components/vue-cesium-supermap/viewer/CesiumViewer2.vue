<template>
    <section class="main_cont f-pr">
        <div class="content">
            <sm-viewer :animation="animation" :camera="camera" @ready="ready"></sm-viewer>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'cesium_viewer1',

        data() {
            return {
                camera: {
                    position: {
                    longitude: 121.50109,
                    latitude: 31.23691,
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
            ready (param) {
                this.camera.position.longitude = 121.50109
                this.camera.position.latitude = 31.23691
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