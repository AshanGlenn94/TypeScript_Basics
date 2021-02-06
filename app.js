var userInput;
var userName;
userInput = 5;
userInput = "Ashan";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured", 500);
