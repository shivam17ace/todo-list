import React from "react";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { List } from 'devextreme-react/list';
import { Link } from "react-router-dom";
import { Details } from "./Details";
const ListItem = (data) => {
    return (
        <div>
            
            <p>{ data.id }</p>
            <Link to={{pathname: `/Render/${data.id}`}}><b style={{ marginLeft: '2rem' }}>{ data.text }</b></Link>
        </div>
    );
};
function ListData(){
    return(
        <List  className='listing'
        dataSource={Details}
        itemRender={ListItem}
        selectionMode="single"
       
       >
      </List>
    );
}
export default ListData;