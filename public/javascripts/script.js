
var app = new Vue({
  el: '#app',
  data: {
    deckId: "",
    cards: "",
    hand_1: [],// [],
    hand_2: [],
    p1: false,
    p2: false,
    num_drawn: 0,
    total: 0,
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
        this.total = response.data.remaining;
      }
      catch(error)
      {
        console.log(error);
      }
    },
    async cardGetDraw() {
      try {
        let response = await axios.get("/cards/draw?id=" + this.deckId);
        //this.hand_1.push("data", response.data);
        console.log("data", response.data);
        console.log("cards", response.data.cards[0]);
        
        this.hand_1.push(response.data.cards[0]);
        this.num_drawn = this.total - response.data.remaining;
        console.log("total", this.num_drawn);
        //console.log(this.hand_1[-1]['cards'][0].value);
        console.log(this.hand_1);
      }
      catch (error)
      {
        console.log(error);
      }
    },
    async cardGetDraw_hand2() {
      try {
        let response = await axios.get("/cards/draw?id=" + this.deckId);
        //this.hand_1.push("data", response.data);
        console.log("data", response.data);
        console.log("cards", response.data.cards[0]);
        
        this.hand_2.push(response.data.cards[0]);
        this.num_drawn = this.total - response.data.remaining;
        console.log("total", this.num_drawn);
        //console.log(this.hand_1[-1]['cards'][0].value);
        console.log(this.hand_2);
      }
      catch (error)
      {
        console.log(error);
      }
    }
  },
});
