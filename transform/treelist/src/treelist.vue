<template>
    <div class="treelist">
      <div class="tree" ref="treelist">
        <div class="line" :style="lineStyle"></div>
        <div :class="{select:index == num}" class="item" :ref="'tab'+index" v-for="(item,index) in tree" :key="index" @click="onItemSelect(index)"> 
           {{ item }} 
        </div>
      </div>
      <div class="content">
        <div class="tutorials-group" v-for="(tutorials,i) in content[num]" :key="i">
          <div class="title">{{ tutorials.title }}</div>
          <div class="tutorials">
            <div class="tutorial" v-for="(tutorial,index) in tutorials.tutorials" :key="index" @click="$emit('navclick', {'parent':i,'child':index})">
              {{tutorial}}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  //组件名称
    name: "jc-treelist",
    //组件将不会把未被注册的props呈现为普通的HTML属性
    inheritAttrs: false,
    props: {
        tree: {
          type: Array,
          default: () => []
        },
        content: {
          type: Array,
          default: () => []
        },
        duration: {
          type: Number,
          default: 0.2
        }
    },
    data() {
      return {
        num: 0,
        lineStyle: {},
        currentOffsetTop: 0
      }
    },
    mounted() {
      this.setLine(0);
    },
    methods: {
      onItemSelect(index) {
        this.num = index;
        this.setLine(index);
      },
      setLine(index) {
        const tab = this.$refs['tab' + index][0];
        const height = tab.offsetHeight;
        const calOffsetTop = tab.offsetTop;
        this.lineStyle = {
          height: `${height}px`,
          transform: `translateY(${calOffsetTop}px)`,
          transitionDuration: `${this.duration}s`
        };
      }
    }
};
</script>
