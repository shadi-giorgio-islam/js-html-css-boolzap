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
      riceved: []
      },
      {
      name: 'Fabio',
      avatar: '_2',
      message: 'ok',
      sent: [],
      chat: '',
      riceved: []
      },
      {
        name: 'Samuele',
        avatar: '_3',
        message: 'ok',
        sent: [],
        chat: '',
        riceved: []
      },
      {
        name: 'Luciano',
        avatar: '_4',
        message: 'ok',
        sent: [],
        chat: '',
        riceved: []
      },
      {
        name: 'Marco',
        avatar: '_5',
        message: 'ok',
        sent: [],
        chat: '',
        riceved: []
      },
      {
        name: 'Anna',
        avatar: '_6',
        message: 'ok',
        sent: [],
        chat: '',
        riceved: []
      },
      {
        name: 'Sandro',
        avatar: '_7',
        message: 'ok',
        sent: [],
        chat: '',
        riceved: []
      },
      {
        name: 'Mario',
        avatar: '_8',
        message: 'ok',
        sent: [],
        chat: '',
        riceved: []
      }
    ],
    searched: '',
    stato: 'Online',
    indice: 0
  },
  methods: {
    sentMessage(array) {
      this.contacts[this.indice].sent.push(array);
      this.stato = 'Sta scrivendo...';
      this.contacts[this.indice].riceved.push('...');
      setTimeout(()=> {
        this.contacts[this.indice].riceved[this.contacts[this.indice].riceved.length - 1]= 'Ok';
        this.stato = 'Online';
        console.log(this.riceved);
      }, 3000);
    },
    clicked(index){
      this.indice = index;
    }
  }
})
