import React from "react";
const Test = () => {
  const arr = [
    {
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_name: "Event Name",
      desc: "this is event Description",
    },
    {
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_name: "Event Name",
      desc: "this is event Description 2",
    },
    {
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_name: "Event Name",
      desc: "this is event Description 3",
    }
  ];
  return (
    <div className="p-4 container-fluid">
      <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center  gap-5 ">
        {arr.map((item, index) => {
          return (

           <>
           
              <div className="d-flex  flex-column justify-content-center align-items-center">
                <div class="product col-lg-10">
                  <div class="imgbox">
                    <img src={item.image} class="img-fluid" />
                  </div>
                  <div class="specifies d-flex  justify-content-center align-items-center">
                    <div>
                      <h3>{item.event_name}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
                <button className="w-100  rounded">Click me </button>

              </div>
           </>
          
          );
        })}
      </div>
    </div>
  );
};
export default Test;