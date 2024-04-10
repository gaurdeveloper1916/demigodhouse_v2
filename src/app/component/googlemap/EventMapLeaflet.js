import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { FaLocationDot } from "react-icons/fa6";
const Map = () => {
  const yellowIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
const eventList=[
    {
        position:[28.7041, 77.1025],
        tiltle:'India Event',
        des:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        image:"https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg"
    },
    {
        position:[38.9637, 35.2433],
        tiltle:'Turkey Event',
        des:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        image:"https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg"
    },
    {
        position:[25.2048, 55.2708],
        tiltle:'Dubai Event',
        des:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        image:"https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg"
    }
]
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={3}
      scrollWheelZoom={false}
      style={{ height: "400px", zIndex: "0!important" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}

        "
      />
      {
        eventList.map((item,i)=>{ 
            return(
                <Marker position={item.position} draggable={true} animate={true} icon={yellowIcon
              }>
                <Popup>
                      <div className="" >
                        <img className="w-75" src={item.image}/>
                        <div className="card-body p-2">
                          <h5 className="card-title m-0">{item.tiltle}</h5>
                          <p className="card-text">
                           {item.des}
                          </p>
                          <a href="#" className="">
                           <button className="border"> Book Your Ticket</button>
                          </a>
                        </div>
                      </div>
                   
                </Popup>
              </Marker>
            )
        })
      }
     
    </MapContainer>
  );
};

export default Map;
