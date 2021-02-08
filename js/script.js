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
      displaySent: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
      displayRiceved: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
      delete: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
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
      displaySent: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
      displayRiceved: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
      delete: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
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
        displaySent: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        displayRiceved: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        delete: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
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
        displaySent: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        displayRiceved: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        delete: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
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
        displaySent: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        displayRiceved: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        delete: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
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
        displaySent: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        displayRiceved: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        delete: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
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
        displaySent: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        displayRiceved: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        delete: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
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
        displaySent: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        displayRiceved: ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        delete: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
      }
    ],
    searched: '',
    indice: 0
  },
  methods: {
    sentMessage(array) {
      let d = new Date();
      let hours = d.getHours();
      // leading zero hours
      if (hours < 10){
        hours = '0' + hours;
      }
      let minutes = d.getMinutes();
      // leading zero minutes
      if (minutes < 10){
        minutes = '0' + minutes;
      }
      this.contacts[this.indice].sent.push(array);
      this.contacts[this.indice].chat = '';
      this.contacts[this.indice].stato = 'Sta scrivendo...';
      this.contacts[this.indice].dateSent.push(hours+':'+minutes);
      setTimeout(()=> {
        this.contacts[this.indice].riceved.push('ok');
        this.contacts[this.indice].delete.splice(this.contacts[this.indice].riceved.length - 1, 1, 'yes');
        this.contacts[this.indice].stato = 'Online';
        this.contacts[this.indice].dateRiceved.push(hours+':'+minutes);
      }, 3000);
    },
    // prendere l indice del contatto
    clicked(index){
      this.indice = index;
    },
    // show box sent
    showBoxsent(index){
      console.log(index);
      if (this.contacts[this.indice].displaySent[index] == 'active') {
        this.contacts[this.indice].displaySent.splice(index, 1, 'no');
      }
      else {
        this.contacts[this.indice].displaySent.splice(index, 1, 'active');
      }
    },
    // show box received
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
      this.contacts[this.indice].delete.splice(index, 1, 'none');
    }
  }
})
