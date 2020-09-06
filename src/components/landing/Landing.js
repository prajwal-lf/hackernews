import React from "react";
import Header from "../common/header";
import NewsItem from "../common/NewsItem";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="main__container">
            <Header />
            <div className="container">
                <NewsItem />
            </div>
        </div>
    );
};

export default Landing;
