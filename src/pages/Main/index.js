import Card from "../../components/Card";
import Modal from "../../components/Modal";
import CmSwiper from "../../components/Swiper";
import Footer from "../../container/Footer";
import Header from "../../container/Header";
import MainWrapper from "./MainWrapper";

const Main = () => {
    return (<MainWrapper>
        <Header />
        <CmSwiper />
        {/* Categories */}
        <div className="container-fluid">
            <div className="row m-0 p-3 py-5">
                <div className="col-lg-3 col-md-4 col-sm-6  p-3">
                    <Card />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  p-3">
                    <Card />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  p-3">
                    <Card />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  p-3">
                    <Card />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  p-3">
                    <Card />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  p-3">
                    <Card />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  p-3">
                    <Card />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  p-3">
                    <Card />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  p-3">
                    <Card />
                </div>
            </div>
        </div>
        {/* <Modal /> */}
        <Footer />
    </MainWrapper>)
}

export default Main;