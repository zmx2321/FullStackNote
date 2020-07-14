<template>
  <div>
    <div class="header">
      <h3>前端开发自学还是报培训班学？【{{0}}】</h3>
    </div>
    <vote-main></vote-main>
    <vote-footer></vote-footer>
  </div>
</template>

<script>
import VoteMain from "./VoteMain.vue";
import VoteFooter from "./VoteFooter.vue";

export default {
  components: {
    VoteMain,
    VoteFooter
  }
};
</script>