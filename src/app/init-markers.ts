export class Init{
    load(){
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
            console.log('No markers found...creating...');
        
        var markers= [
            {
                name:'Nanynang Polytechnic',
                lat: 1.3787,
                lng: 103.8493,
                draggable: true
            },
            {
                name: 'Singapore Polytechnic',
                lat: 1.3083,
                lng: 103.7797,
                draggable: true
            },
            {
                name: 'Temasek Polytechnic',
                lat: 1.3468,
                lng: 103.9326,
                draggable: false
            }
        ]

        localStorage.setItem('markers' , JSON.stringify(markers));
    } else {
        console.log('Loading markers...');
    }
    
        
    }
}