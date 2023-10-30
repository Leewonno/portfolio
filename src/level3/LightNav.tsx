import { useContext, useEffect } from "react";
import StatusContext from "../store/status-context";
import light from "../css/lightNav.module.css";


export default function LightNav(){

    const context = useContext(StatusContext);

    useEffect(()=>{

    }, []);

    const handleOnOff = ()=>{
        if(context.light === "on"){
            context.setLight("off");
        }
        else if(context.light === "off"){
            context.setLight("on");
        }
    }



    return(
        <>
            <div className={light.box} onClick={handleOnOff}>
                <div className={light.line}></div>
                <div className={light.dot}></div>
                <div className={light.dotBuble}></div>
                <div className={light.hint}><span>C</span>lick</div>
            </div>
            
        </>
    )
}