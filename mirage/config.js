export default function() {
//this.namespace='/api/v2';
 //v2
  this.get('/api/v2/conversations/:title', function(db, request) {
    let title = request.params.title;

    return {
      data: {
        type: 'conversations',
        id: title,
        attributes: db.conversations.where({title:title})
      }
    };
  });

  this.get('/api/v2/conversations', function(db,request) {
    console.log(db);
    return {
      conversations : db.conversations
    };
  });


//v1

this.get('/api/v1/conversations/:title', function(request) {
  return {
    conversation: {id: 1, title:'Dummy Title', creator: 'Some Creator',msgs: [
      {
        text: 'Hi.. Something ',
        author : 'ABCDE',
        timestamp : '2016-09-29 12:15:56'
      },
      {
        text: 'Bla Bla Bla',
        author : 'XYZ',
        timestamp : '2016-09-29 12:15:56'
      },
      {
        text: 'Something ... bla ... more ...',
        author : 'MNP',
        timestamp : '2016-09-29 12:15:56'
      }

    ]}
  };
});

this.get('/api/v1/conversations', function(request) {
  if (request.queryParams)
  var attr = request.queryParams.title;
  var conversations= [
      {id: 0, title: 'EmberNJ', creater: 'ABC',msgs: []},
      {id: 1, title: 'EmberTeam', creater: 'ABC',msgs: []},
      {id: 2, title: 'BITS Pilani Alums', creater: 'Raghav AV',msgs: []},
      {id: 3, title: 'NodeJS Ninjas', creater: 'Sudhir',msgs: []},
      {id: 4, title: 'CSS Chicks', creater: 'Twinkle',msgs: []}
  ];
  console.log(attr);
  if (!attr) {
    return {conversations};
  }
  else {
    conversations[0];
  }
});

/*
this.get('/api/v1/conversations', function() {
  return {
    conversations: [
        {id: 0, title: 'EmberNJ', creater: 'ABC',msgs: []},
        {id: 1, title: 'EmberTeam', creater: 'ABC',msgs: []},
        {id: 2, title: 'BITS Pilani Alums', creater: 'Raghav AV',msgs: []},
        {id: 3, title: 'NodeJS Ninjas', creater: 'Sudhir',msgs: []},
        {id: 4, title: 'CSS Chicks', creater: 'Twinkle',msgs: []}
    ]
  };
});
*/
}
