<template>
  <div class="fizz-loader">
      <img src="../assets/logo-fizz.png" class="loader-image" />
      <p>Please Wait..</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.fizz-loader{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 95vh;
}

.loader-image{
    width: 100px;
    animation: loader 2s infinite linear;
}

@keyframes loader {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
    
}
</style>