import style from "../../css/newMain.module.css";

export default function NewIntroContent() {
  return (
    <>
      <div className={style.introBox}>
        <div className={style.wordBox}>
          <div className={style.word} title="열정">Passion</div>
          <div className={style.word} title="노력">Effort</div>
          <div className={style.word} title="끈기">Patience</div>
        </div>
        <div className={style.myselfBox}>
          <div className={style.myselfTitle}>안녕하세요</div>
          <div className={style.myself}>걸그룹 엔믹스를 좋아하는 Full-Stack 개발자 <span className={style.bold}>이원노</span>입니다</div>
          <div className={style.myself}>엔믹스처럼 열정, 노력, 끈기를 바탕으로 최고의 실력자가 되겠습니다</div>
        </div>
      </div>
    </>
  )
}