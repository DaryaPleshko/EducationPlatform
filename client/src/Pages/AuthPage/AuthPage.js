import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './style.module.css';

function AuthPage() {
    return (
        <div>
            <Header />

            <div className={style.authpage}>
                <div className={style.info}>
                    <h1>Login</h1>
                    <div > <input placeholder="email" /></div>
                    <div> <input placeholder="pwd" /></div>
                    <div className={style.btn}>Login</div>
                </div>
                <div className={style.img}></div>
            </div>

            <Footer />
        </div>
    );
}

export default AuthPage;