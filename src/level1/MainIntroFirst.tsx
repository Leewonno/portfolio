import { useContext, useEffect, useRef, useState } from "react";
import StatusContext from "../store/status-context";
import main from "../css/main.module.css";

export default function MainIntroFirst(){

    const [helloStyle, setHelloStyle]  = useState({});
    const context = useContext(StatusContext);

    useEffect(()=>{
        if(context.light==="on"){
            setHelloStyle(thema);
        }
        else{
            setHelloStyle({});
        }
    },[context.light]);

    const thema = {
        color:"white"
    }

    return(
        <>
            <div className={main.introBox1}>
                <div className={main.hello} style={helloStyle}>안녕하세요!</div>
                <div className={main.hello2} style={helloStyle}>웹 풀스택 개발자를 꿈꾸는 이원노입니다.</div>
            </div>
        </>
    )
}