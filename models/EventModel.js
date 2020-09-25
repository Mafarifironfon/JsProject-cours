class EventModel {
    getEventsFromAPI(q = "", dateStart = "", sortBy = "") {
      let url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=${q}&sort=${sortBy}`;
      if (dateStart !== "") {
        url += `&facet=date_start&refine.date_start=${dateStart}`;
      }
      console.log(url);
      return fetch(url)
        .then((response) => response.json())
        .then((openData) => {
          console.log(openData);
          const events = openData.records
            .map((event) => event.fields)
            .map((eventFields) => ({
              title: eventFields.title,
              cover_url: eventFields.cover_url,
              date_start: eventFields.date_start,
              address_name: eventFields.address_name,
            }));
          return events;
        });
    }
  }
  
  export default EventModel;