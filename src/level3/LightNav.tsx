import { useContext, useEffect } from "react";
import StatusContext from "../store/status-context";
import light from "../css/lightNav.module.css";


export default function LightNav(){

    const context = useContext(StatusContext);

    useEffect(()=>{

    }, []);

    const handleOnOff = ()=>{
        if(context.light === "white"){
            context.setLight("black");
        }
        else if(context.light === "black"){
            context.setLight("white");
        }
    }



    return(
        <>
            <div className={light.box} onClick={handleOnOff}>
                <div className={light.line}></div>
                <div className={light.dot}></div>
            </div>
            
        </>
    )
}