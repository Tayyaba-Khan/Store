import React from "react";

const News = (props) => {
    let news_html = props.news.map((newsObj,i)=>{
        return(
            <div className="row ">
                <div className="col-6">
                    <h3>
                        <i class="material-icons">{newsObj.news_icon}</i>
                        {newsObj.news_text}
                    </h3>
                </div>
                <div className="col-6">
                    <form action="#"className="form-group">
                        <div className="row">
                            <div className="col-8">
                                <input type="email" name="email" id="email" placeholder={newsObj.news_mail} className="newsInput form-control-lg"/>
                            </div>
                            <div className="col-4">
                                <input type="submit" value={newsObj.news_button} className="newsBtn btn btn-dark btn-lg "/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    })
    return(
        <div className="mainNews my-5 py-5">
            <div className="container">
                <div className="row justify-content-center text center">
                    <div className="col-8">
                       {news_html}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;