<template>
    <section class="home">
        <div class="container">
            <p class="lead">{{ this.$store.state.title }}</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "home",

        data () {
            return {

            }
        },
        created (){
            // console.log(aa);
        }
    };
</script>

<style scoped>
    .home {
      padding: 0;
      width: 100%;
      height: 100%;
      background: url(../../assets/images/showcase.png) top no-repeat;
      background-size: 100% 100%;
    }

    .container {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 100px;
        background-color: rgba(0, 0, 0, 0.7);
        text-align: center;
        color: white;
    }

    .lead {
        font-size: 22px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 50%;
    }
</style>