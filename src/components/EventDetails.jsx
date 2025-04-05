import "./EventDetails.css";
import Wed1 from '../assets/wed-ring.png'
import Wed2 from '../assets/web-flow.png'
import ring from '../assets/wedding-ring.png'
import table from '../assets/dinner-table.png'
import map from '../assets/map.png'
const EventDetails = () => {
  return (
    <section className="events">
      <div className="event-card" style={{backgroundImage:`url(${Wed1})`}}>
      <div className="overlay-ev"></div>
      <img src={ring} alt="" />
        <h3>Wedding Muhurtha</h3>
        <p>Sunday 13th April 2025 at 12:25pm Abhijit Lagnam</p>
        <h5>Ashirvad Kalyan Mantap</h5>
        <p>Near M.B Nagar Police Station, Sedam Road Kalaburagi</p>
        <button onClick={()=>window.open("https://www.google.co.in/maps/place/Ashirwad+Mangal+Karyalaya/@17.327573,76.864921,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc8c72b4bcee5ed:0xd56724bba5ba1de9!8m2!3d17.327573!4d76.8674959!16s%2Fg%2F11c1tqm6gm?entry=ttu&g_ep=EgoyMDI1MDQwMS4wIKXMDSoASAFQAw%3D%3D")}>
          <img className="map" src={map} alt="map" />
          Open Map</button>
      </div>
      {/* <div className="event-card"  style={{backgroundImage:`url(${Wed2})`}}>
      <div className="overlay-ev"></div>
      <img src={table} alt="" />
        <h3>Wedding Party</h3>
        <p>10:00 - 11:00</p>
        <h5>Groom's House</h5>
        <p>Hosa Rangapura,sirigere, Chithradurga 577-501</p>
        <button onClick={()=>window.open("https://www.google.com/maps/place/Hosarangapura,+Karnataka+577541/@14.2898651,76.1606375,3750m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bba137dbc69c839:0xa196dd6813cb8d1d!8m2!3d14.288968!4d76.181272!16s%2Fg%2F11vj7hl6m?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D")}>
          <img className="map" src={map} alt="map" />
          Open Map</button>
      </div> */}
    </section>
  );
};

export default EventDetails;
