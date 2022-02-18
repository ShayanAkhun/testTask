//Instansitating 
const http = new EasyHTTP();
const ui = new UI;


http.getData("https://jsonplaceholder.typicode.com/users")
    .then(data => {
        ui.DisplayData(data);

        //keyboard events
        document.getElementById("names").addEventListener("keyup", function (e) {
            if (e.target.value !== '') {
                ui.searchUsers();
                e.preventDefault();
            } else {
                window.location.reload();
                ui.DisplayData(data);
                alert("The field is empty!!!")
            }
            e.preventDefault();
        })
    })
    .catch(err => {
        console.log(err)
    })