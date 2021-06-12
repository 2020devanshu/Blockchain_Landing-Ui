<template>
  <div class="error-page">
      <v-container class="my-5">
          <v-card class="d-flex align-center justify-center flex-column pa-5" elevation="0">
              <img src="../assets/svg/error.svg" alt="" class="class my-5">
              <p class="text-h4 font-weight-bold grey--text text--darken-3">Not Found</p>
          </v-card>
      </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.error-page{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.class{
    width: 300px;
}

</style>