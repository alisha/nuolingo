if (Meteor.isClient) {
  // counter starts at 0

  Template.body.helpers({
    decks: [
      { id: "1", prompt: "Do you tip?", answer: "No, because of reasons that I do not know" },
      { id: "2", prompt: "Is Teresa really tired", answer: "Yes" },
      { id: "3", prompt: "Does she want to take a nap?", answer: "Badly" }
    ]
  })

  Template.body.events({
      click: function(){

        $('#'+ this.id + '.card').toggleClass('flipped');
      }
    })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
