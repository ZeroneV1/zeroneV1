const socket = new WebSocket("wss://fluxagar.onrender.com/"); // Replace with your Render URL

socket.onopen = () => {
    console.log("Connected to the WebSocket server!");
};

socket.onerror = (error) => {
    console.error("WebSocket Error:", error);
};

socket.onmessage = (message) => {
    console.log("Received:", message.data);
};
