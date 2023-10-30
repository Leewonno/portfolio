
import main from "../css/main.module.css";
import MainIntroduce from "../level2/MainIntroduce";
import MainMy from "../level2/MainMy";
import MainProject from "../level2/MainProject";
import MainSkill from "../level2/MainSkill";

export default function Main(){
    

    return(
        <main className={main.main}>
            <MainIntroduce></MainIntroduce>
            <MainMy></MainMy>
            <MainSkill></MainSkill>
            <MainProject></MainProject>
        </main>
    )
}