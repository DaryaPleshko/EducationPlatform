import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css";

function RegPage() {
    return (
        <div>
        <Header />
    
        <div className={style.regpage}>
            <div className={style.info}>
                <h1>Sign Up</h1>
                <div > <input  placeholder="name" /></div>
                <div > <input  placeholder="surname" /></div>
                <div > <input  placeholder="e-mail" /></div>
                <div> <input  placeholder="password" /></div>
                <div className={style.btn}>Sign Up</div>    
            </div>
            <div className={style.img}></div>
        </div>


        <Footer />
    </div>
    );
}

export default RegPage;