import { useContext, useEffect, useState } from "react";
import StatusContext from "../store/status-context";

import main from "../css/main.module.css";
import MainIntroFirst from "../level1/MainIntroFirst";
import MainIntroAnimation from "../level1/MainIntroAnimation";
import lightBg from "../img/lighting.jpg";

export default function MainIntroduce(){

    const [styleThema, setStyleThema]  = useState({});
    const context = useContext(StatusContext);

    useEffect(()=>{
        if(context.light==="on"){
            setStyleThema(thema);
        }
        else{
            setStyleThema({});
        }
    },[context.light]);

    const thema={
        opacity:0.4,
    }

    return(
        <>
            <section id="home" className={main.home}>
                <MainIntroFirst></MainIntroFirst>
                <img src={lightBg} alt="섹션1_배경" className={main.homeBg} style={styleThema}></img>
                <MainIntroAnimation></MainIntroAnimation>
            </section>
        </>
    )
}