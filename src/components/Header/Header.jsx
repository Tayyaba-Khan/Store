import React from "react";

const Header = (props) => {
    let head_html = props.head.map((haedObj,i)=>{
        return(
            <div className="container-fluid">
                <div className="overlay"></div>
                <div className="row justify-content-center">
                    <div className="col-6 d-flex flex-column text-center mt-5 pt-5 animated fadeInUp">
                        <h2 className="pt-5">{haedObj.head_title}</h2>
                        <div className="d-flex justify-content-center">
                            <a className="text-decoration-none font-weight-bold" style={{"color":"#ffc508"}} href="#">{haedObj.head_item1}</a>
                            <span className="pl-3">{haedObj.head_item2}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <div className="mainHeader mb-5">
           {head_html}
        </div>
    );
};

export default Header;