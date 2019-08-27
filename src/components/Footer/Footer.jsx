import React from "react";

const Footer =(props) => {
    let footer1_html = props.footer[0].about_icon.map((footer1Obj,i) => {
        return(
            <React.Fragment>
                <a href="#" className="px-2"><i className={footer1Obj.social_icon}></i></a>
            </React.Fragment>
        )
    })
    let footer2_html = props.footer[1].customer_link1.map((footer2Obj,i) => {
        return(
            <React.Fragment>
                <li className="mb-2"><a href="#" className=" text-muted">{footer2Obj.customer_option}</a></li>
            </React.Fragment>
        )
    })
    let footer3_html = props.footer[2].customer_link2.map((footer3Obj,i) => {
        return(
            <React.Fragment>
                <li className="mb-2"><a href="#" className=" text-muted">{footer3Obj.customer_option}</a></li>
            </React.Fragment>
        )
    })
    let footer4_html = props.footer[3].customer_link3.map((footer4Obj,i) => {
        return(
            <React.Fragment>
                <li className="mb-2"><a href="#" className=" text-muted">{footer4Obj.customer_option}</a></li>
            </React.Fragment>
        )
    })
    return(
        <div className="mainFooter py-5">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h5 className="mb-4">{props.footer[0].about_text}</h5>
                        <p className="text-muted mb-4">{props.footer[0]. about_data}</p>
                        <div className="iconicTwo pt-3">
                             {footer1_html}
                        </div>
                    </div>
                    <div className="col-2">
                        <h5 className="mb-4">{props.footer[1].about_customer}</h5>
                        <ul className="list-unstyled">
                            {footer2_html}
                        </ul>
                    </div>
                    <div className="col-2">
                        <h5 className="mb-4">{props.footer[2].about_customer}</h5>
                        <ul className="list-unstyled">
                            {footer3_html}
                        </ul>
                    </div>
                    <div className="col-2">
                        <h5 className="mb-4">{props.footer[3].about_customer}</h5>
                        <ul className="list-unstyled">
                            {footer4_html}
                        </ul>
                    </div>
                    <div className="col-3">
                        <h5 className="mb-4">CONTACT INFORMATION</h5>
                        <p className="text-muted mb-2">291 South 21th Street,Suite 721 New York NY 10016</p>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className=" text-muted">+ 1235 2355 98</a></li>
                            <li className="mb-2"><a href="#" className=" text-muted">info@yoursite.com</a></li>
                            <li className="mb-2"><a href="#" className=" text-muted">yoursite.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5 pt-3 text-center justify-content-center">
                    <p className="text-muted">Copyright ©2019 All rights reserved | This template is made with  by<span style={{"color":"#ffc300"}}> Colorlib</span> Demo Images:<span style={{"color":"#ffc300"}}> Unsplash , Pexels.com</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;