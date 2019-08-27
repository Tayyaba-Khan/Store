import React from "react";

class Shopping extends React.Component {
    // state={
    //     prodDta:props
    // }
    componentDidMount(){
        console.log(this.props)
        const datatogl = document.querySelectorAll('.categorieLine');
        datatogl.forEach(function(heading){
            heading.addEventListener("click",function(e){
            console.log(this.querySelectorAll('.categorieLine span'))
           this.querySelectorAll('span').forEach(function(span){
                span.classList.toggle("changespancolor")
            })
        })
    })

    const spanMinus = document.querySelector(".spanning");
    spanMinus.addEventListener('click',function(){
        // if (spanMinus.innerHTML == "-") {
            spanMinus.innerHTML="+";
        // }
        // else if (spanMinus.innerHTML == "+"){
        //     spanMinus.innerHTML="-";
        // }
        })
        

    }

    render(){
        let shop_html = this.props.shop.map((shopObj,i)=>{
            return(
                <div className="col-md-6 col-lg-4 text-center cardContent mb-4 caradData">
                    <div className="card">
                        <div className="shopImg">
                            <img src={shopObj.card_image} alt="" width="100%" height="100%" className="card-img-top"/>
                        </div>
                        <div className="overlayOne">
                            <span className="badge badge-danger">{shopObj.card_tags}</span>
                        </div>
                        <div className="overlayTwo"></div>
                        <div className="iconic">
                            <i className="material-icons mx-1">add_shopping_cart</i>
                            <i className="material-icons mx-1">remove_red_eye</i>
                            <i className="material-icons mx-1">favorite</i>
                            <i className="material-icons mx-1">signal_cellular_alt</i>
                        </div>
                    </div>
                    <div className="mt-2">
                        <a href="#" className="text-dark text-decoration-none">{shopObj.card_text}</a>
                    </div>
                    <p style={{"color":"#fec228"}}>{shopObj.card_price}</p>
                </div>
                )
            })
        let side_html = this.props.shopOne.map((sideObj,i)=>{
            let side_link =sideObj.card_options.map((sidelinkObj,i)=>{
                let side_link1 =sidelinkObj.option_title_menu.map((sidelink1Obj,i)=>{
                    return(
                        <li><a href="#" className="text-decoration-none text-dark">{sidelink1Obj.option_menu}</a></li>
                    )
                })
                return(
                    <React.Fragment>
                        <div key={i} className="card-title mb-0" id={`heading${i+1}`}>
                            <h2 className="mb-0 d-flex justify-content-between categorieLine">
                                <button className="btn btn-link text-decoration-none" type="button" data-toggle="collapse" data-target={`#collapse${i+1}`} aria-expanded="true" aria-controls={`#collapse${i+1}`}>
                                <span className="categoring">{sidelinkObj.option_title}</span>
                                </button>
                                <button className="btn btn-link text-decoration-none" type="button" data-toggle="collapse" data-target={`#collapse${i+1}`} aria-expanded="true" aria-controls={`#collapse${i+1}`}>
                                <span className="spanning">{sidelinkObj.option_icon}</span>
                                </button>
                            </h2>
                        </div>
                        <div id={`collapse${i+1}`} className="collapse" aria-labelledby={`heading${i+1}`} data-parent="#accordionExample">
                            <div className="card-body py-0 pl-0">
                                <ul className="categoring">
                                    {side_link1}
                                </ul>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })
            return(
                <div className="card">
                    <h5 className="pl-4 pt-3">{sideObj.card_title}</h5>
                    {side_link}
                </div>
            )
        })
        let price_html = this.props.shopTwo.map((priceObj,i)=>{
            let price_html1 =priceObj.card_options.map((price1Obj,i)=>{
                let price_html2 =price1Obj.start_data.map((price2Obj,i)=>{
                    return(
                        <option value="">{price2Obj.option}</option>
                    )
                })
                let price_html3 =price1Obj.end_data.map((price3Obj,i)=>{
                    return(
                        <option value="">{price3Obj.option}</option>
                    )
                })
                return(
                    <div className="card-body pt-0">
                        <div className="card-text">{price1Obj.price_tag}</div>
                        <select name="price" id="price" className="form-control mt-3 priceData">
                            {price_html2}
                        </select>
                        <div className="card-text mt-3">{price1Obj.price_tag1}</div>
                        <select name="price" id="price" className="form-control mt-3">
                            {price_html3}
                        </select>
                    </div>
                )
            })
            return(
                <React.Fragment>
                        <div className="card-title text-center pt-3">
                            <h5>{priceObj.card_title}</h5>
                        </div>
                        {price_html1}
                </React.Fragment>
            )
        })
        // let col_html = this.props.shopThree.col_options.map((colObj,i)=>{
        //     return(
        //         <a href="#"><div className="color colorFive mr-1 mt-1" style={{"background-color":`${colObj.options_color}`}}></div></a>
        //     )
        // })
        return(
            <div className="mainShopping mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-2 mt-5">
                            <div className="accordion" id="accordionExample">
                                {side_html}
                            </div>
                            <div className="card my-5">
                                {price_html}
                            </div>
                            <div className="card my-5">
                                <div className="card-body mt-0">
                                    <div className="card-title">
                                        <h5>{this.props.shopThree[0].colorTitle}</h5>
                                    </div>
                                    <div className="card-text d-flex flex-wrap">
                                        {/* {col_html} */}
                                        <a href="#"><div className="color colorOne mr-1"></div></a>
                                        <a href="#"><div className="color colorTwo mr-1"></div></a>
                                        <a href="#"><div className="color colorThree mr-1"></div></a>
                                        <a href="#"><div className="color colorFour mr-1"></div></a>
                                        <a href="#"><div className="color colorFive mr-1 mt-1"></div></a>
                                        <a href="#"><div className="color colorSix mr-1 mt-1"></div></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card my-5">
                                <div className="card-body mt-0">
                                    <div className="card-title">
                                        <h5>SiZES</h5>
                                    </div>
                                    <div className="card-text">
                                        <a href="#" className="btn btn-light border border-dark py-1 px-2 mr-1">XS</a>
                                        <a href="#" className="btn btn-light border border-dark px-2 py-1 mr-1">S</a>
                                        <a href="#" className="btn btn-light border border-dark px-2 py-1 mr-1">M</a>
                                        <a href="#" className="btn btn-light border border-dark px-2 py-1 mr-1 mt-1">L</a>
                                        <a href="#" className="btn btn-light border border-dark px-2 py-1 mr-1 mt-1">XL</a>
                                        <a href="#" className="btn btn-light border border-dark px-2 py-1 mr-1 mt-1">XXL</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 mt-1">
                            <div className="row my-5">
                                {shop_html}
                            </div>
                           
                            <nav aria-label="Page navigation example pageList">
                                <ul class="pagination">
                                    <li class="page-item">
                                    <a class="page-link paging_col" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link paging_col" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link paging_col" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link paging_col" href="#">3</a></li>
                                    <li class="page-item paging_col">
                                    <a class="page-link paging_col" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Shopping;