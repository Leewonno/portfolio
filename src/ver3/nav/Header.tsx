import { faBars, faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { media } from "../lib/styles/media";
import { useLocation } from "react-router-dom";

const Container = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1;
  user-select: none;
  transition: all 0.3s;
`

const Box = styled.div`
  width: 95%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-family: 'S-CoreDream-3Light';
`

const LogoBox = styled.div`
  font-size: 25px;
  font-weight: 900;
  color: #a3a3a3;
  margin-left: 20px;
  font-family: 'S-CoreDream-7EXTRA_BOLD';
  cursor: pointer;
`

const Logo = styled.a`
  color: #a3a3a3;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`

const MBox = styled.div`
  display: none;

  ${media.phone`
    display: none;
    background-color: #000;
    width: 100%;
    position: absolute;
    top: 90px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s;
    animation: menuDown 0.5s ease-out;
    animation-fill-mode: forwards;
  `}

  @keyframes menuDown {
    0%{
        transform: translateY(-20px);
        opacity: 0;
    }
    100%{
        transform: translateY(0px);
        opacity: 1;
    }
  }
`

const LinkBox = styled.div`
  margin-right: 20px;
  display: flex;

  ${media.phone`
    display: none;
  `}
`

const Link = styled.a`
  color: #a3a3a3;
  text-decoration: none;
  margin-left: 15px;
  transition: all 0.3s;
  font-weight: 600;
  cursor: pointer;

  &:hover{
    color: #fff;
  }

  ${media.phone`
    text-decoration: none;
    margin-left: 0px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 18px;
  `}
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  display: none;

  ${media.phone`
    display: block;
    margin-right: 20px;
    font-size: 25px;
    color: white;
    cursor: pointer;
  `}
`;


export default function Header() {

  const [prevY, setPrevY] = useState<number>(0);
  const [scroll, setScroll] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (prevY >= 100) {
      setScroll(false);
    }
    else {
      setScroll(true);
    }
  }, [prevY])

  const handleScroll = () => {
    setPrevY(window.scrollY);
  };

  const headerFontColor = {
    color: "#fff"
  }

  const headerBackgoundColor = {
    backgroundColor: "#000",
  }

  const headerBackgoundColorNone = {
  }

  const headerFontColorNone = {}

  const [width, setWidth] = useState<number>(window.innerWidth);
  const [menu, setMenu] = useState<string>("off");
  const [menuStyle, setMenuStyle] = useState<object>({});

  const handleMenuBtn = () => {
    if (menu === "off") {
      setMenu("on");
      setMenuStyle(headerDisplay);
    }
    else {
      setMenu("off");
      setMenuStyle({});
    }
  }

  const headerDisplay = {
    display: "flex",
  }

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      if (width > 600) {
        setMenuStyle({});
        setMenu("off");
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const handleLinkClick = (section:number) => {
    window.scrollTo({
      top: window.innerHeight * section,
    });
  }

  // 포폴 사이트 리팩토링 가능성 있으므로
  // 이전 기능 유지 위해
  const location = useLocation();
  const currentPath = location.pathname; // 현재 경로
  const is_home = currentPath === '/';
  const projectPath = `${currentPath.replace(/\/$/, '')}/project`; // 중복 슬래시 방지

  return (
    <Container style={scroll ? headerBackgoundColorNone : headerBackgoundColor}>
      <Box>
        <LogoBox>
          <Logo href="/" style={scroll ? headerFontColorNone : headerFontColor}>LIKE NMIXX</Logo>
        </LogoBox>
        <LinkBox>
          {is_home ?
            <>
              <Link onClick={()=>handleLinkClick(3)} style={scroll ? headerFontColorNone : headerFontColor}>ABOUT ME</Link>
              <Link onClick={()=>handleLinkClick(4)} style={scroll ? headerFontColorNone : headerFontColor}>CAREER</Link>
              {/* <Link onClick={()=>handleLinkClick(2)} style={scroll ? headerFontColorNone : headerFontColor}>SKILLS</Link> */}
              <Link onClick={()=>handleLinkClick(5)} style={scroll ? headerFontColorNone : headerFontColor}>자기소개서</Link>
            </> : <></>
          }
          <Link href={"/project"} target="_blank" style={scroll ? headerFontColorNone : headerFontColor}>
            PROJECTS <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </Link>
        </LinkBox>
        <MBox style={menuStyle}>
          {is_home ? 
          <>
            <Link onClick={()=>handleLinkClick(3)} style={scroll ? headerFontColorNone : headerFontColor}>ABOUT ME</Link>
            <Link onClick={()=>handleLinkClick(4)} style={scroll ? headerFontColorNone : headerFontColor}>CAREER</Link>
            {/* <Link onClick={()=>handleLinkClick(2)} style={scroll ? headerFontColorNone : headerFontColor}>SKILLS</Link> */}
            <Link onClick={()=>handleLinkClick(5)} style={scroll ? headerFontColorNone : headerFontColor}>자기소개서</Link>
          </> : <></>  
          }
          <Link href={"/project"} target="_blank" style={scroll ? headerFontColorNone : headerFontColor}>
            PROJECTS <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </Link>
        </MBox>
        <StyledFontAwesomeIcon icon={faBars} onClick={handleMenuBtn} />
      </Box>
    </Container>
  )
}