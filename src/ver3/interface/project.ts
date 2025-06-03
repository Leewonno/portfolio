import demure1 from '../../img/new/demure/demure_main.png';
import demure2 from '../../img/new/demure/demure_login.png';
import demure3 from '../../img/new/demure/demure_signup.png';
import demure4 from '../../img/new/demure/demure_list.png';
import demure5 from '../../img/new/demure/demure_cart.png';
import demure6 from '../../img/new/demure/demure_order.png';
import demure7 from '../../img/new/demure/demure_post.png';
import demure8 from '../../img/new/demure/demure_post_input.png';
import demure9 from '../../img/new/demure/demure_event.png';
import demure10 from '../../img/new/demure/demure_chat.png';
import demure11 from '../../img/new/demure/demure_notice.png';
import novelcut1 from '../../img/new/novelcut/novelcut_main.png';
import novelcut2 from '../../img/new/novelcut/novelcut_novel.png';
import novelcut3 from '../../img/new/novelcut/novelcut_view.png';
import novelcut4 from '../../img/new/novelcut/novelcut_new.png';
import novelcut5 from '../../img/new/novelcut/novelcut_write.png';
import mangoz from '../../img/mangoz.png';
import lebu1 from '../../img/new/lebu/lebu_main.png';
import lebu2 from '../../img/new/lebu/lebu_main2.png';
import lebu3 from '../../img/new/lebu/lebu_place.png';
import lebu4 from '../../img/new/lebu/lebu_food.png';
import novelpedia1 from '../../img/new/novelpedia/novelpedia_main.png';
import novelpedia2 from '../../img/new/novelpedia/novelpedia_novel.png';
import novelpedia3 from '../../img/new/novelpedia/novelpedia_edit.png';
import novelpedia4 from '../../img/new/novelpedia/novelpedia_history.png';
import novelpedia5 from '../../img/new/novelpedia/novelpedia_list.png';
import lyrics1 from '../../img/new/lyrics/lyrics_main.png';
import lyrics2 from '../../img/new/lyrics/lyrics_tran.png';

export type ProjectKeyType = "demure" | "novelpedia" | "lebu" | "novelcut" | "mangoz" | "lyrics"

export interface CarouselImageType {
  url: string, // 이미지 url
  title: string,
}

export interface CarouselImagePropsType {
  data: CarouselImageType[],
}

export interface ProjectDataType {
  demure: CarouselImagePropsType;
  novelpedia: CarouselImagePropsType;
  lebu: CarouselImagePropsType;
  novelcut: CarouselImagePropsType;
  mangoz: CarouselImagePropsType;
  lyrics: CarouselImagePropsType;
};

export const projectData: ProjectDataType = {
  demure: {
    data: [
      { url: demure1, title: '메인페이지(Main)' },
      { url: demure2, title: '로그인(Login)' },
      { url: demure3, title: '회원가입(SignUp)' },
      { url: demure4, title: '검색(Search)' },
      { url: demure5, title: '장바구니(Cart)' },
      { url: demure6, title: '주문내역(Order)' },
      { url: demure7, title: '배송정보(Post)' },
      { url: demure8, title: '배송정보입력(Post)' },
      { url: demure9, title: '이벤트(Event)' },
      { url: demure10, title: '챗봇(ChatBot)' },
      { url: demure11, title: '공지사항(Notice)' },
    ]
  },
  novelpedia: {
    data: [
      { url: novelpedia1, title:'메인페이지(Main)' },
      { url: novelpedia2, title:'작품(Novel)' },
      { url: novelpedia3, title:'작품편집(NovelEdit)' },
      { url: novelpedia4, title:'역사(History)' },
      { url: novelpedia5, title:'목록(List)' },
    ]
  },
  lebu: {
    data: [
      { url: lebu1, title:'메인페이지(Main)' },
      { url: lebu2, title:'메인페이지(Main)' },
      { url: lebu3, title:'관광지(TouristAttraction)' },
      { url: lebu4, title:'식당(Food)' },

    ]
  },
  novelcut: {
    data: [
      { url: novelcut1, title:'메인페이지(Main)' },
      { url: novelcut2, title:'작품정보(Novel)' },
      { url: novelcut3, title:'작품보기(View)' },
      { url: novelcut4, title:'작품생성(Create)' },
      { url: novelcut5, title:'회차생성(Write)' },
    ]
  },
  mangoz: {
    data: [
      { url: mangoz, title:'메인페이지(Main)' },
    ]
  },
  lyrics: {
    data: [
      { url: lyrics1, title:'메인페이지(Main)' },
      { url: lyrics2, title:'자막변환(Transform)' },
    ]
  }
};