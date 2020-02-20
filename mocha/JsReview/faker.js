/* API - application programing interface. someone elses code we interact with
how to use API
What is faker API - on npm (install with node)* generates face information. lots of functions/information. info stored in objects. use object notation to get info
What is a profile card
CDN - content delivery network
*/

var randomName = faker.name.findName(); // Caitlyn Kerluke
var randomPic = faker.image.avatar();
var randomEmail = faker.internet.email(); // Rusty@arne.info
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

document.getElementById("image").src = randomPic;
document.getElementById("name").innerHTML = randomName;
document.getElementById("email").innerHTML = randomEmail;