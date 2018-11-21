<template>
  <div class="image-item">
    <figure v-lazyload class="image-container">
      <div class="ripple image__spinner">
        <div class="ripple__circle"></div>
        <div class="ripple__circle ripple__inner-circle"></div>
      </div>
      <img class="image__item" :data-url="source" alt="random image">
    </figure>
  </div>
</template>

<script>
  export default {
    name: 'image-item',
    props: {
      source: {
        type: String,
        required: true
      }
    },
    data() {
      return {

      }
    }
  }

</script>

<style lang="scss">
  .image-container {
    display:flex;
    justify-content: center;
    align-items: center;
    height: 400px;
  }

  .image-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  .loaded {
    .image {
      &__item {
        display:flex;
        visibility: visible;
        opacity: 1;
        border: 0;
        width: 100%;
        object-fit: cover;
      }

      &__spinner {
        display: none;
        width: 100%;
      }
    }
  }
  .image {
      &__item {
        display:none;
      }
    }
  .ripple {
    display: inline-block;
    position: absolute;
    width: 64px;
    height: 64px;

    &__circle {
      position: absolute;
      border: 4px solid rgb(96, 208, 112);
      opacity: 1;
      border-radius: 50%;
      animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    &__inner-circle {
      animation-delay: -0.5s;
    }
  }

  @keyframes ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }

    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }

</style>
