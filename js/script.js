var app = new Vue({
  el: '#container',
  data: {
    contacts:[
      {
      name: 'Michele',
      avatar: '_1',
      message: 'ok'
      },
      {
      name: 'Fabio',
      avatar: '_2',
      message: 'ok'
      },
      {
        name: 'Samuele',
        avatar: '_3',
        message: 'ok'
      },
      {
        name: 'Luciano',
        avatar: '_4',
        message: 'ok'
      },
      {
        name: 'Marco',
        avatar: '_5',
        message: 'ok'
      },
      {
        name: 'Anna',
        avatar: '_6',
        message: 'ok'
      },
      {
        name: 'Sandro',
        avatar: '_7',
        message: 'ok'
      },
      {
        name: 'Mario',
        avatar: '_8',
        message: 'ok'
      }
    ],
    searched: '',
    chat: '',
    sent: [],
    riceved: [],
    stato: 'Online'
  },
  methods: {
    sentMessage(array) {
      this.sent.push(array);
      this.stato = 'Sta scrivendo...';
      setTimeout(()=> {
        this.riceved.push('Ok');
        this.stato = 'Online';
        console.log(this.riceved);
      }, 3000);
    }
  }
})
