export type ProjectKeyType = "demure" | "novelpedia" | "lebu" | "novelcut" | "mangoz"

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
};

export const projectData: ProjectDataType = {
  demure: {
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
  mangoz: {
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