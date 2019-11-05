function toTitleCase(str) {
  return str.replace(
    /([^\W_]+[^\s-]*) */g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}


var app = new Vue({
  el: '#app',
  data: {
    cities: [],
    prefix: '',
    loading: true,
  },
  created() {
   
  },
  methods: {
    fetchDND() {
    },
  },
});
