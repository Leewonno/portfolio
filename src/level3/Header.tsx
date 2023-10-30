import LightNav from '../level3/LightNav';
import header from "../css/header.module.css";

export default function Header(){
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
                <LightNav />
            </div>
        </header>
    )
}