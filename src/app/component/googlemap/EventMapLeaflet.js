import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { FaCross } from "react-icons/fa";

const Map = () => {
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
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        eventList.map((item,i)=>{
            return(
                <Marker position={item.position} draggable={true} animate={true}>
                <Popup>
                      <div className="" >
                        <img className=" w-full" src={item.image}/>
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
