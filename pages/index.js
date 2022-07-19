import xw from "xwind";
import Image from "next/image";
import ButtonReact from "../components/ButtonReact";
import ButtonStyled from "../components/ButtonStyled";
import NavBar from "../components/NavBar";
import clouds from "../public/clouds.jpeg";

const Index = () => (
  <div css={xw`grid justify-center items-center h-screen space-y-20`}>
    <NavBar></NavBar>
    <div css={xw`space-y-20`}>
      <Image
        alt="pink clouds of a hudson valley sunset"
        src={clouds}
        layout="fill"
        objectFit="cover"
      />
      <ButtonReact>@emotion/react</ButtonReact>
      <ButtonStyled>@emotion/styled</ButtonStyled>
    </div>
  </div>
);

export default Index;
