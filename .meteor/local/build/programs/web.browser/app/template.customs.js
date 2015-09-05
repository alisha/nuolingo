(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw("<header><h1>Choose a set</h1></header>\n  "), HTML.UL("\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("sets"));
  }, function() {
    return [ "\n      ", Spacebars.include(view.lookupTemplate("set")), "\n    " ];
  }), "\n  ") ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("set");
Template["set"] = new Template("Template.set", (function() {
  var view = this;
  return HTML.LI(HTML.A({
    href: "#"
  }, Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  }), " (", Blaze.View("lookup:country", function() {
    return Spacebars.mustache(view.lookup("country"));
  }), ")"));
}));

})();
