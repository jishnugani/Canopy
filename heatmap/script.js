
let map = L.map('map-container').setView([10.2794733, 9.8013358], 13); // Replace with your town's coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


const treeLossReports = [
    { latitude: 10.2794733, longitude: 8.8013358, highHeat: true }, 
    { latitude: 10.7194733, longitude: 9.87113358, highHeat: true}, 
    { latitude: 10.5794733, longitude: 8.97013358, highHeat: true }, 
    { latitude: 10.9194733, longitude: 10.1113358, highHeat: true}, 
    { latitude: 10.5794733, longitude: 10.5013358, highHeat: true }, 
    { latitude: 10.9194733, longitude: 10.9113358, highHeat: true}, 

];


treeLossReports.forEach(report => {
    let marker = L.marker([report.latitude, report.longitude]);

   
    if (report.highHeat) {
        marker.setIcon(L.icon({ 
            iconUrl: 'red-marker.png' 
        }));
    } 

    marker.addTo(map);
});