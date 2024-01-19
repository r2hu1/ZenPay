const { disconnect } = require("mongoose");
export const disconnectFromDb = async () => {
    try {
        await disconnect();
        console.log("disconnected from mongodb");
    } catch (err) {
        console.log(err);
    }
}