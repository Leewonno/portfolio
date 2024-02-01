import { useContext, useEffect, useState } from "react";
import StatusContext from "../store/status-context";

import main from "../css/main.module.css";
import javascript from "../img/js.png";
import css from "../img/css3.png";
import html from "../img/html5.png";
import nodejs from "../img/nodejs.png";
import typescript from "../img/typescript.png";
import rct from "../img/react.png";
import springBoot from "../img/spring-boot.png";


export default function MainIntroAnimation(){

    const [styleThema, setStyleThema]  = useState({});
    const context = useContext(StatusContext);

    useEffect(()=>{
        if(context.light==="on"){
            setStyleThema(thema);
        }
        else{
            setStyleThema(none);
        }
    },[context.light]);

    const thema={
        display:"block",
    }
    const none={
        display:"none",
    }

    return(
        <>
            <div>
                <img className={main.reactLogo} src={rct} alt="리액트" style={styleThema}></img>
                <img className={main.jsLogo} src={javascript} alt="자바스크립트" style={styleThema}></img>
                <img className={main.cssLogo} src={css} alt="css" style={styleThema}></img>
                <img className={main.htmlLogo} src={html} alt="html" style={styleThema}></img>
                <img className={main.nodejsLogo} src={nodejs} alt="nodejs" style={styleThema}></img>
                <img className={main.typeLogo} src={typescript} alt="타입스크립트" style={styleThema}></img>
                <img className={main.springLogo} src={springBoot} alt="스프링" style={styleThema}></img>
            </div>
        </>
    )
}