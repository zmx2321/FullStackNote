<template>
    <section class="main_cont f-pr">
        <div class="content">
            <cesium-viewer class="viewer" :animation="animation" :timeline="timeline" :camera="camera" @ready="ready">
                <imagery-layer>
                    <openstreetmap-imagery-provider></openstreetmap-imagery-provider>
                </imagery-layer>
            </cesium-viewer>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'cesium_viewer3',

        data() {
            return {
                animation: true,
                timeline: true,
                camera: {
                    position: {
                    longitude: 104.06,
                    latitude: 30.67,
                    height: 100000
                    },
                    heading: 360,
                    pitch: -90,
                    roll: 0
                }
            }
        },
        methods: {
            ready (cesiumInstance) {
                const { Cesium, viewer } = cesiumInstance
                viewer.entities.add({
                    id: '成都欢迎你',
                    position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
                    billboard: new Cesium.BillboardGraphics({
                    image: 'https://zouyaoji.top/vue-cesium/favicon.png',
                    scale: 0.1
                    }),
                    label: new Cesium.LabelGraphics ({
                    text: 'Hello Word',
                    fillColor: Cesium.Color.GOLD,
                    font: '24px sans-serif',
                    horizontalOrigin: 1,
                    outlineColor: new Cesium.Color(0, 0, 0, 1),
                    outlineWidth: 2,
                    pixelOffset: new Cesium.Cartesian2(17, -5),
                    style: Cesium.LabelStyle.FILL
                    })
                })
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