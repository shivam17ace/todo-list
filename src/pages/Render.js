import React from "react";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Details } from "../Components/Details";
import { useParams } from "react-router-dom";
function Render() {
  const { id } = useParams();
  
  return (<>
    <div>
     {/* eslint-disable-next-line */}
      {Details.map((item) => {
        if (item.id === parseInt(id)) {
          return (
            <>
            <div className="pos">
            <div key={item.id}>
               <h2> Text: {item.text}</h2>
              </div>
              <div >
               <h3> Assigned To: {item.assignedTo}</h3>
              </div>
              <div>
                <h3>LAst Date: {item.lastDate}</h3>
              </div>
              {/* console.log(item.text) */}
            </div>
              
            </>
          )
        }

      }
      )
      }
    </div>
  </>

  );
}


export default Render;