import NewSkills from "./level3/NewSkills";
import NewIntroduce from "./level3/NewIntroduce";
import NewMy from "./level3/NewMy";
import NewProject from "./level3/NewProject";
import Header from "../level3/Header";
import Footer from "../level3/Footer";

export default function MainVer2() {
  return (
    <>
      <Header />
      <NewIntroduce />
      <NewMy />
      <NewSkills />
      <NewProject />
      <Footer />
    </>
  )
}