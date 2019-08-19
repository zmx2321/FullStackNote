<template>
    <section class="main_cont f-pr">
        <div class="content">
              <div class="viewer" ref="myViewer">
                <div class="demo-tool">
                    <input type="checkbox" v-model="animation" />  
                    <span>动画部件</span>

                    <input type="checkbox" v-model="timeline" />  
                    <span>时间轴部件</span>

                    <input type="checkbox" v-model="baseLayerPicker" /> 
                    <span>基础图层拾取器</span>

                    <input type="checkbox" v-model="fullscreenButton" /> 
                    <span>全屏按钮</span>

                    <input type="checkbox" v-model="infoBox" /> 
                    <span>信息提示框</span>
                </div>
                <cesium-viewer :animation="animation" :baseLayerPicker="baseLayerPicker" :timeline="timeline"
                :fullscreenButton="fullscreenButton" :fullscreenElement="fullscreenElement" :infoBox="infoBox" @ready="ready">
                </cesium-viewer>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'cesium_viewer4',

        data() {
            return {
                animation: true,
                timeline: true,
                baseLayerPicker: false,
                fullscreenButton: true,
                infoBox: true,
                fullscreenElement: document.body
            }
        },
        methods: {
            ready (cesiumInstance) {
                const {Cesium, viewer} = cesiumInstance
                this.fullscreenElement = this.$refs.myViewer
                viewer.entities.add({
                    id: '成都欢迎你',
                    position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
                    billboard: new Cesium.BillboardGraphics({
                        image: 'https://zouyaoji.top/vue-cesium/favicon.png',
                        scale: 0.1
                    }),
                    label: new Cesium.LabelGraphics ({
                        text: 'Hello Word',
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