(function(){Sets = new Mongo.Collection("sets");
Flashcards = new Mongo.Collection("flashcards");
Quizzes = new Mongo.Collection("quizzes");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    sets: function () {
      return Sets.find({});
    }
    
  });

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.hello.helpers({
    sets: function() {
      return Sets.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

})();
