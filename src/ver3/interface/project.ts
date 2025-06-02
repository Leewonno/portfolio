import demure1 from '../../img/new/demure/demure_main.png'
import demure2 from '../../img/new/demure/demure_login.png'
import demure3 from '../../img/new/demure/demure_signup.png'
import demure4 from '../../img/new/demure/demure_list.png'
import demure5 from '../../img/new/demure/demure_cart.png'
import demure6 from '../../img/new/demure/demure_order.png'
import demure7 from '../../img/new/demure/demure_post.png'
import demure8 from '../../img/new/demure/demure_post_input.png'
import demure9 from '../../img/new/demure/demure_event.png'
import demure10 from '../../img/new/demure/demure_chat.png'
import demure11 from '../../img/new/demure/demure_notice.png'
import novelcut1 from '../../img/new/novelcut/novelcut_main.png'
import novelcut2 from '../../img/new/novelcut/novelcut_novel.png'
import novelcut3 from '../../img/new/novelcut/novelcut_view.png'
import novelcut4 from '../../img/new/novelcut/novelcut_new.png'
import novelcut5 from '../../img/new/novelcut/novelcut_write.png'
import mangoz from '../../img/mangoz.png'

export type ProjectKeyType = "demure" | "novelpedia" | "lebu" | "novelcut" | "mangoz" | "lyrics"

export interface CarouselImageType {
  url: string, // 이미지 url
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
      {url: demure1},
      {url: demure2},
      {url: demure3},
      {url: demure4},
      {url: demure5},
      {url: demure6},
      {url: demure7},
      {url: demure8},
      {url: demure9},
      {url: demure10},
      {url: demure11},
    ]
  },
  novelpedia: {
    data: [
      {
        url: "https://rgo4.com/files/attach/images/2676751/130/308/018/f4d7b8baadf80abd70c805f29732f097.jpg",
      },
      {
        url: "https://pbs.twimg.com/media/EckuYhbU8AIXzaB?format=jpg&name=large",
      },
      {
        url: "https://blog.kakaocdn.net/dn/cd3UEK/btqDtBbmgKo/alFYbJ2W0eAEwx99KpkJsk/img.jpg",
      }
    ]
  },
  lebu: {
    data: [
      {
        url: "https://pbs.twimg.com/media/EckuYhbU8AIXzaB?format=jpg&name=large",
      },
      {
        url: "https://rgo4.com/files/attach/images/2676751/130/308/018/f4d7b8baadf80abd70c805f29732f097.jpg",
      },
      {
        url: "https://blog.kakaocdn.net/dn/cd3UEK/btqDtBbmgKo/alFYbJ2W0eAEwx99KpkJsk/img.jpg",
      }
    ]
  },
  novelcut: {
    data: [
      {url: novelcut1},
      {url: novelcut2},
      {url: novelcut3},
      {url: novelcut4},
      {url: novelcut5},
    ]
  },
  mangoz: {
    data: [
      {url: mangoz},
    ]
  },
  lyrics: {
    data: [
      {
        url: "https://pbs.twimg.com/media/EckuYhbU8AIXzaB?format=jpg&name=large",
      },
      {
        url: "https://rgo4.com/files/attach/images/2676751/130/308/018/f4d7b8baadf80abd70c805f29732f097.jpg",
      },
      {
        url: "https://blog.kakaocdn.net/dn/cd3UEK/btqDtBbmgKo/alFYbJ2W0eAEwx99KpkJsk/img.jpg",
      }
    ]
  }
};