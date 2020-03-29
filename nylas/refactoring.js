/*
Below, we've written code for a simple chat program (Similar to Slack or
IRC). Recently, our users have been asking for more features, and we've
started expanding the code. It's getting out of hand!

Please refactor this code to make it "better" and support our feature
requests. What "better" means is up to you. To get us started, here are some
initial features people have wanted:

1.Multiple channels: Users want separate channels (aka separate chat rooms)
  to talk on. Right now everyone talks in the same place.

2.More bots: Everyone wants to add their own bot. We need to be able
  to write more bots in a scalable way, and ideally turn them on and off
  on each channel.

Meta note: Feel free to lookup whatever you need and change whatever you
feel appropriate to change. Modern Javascript syntax is supported.
 */
var TestRunner, _, aways, messages, points, receive, channels;

_ = require('underscore');

channels = {"food": [], "cats": [], "dogs": []};
messages = [];
aways = {"food": [], "cats": [], "dogs": []};
points = {"food": {}, "cats": {}, "dogs": {}};

// test class
// test - inializer
// classes inherit from test channels, aways, points
// new channel ("cats")
// add message to channel method

receive = function(sender, message, channel) {
  var away, command, i, len, match, person;
    for(let c in channels) {
      if (c === channel) {
          channels[channel].push(sender + ": " + message);
      }
    }
  // messages.push(sender + ": " + message);
  for (i = 0, len = aways.length; i < len; i++) {
    away = aways[channel][i];
    channels[channel].push(away.sender + " (Autoreply): " + away.message);
  }
  match = /\/(\w)+/i.exec(message);
  if (match) {
    command = match[0];
    if (command === '/hangout') {
      channels[channel].push("Bot: Starting Hangout...");
    }
    if (command === '/givepoint') {
      person = message.slice(11);
      if (!points[channel][person]) {
        // points[channel] = person;
        points[channel][person] = 0
      }
      points[channel][person] += 1;
      if (points[channel][person] > 1) {
        channels[channel].push("Bot: " + person + " now has " + points[channel][person] + " points.");
      } else {
        channels[channel].push("Bot: " + person + " now has " + points[channel][person] + " point.");
      }
    }
    if (command === '/setaway') {
      channels[channel].push("Bot: Thanks, your away message has been saved.");
      return aways[channel].push({
        sender: sender,
        message: message.slice(9)
      });
    }
  }
};

TestRunner = (function() {
  function TestRunner() {}

  TestRunner.prototype.run = function() {
    var expectedOutput;

    receive("Alicia", "What's the status of #edgehill?", "food");
    receive("Hannah", "Not sure, we should ask Jordan.", "food");
    receive("Alicia", "Ahh ok - thanks.", "food");
    receive("Alicia", "/givepoint Hannah", "food");
    receive("Alicia", "/givepoint Hannah", "food");
    receive("Alicia", "/hangout Jordan", "food");
    receive("Hannah", "/setaway Be back in a bit", "food");
    receive("Alicia", "Lunch?", "food");
    expectedOutput = ["Alicia: What's the status of #edgehill?", "Hannah: Not sure, we should ask Jordan.", "Alicia: Ahh ok - thanks.", "Alicia: /givepoint Hannah", "Bot: Hannah now has 1 point.", "Alicia: /givepoint Hannah", "Bot: Hannah now has 2 points.", "Alicia: /hangout Jordan", "Bot: Starting Hangout...", "Hannah: /setaway Be back in a bit", "Bot: Thanks, your away message has been saved.", "Alicia: Lunch?", "Hannah (Autoreply): Be back in a bit"];
    console.log(channels["food"]);
    console.log('-------------------------------');
    if (_.isEqual(channels["food"], expectedOutput)) {
      console.log("Tests Pass");
    } else {
      console.log("Tests Failed");
    }

    receive("Alicia", "yo", "cats");
    receive("Hannah", "hi", "cats");
    expectedOutput = ["Alicia: yo", "Hannah: hi"];
    console.log(channels["cats"]);
    console.log('-------------------------------');
    if (_.isEqual(channels["cats"], expectedOutput)) {
      console.log("Tests Pass");
    } else {
      console.log("Tests Failed");
    }
  };

  return TestRunner;

})();

(new TestRunner).run();
