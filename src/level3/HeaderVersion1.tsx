import LightNav from '../level3/LightNav';
import header from "../css/header-ver1.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';

export default function Header(){

    const [width, setWidth] = useState<number>(window.innerWidth);
    const [menu, setMenu] = useState<string>("off");
    const [menuStyle, setMenuStyle] = useState<object>({});

    const handleMenuBtn = ()=>{
        if(menu === "off"){
            setMenu("on");
            setMenuStyle(headerDisplay);
        }
        else{
            setMenu("off");
            setMenuStyle({});
        }
    }

    const headerDisplay = {
        display:"flex",
    }

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            if(width>500){
                setMenuStyle({});
                setMenu("off");
            }
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);

    return(
        <header className={header.header}>
            <div className={header.headerBox}>
                <div className={header.name}>
                    <div>Leewonno</div>
                </div>
                <div className={header.aBox}>
                    <a href="#home" className={header.a}>HOME</a>
                    <a href="#my" className={header.a}>자기소개</a>
                    <a href="#skill" className={header.a}>기술</a>
                    <a href="#project" className={header.a}>프로젝트</a>
                </div>
                <div className={header.maBox} style={menuStyle}>
                    <a href="#home" className={header.a}>HOME</a>
                    <a href="#my" className={header.a}>자기소개</a>
                    <a href="#skill" className={header.a}>기술</a>
                    <a href="#project" className={header.a}>프로젝트</a>
                </div>
                <FontAwesomeIcon icon={faBars} className={header.icon} onClick={handleMenuBtn} />
                <LightNav />
            </div>
        </header>
    )
}