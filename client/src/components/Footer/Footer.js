import style from './style.module.css';

function Footer() {
    return (
        <div className={style.wrapper}>
            <div className={style.nav}>
                <div className={style.transition}>
                    <p>Home</p>
                    <p>Textbook</p>
                    <p>Statistics</p>
                    <p>Sprint</p>
                </div>
                <div className={style.name}>
                    <p>Alex</p>
                    <p>Gabriel</p>
                    <p>Marcus</p>
                </div>
            </div>
            <hr />
            <div className={style.end}>
                <div className={style.img}></div>
                <div className={style.signature}>©2021 Hschool. Project for Hschool.</div>
            </div>
        </div>
    );
}

export default Footer;