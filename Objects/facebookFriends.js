/*
 * Programming Quiz: Facebook Friends
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// your code goes here
const facebookProfile = {
  name : "Udacian",
  friends : 25,
  messages : ["Message1", "Message2"],
  postMessage : function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage : function (index) {
    facebookProfile.messages.slice(index, 1);
  },
  addFriend : function () {
    facebookProfile.friends += 1;
  },
  removeFriend : function() {
     facebookProfile.friends -= 1;
  }
};
  
// text code
console.log("Name: ", facebookProfile.name);
console.log("Messages: ", facebookProfile.messages);
facebookProfile.postMessage("New message!");
console.log("Messages: ",  facebookProfile.messages);
facebookProfile.deleteMessage(2);
console.log("Messages: ",  facebookProfile.messages);
console.log("Friends: ", facebookProfile.friends);
facebookProfile.addFriend();
console.log("Friends: ", facebookProfile.friends);
facebookProfile.removeFriend();
console.log("Friends: ", facebookProfile.friends);