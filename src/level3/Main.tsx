import { useContext } from "react";
import StatusContext from "../store/status-context";
import main from "../css/main.module.css";
import MainIntroduce from "../level2/MainIntroduce";

export default function Main(){
    const context = useContext(StatusContext);

    const thema = {
        backgroundColor:context.light,
    }

    return(
        <main className={main.main}>
            <MainIntroduce></MainIntroduce>
            <section id="skill">
                스킬
            </section>
            <section>
                프로젝트
            </section>
        </main>
    )
}