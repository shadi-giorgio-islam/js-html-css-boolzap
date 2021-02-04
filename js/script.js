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
      displaySent: 'no',
      displayRiceved: 'no'
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
      displaySent: 'no',
      displayRiceved: 'no'
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
        displaySent: 'no',
        displayRiceved: 'no'
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
        displaySent: 'no',
        displayRiceved: 'no'
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
        displaySent: 'no',
        displayRiceved: 'no'
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
        displaySent: 'no',
        displayRiceved: 'no'
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
        displaySent: 'no',
        displayRiceved: 'no'
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
        displaySent: 'no',
        displayRiceved: 'no'
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
    showBoxsent(){
      if (this.contacts[this.indice].displaySent == 'active') {
        this.contacts[this.indice].displaySent = 'no';
      }
      else {
        this.contacts[this.indice].displaySent = 'active';
      }
    },
    showBoxriceved(){
      if (this.contacts[this.indice].displayRiceved == 'active') {
        this.contacts[this.indice].displayRiceved = 'no';
      }
      else {
        this.contacts[this.indice].displayRiceved = 'active';
      }
    }
  }
})
