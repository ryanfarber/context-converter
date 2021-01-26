


let ContextBuilder = require("./src")




let data = {
  message_id: 1968,
  from: {
    id: 943449668,
    is_bot: false,
    first_name: 'Ryan',
    last_name: 'Farber',
    username: 'ryanfarber',
    language_code: 'en'
  },
  chat: {
    id: 943449668,
    first_name: 'Ryan',
    last_name: 'Farber',
    username: 'ryanfarber',
    type: 'private'
  },
  date: 1611436763,
  text: 'hi @ryanfarber'
}


let telegram = new ContextBuilder.TelegramContext(data, "ryanfarber")

console.log(telegram)