$(document).ready(() => {
    window.Websocket = window.Websocket || window.MozWebSocket;

    let locate = $(location).attr('href');
    path = locate.split("/")[2].split(":")[0];
    var connection = new WebSocket(`ws://${path}:8080`);

    let connected = false;
    let name = "";

    $("#enviar").click(() => {
        const message = $("#message").val();
        if (connected && message != "") {
            if (name == "") {
                connection.send(JSON.stringify({ name: message }));
                name = message;
            } else {
                connection.send(JSON.stringify({ message }));
            }
        }
        $("#message").val("");
    });

    connection.onopen = () => {
        console.log('connectado ao servidor!');
        connected = true;
    };


    connection.onmessage = (message) => {
        console.log(message.data);
        $("#chat").append(message.data);
        $("#chat").append("<br>");
    };
})