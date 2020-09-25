import EventModel from "../models/EventModel.js";

class SearchController {
    constructor(){
        this.url = "views/search.html"
    }

    search(event){
        event.preventDefault();
        const q = document.querySelector("#q").value;
        const dateStart = document.querySelector("#dateStart").value;
        const sortBy = document.querySelector("#sortBy").value
        const eventModel = new EventModel();
        const eventsPromise = eventModel.getEventsFromAPI(q, dateStart, sortBy)
        eventsPromise.then((events) => {
            const listDOM = document.querySelector(".event-list");
            listDOM.innerHTML = "";
            for (const e of events) {
              listDOM.innerHTML += `
                <div class="col">
                  <h6 class="event-title">${e.title}</h6>
                  <img class="event-image" src="${e.cover_url}" alt="${e.title}">
                </div>`;
            }
     
        })
    }

    executeHttpRequest(){
        document.querySelector("#formSearch")
        .addEventListener("submit", this.search)
    }
}

export default SearchController;