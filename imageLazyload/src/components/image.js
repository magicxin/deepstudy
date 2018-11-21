import Vue from 'vue'
import imageLazyload from './image-item'
import create from './spinners'
const Lazyload = {
  install(Vue, options) {
    let opts = {}
    Vue.component('lazy-load', Vue.extend(imageLazyload))
  }
}

Vue.directive('lazyload', {
  inserted: el => {
    let imageElement = null
    if (el.nodeName === "IMG") {
      imageElement = el
    } else {
      imageElement = Array.from(el.children).find(
        el => el.nodeName === "IMG"
      );
    }
   let ele = create('small_circle')
   imageElement.parentNode.insertBefore(ele,imageElement)
    function loadImage() {
      if (imageElement) {
        imageElement.dataset.url = imageElement.src
        imageElement.removeAttribute('src')
        imageElement.addEventListener("load", () => {
          setTimeout(() => el.classList.add("loaded"), 100);
        });
        imageElement.addEventListener("error", () => console.log("error"));
        imageElement.src = imageElement.dataset.url;
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: "0"
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      console.log(observer)
      observer.observe(el);
    }
    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadImage();
    }
  }
})

export default Lazyload
