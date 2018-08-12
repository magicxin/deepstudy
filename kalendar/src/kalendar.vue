<template>
  <div class="jc-kalendar">
      <div class="slider" ref="slider">
        <div v-for="item in ['pre','own','next']" :class="'kalender-view-'+item">
        <div class="toolbar">
          <div class="lay-left"></div>
          <div class="date">
            <i class="jcm-fanhui" @click="preMonth"></i>
            <div class="date-show" @click="datePicker"> {{ datepick | formartMonth }} </div>
            <i class="jcm-youjiantou3" @click="nextMonth"></i>
          </div>
          <div class="lay-right"  @click="select(new Date())">{{ adjust }}</div>
        </div>
        
        <div class="back-grey"></div>
        
        <div class="datetable">
          <div class="week-container">
            <div class="weekname" v-for="(item,index) in dateTimeFormat.getWeekDayArray(weekname)" :key="index">{{ item }}</div>
          </div>
          <div class="week" v-for="(week,index) in days" :key="index">
            <div class="day" v-for="(day,i) in week" :key="i" :class="{check:getDate(day) == getDate(datepick) }" @click="select(day)">
              <div></div>
              <div>{{ day | formartDay }}</div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <JCDatetimePicker ref="picker" type="date" v-model="pickerValue" :start-date="new Date(new Date().getFullYear() - 50, 0, 1)" @confirm="handleChange">
      </JCDatetimePicker>
  </div>
</template>

<script>
//import { getDaysInMonth, getFirstDayOfMonth, getMonthArray, getWeekArray, addDays, addMonths, addYears, cloneDate, cloneAsDate, isBeforeDate, isAfterDate, isBetweenDates, isEqualDate, monthDiff, yearDiff } from './dateUtils';
  import { dateTimeFormat, getWeekArray, addMonths } from './dateUtils'
  export default {
    name: "jc-kalendar",
    props: {
      weekname: {
        type: Number,
        default () {
          return 0
        }
      },
      initdate: {
        type: Date,
        default() {
          return new Date()
        }
      },
      adjust: {
        type: String,
        default () {
          return '今天'
        }
      },
//    point: {
//      type: Array,
//      default () {
//        return []
//      }
//    },
      animation: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    data() {
      return {
        dateTimeFormat: dateTimeFormat,
        datepick: '',
        days: '',
        pickerValue : ''
      }
    },
    created() {
      this.setDate(this.initdate);
    },
    
    filters: {
      formartMonth(value) {
        if(!value) {
          return ''
        }
        return new Date(value).getFullYear() + '年' + (~~new Date(value).getMonth() + 1) + '月';
      },
      formartDay(value) {
        if(!value) {
          return ''
        }
        return new Date(value).getDate();
      }
    },
    methods: {
      getDate(value) {
        if(!value) {
          return ''
        }
          return new Date(value).getDate();
      },
      setDate(d) {
        this.datepick = d;
        this.days = getWeekArray(this.datepick,this.weekname);
        this.pickerValue = d;
      },
      preMonth() {
        this.setDate(addMonths(this.datepick,-1));
        if(this.animation) {
          const el = this.$refs['slider'];
          el.style.left = '100vw';
          el.style.transition = "left .5s cubic-bezier(0.23, 1, 0.32, 1)";
          setTimeout(function(){
            el.style.left = 0;
            el.style.transition = "left 0s linear";
          },500)
        }
    },
    nextMonth() {
      this.setDate(addMonths(this.datepick,+1));
        if(this.animation) {
          const el = this.$refs['slider'];
          el.style.left = '-100vw';
          el.style.transition = "left .5s cubic-bezier(0.23, 1, 0.32, 1)";
          setTimeout(function(){
            el.style.left = 0;
            el.style.transition = "left 0s linear";
          },500)
        }
      },
      select(day) {
        this.setDate(day)
        this.$emit('select',day)
      },
      datePicker() {
        this.$refs['picker'].open();
      },
      handleChange(d) {
        this.setDate(d);
      }
    }
  };
</script>