import header from "../css/header.module.css";

export default function Header(){
    return(
        <header>
            <div>
                <div>Leewonno</div>
            </div>
            <div>
                <a href="#home">HOME</a>
                <a href="#intro">자기소개</a>
                <a href="#skill">기술</a>
                <a href="#project">프로젝트</a>
            </div>
        </header>
    )
}