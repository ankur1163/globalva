import React from 'react';

class Projectheading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div style={{borderBottom: '1px solid #cccccc',height:'60px'}} className="row">
           <div  className="col-md-2">
                <i style={{ marginTop:"17px",position: "absolute",left: "50%"}} className="fa fa-search fa-2x" aria-hidden="true"></i>
                </div>
                <div  className="col-md-8">
                  <h3 style={{ marginTop:"17px",position: "absolute",left: "50%"}}>All</h3>
               </div>
               <div  className="col-md-2">
                <i style={{ marginRight:"2px",marginTop:"17px",position: "absolute",right: "50%"}} className="fa fa-plus fa-2x" aria-hidden="true"></i>
              </div>
           </div>
    );
    }
}
export default Projectheading;
