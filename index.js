$(document).ready(function () {
  var db = new Dexie('todo_database');
  db.version(1).stores({ todos: '++id' });

  $('#form').submit(function (e) {
    e.preventDefault()
    db.table('todos')
      .add({
        title: 'Hello',
        createdAt: (new Date()).getTime()
      })
      .then((id) => {
        console.log(id)
      });
})

  $('#form2').submit(function (e) {
    e.preventDefault()
    db.table('todos').toArray().then(function (data) {
      $('#number-of-items').text(data.length)
    })
  })
})