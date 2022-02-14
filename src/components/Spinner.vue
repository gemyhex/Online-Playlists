<template>
  <div class="spin"></div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.spin {
  width: 50px;
  height: 50px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: red;
  animation: spin 1s ease infinite;
}
@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
