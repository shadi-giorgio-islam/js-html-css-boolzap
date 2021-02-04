var app = new Vue({
  el: '#container',
  data: {
    contacts:[
      {
      name: 'Michele',
      avatar: '_1',
      message: 'ok',
      sent: [],
      chat: '',
      riceved: [],
      stato: 'Online',
      dateSent: [],
      dateRiceved: [],
      displaySent: [],
      displayRiceved: []
      },
      {
      name: 'Fabio',
      avatar: '_2',
      message: 'ok',
      sent: [],
      chat: '',
      riceved: [],
      stato: 'Online',
      dateSent: [],
      dateRiceved: [],
      displaySent: [],
      displayRiceved: []
      },
      {
        name: 'Samuele',
        avatar: '_3',
        message: 'ok',
        sent: [],
        chat: '',
        riceved: [],
        stato: 'Online',
        dateSent: [],
        dateRiceved: [],
        displaySent: [],
        displayRiceved: []
      },
      {
        name: 'Luciano',
        avatar: '_4',
        message: 'ok',
        sent: [],
        chat: '',
        riceved: [],
        stato: 'Online',
        dateSent: [],
        dateRiceved: [],
        displaySent: [],
        displayRiceved: []
      },
      {
        name: 'Marco',
        avatar: '_5',
        message: 'ok',
        sent: [],
        chat: '',
        riceved: [],
        stato: 'Online',
        dateSent: [],
        dateRiceved: [],
        displaySent: [],
        displayRiceved: []
      },
      {
        name: 'Anna',
        avatar: '_6',
        message: 'ok',
        sent: [],
        chat: '',
        riceved: [],
        stato: 'Online',
        dateSent: [],
        dateRiceved: [],
        displaySent: [],
        displayRiceved: []
      },
      {
        name: 'Sandro',
        avatar: '_7',
        message: 'ok',
        sent: [],
        chat: '',
        riceved: [],
        stato: 'Online',
        dateSent: [],
        dateRiceved: [],
        displaySent: [],
        displayRiceved: []
      },
      {
        name: 'Mario',
        avatar: '_8',
        message: 'ok',
        sent: [],
        chat: '',
        riceved: [],
        stato: 'Online',
        dateSent: [],
        dateRiceved: [],
        displaySent: [],
        displayRiceved: []
      }
    ],
    searched: '',
    indice: 0
  },
  methods: {
    sentMessage(array) {
      let d = new Date();
      this.contacts[this.indice].sent.push(array);
      this.contacts[this.indice].stato = 'Sta scrivendo...';
      this.contacts[this.indice].riceved.push('...');
      this.contacts[this.indice].dateSent.push(d.getHours()+':'+d.getMinutes());
      setTimeout(()=> {
        this.contacts[this.indice].riceved[this.contacts[this.indice].riceved.length - 1]= 'Ok';
        this.contacts[this.indice].stato = 'Online';
        this.contacts[this.indice].dateRiceved.push(d.getHours()+':'+d.getMinutes());
      }, 3000);
    },
    clicked(index){
      this.indice = index;
    },
    showBoxsent(index){
      if (this.contacts[this.indice].displaySent[index] == 'active') {
        this.contacts[this.indice].displaySent.splice(index, 1, 'no');
      }
      else {
        this.contacts[this.indice].displaySent.splice(index, 1, 'active');
      }
    },
    showBoxriceved(index){
      if (this.contacts[this.indice].displayRiceved[index] == 'active') {
        this.contacts[this.indice].displayRiceved.splice(index, 1, 'no');
      }
      else {
        this.contacts[this.indice].displayRiceved.splice(index, 1, 'active');
      }
    },
    deleteMessagesent(index){
      this.contacts[this.indice].sent.splice(index, 1);
    },
    deleteMessagericeved(index){
      this.contacts[this.indice].riceved.splice(index, 1);
    }
  }
})
