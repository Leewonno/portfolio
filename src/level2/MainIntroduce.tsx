import main from "../css/main.module.css";
import MainIntroFirst from "../level1/MainIntroFirst";
import MainIntroSecond from "../level1/MainIntroSecond";

export default function MainIntroduce(){
    return(
        <>
            <section id="home" className={main.home}>
                <MainIntroFirst></MainIntroFirst>
                <MainIntroSecond></MainIntroSecond>
            </section>
        </>
    )
}