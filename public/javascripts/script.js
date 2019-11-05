var app = new Vue({
  el: '#app',
  data: {
    deckId: "",
    cards: [],
    hand_1: [],
    discard: [],
  },
  created() {
   
  },
  methods: {
    async fetchDeck() {
      try {
        let response = await axios.get(url);
        
      }
      catch(error)
      {
        console.log(error);
      }
    },
  },
});
