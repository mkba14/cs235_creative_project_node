
var app = new Vue({
  el: '#app',
  data: {
    deckId: "",
    cards: "",
    hand_1: [],
    hand_2: [],
    p1: false,
    p2: false,
  },
  created() {
    this.fetchDeck();
  },
  methods: {
    async fetchDeck() {
      try {
        let response = await axios.get("/cards/new");
        this.cards = response.data;
        console.log(this.cards);
        this.deckId = this.cards.deck_id;
      }
      catch(error)
      {
        console.log(error);
      }
    },
    async cardGetDraw() {
      try {
        let response = await axios.get("/cards/draw?id=" + this.deckId);
        this.hand_1.push(response.data);
        console.log(response);
        console.log(this.hand_1[0]['cards'][0].value);
      }
      catch (error)
      {
        console.log(error);
      }
    }
  },
});
