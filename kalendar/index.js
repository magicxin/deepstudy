import JCKalendar from './src/kalendar';

JCKalendar.install = function(Vue) {
    Vue.component(JCKalendar.name, JCTreelist);
};

export default JCKalendar;