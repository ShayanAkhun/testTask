//Main UI class
class search {
    constructor() {

    }
    //Search function
    searchUsers() {
        let text = document.getElementById("names").value;
        let table = document.querySelectorAll(".table-list");


        text = text.toLowerCase();


        table.forEach((item) => {
            let items = item.firstElementChild.textContent.toLowerCase();
            let secondChild = item.firstElementChild.nextElementSibling.textContent.toLowerCase();
            let thrdChild = item.firstElementChild.nextElementSibling.nextElementSibling.textContent.toLowerCase();

            if (items.indexOf(text) != -1 || secondChild.indexOf(text)!= -1  || thrdChild.indexOf(text)!= -1 ) {
                item.classList.add("show");
                this.showData = true;
            } else {
                item.classList.add("hide");
            }
        })
    }
}

class UI extends search {
    constructor() {
        super();
        this.tbody = document.getElementById("tbody");
        this.showData = false;

    }

    DisplayData(data) {

        data.filter(item => {
            let tr = document.createElement('tr');
            tr.className = "table-list";

            tr.innerHTML += `
            <td class="  px-4  py-2">${item.name}</td>
            <td class="  px-4 py-2">${item.username}</td>
            <td class="  px-4  py-2">${item.website}</td>
            <br/>
            `
            this.tbody.append(tr);
        });


    }


}