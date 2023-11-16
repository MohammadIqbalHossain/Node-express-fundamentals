const EventEmmiter = require('events');

//Make an instance for EventEmiiter class.
const myEmiiter = new EventEmmiter();


//Add listener to or substribing to event.
myEmiiter.on('birthday', (data) => {
    console.log(`Happy birthday to you ${data.name}`)
});

//Second listener. When you call it once with birthday emmiter name both will listen.
myEmiiter.on('birthday', (data) => {
    console.log(`I will send you a ${data.message}`)
})

const birthdayBoy = {
    name: 'Daneryes',
    message: 'Drogon Dragon'
}

myEmiiter.emit('birthday', birthdayBoy);