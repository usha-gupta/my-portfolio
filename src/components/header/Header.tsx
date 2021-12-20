import React, {useEffect} from "react";
import styled from "styled-components";
import Typed from "typed.js";

import backgroundImage from "../../assets/images/bg_header.jpg";

const StyledWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImage});
  background-size: cover;
`;

const StyledCaption = styled.p`
  font-size: 3rem;
  padding: 72px;
  padding-top: 200px;
  color: white;
`;

const StyledSpan = styled.span`
  background-color: #008073;
  color: white;
  padding: 16px;
`;

const Header = () => {
  useEffect(() => {
    const typed = new Typed(".positions", {
      strings: ["Developer", "Architecture", "Engineer"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      cursorChar: "",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <StyledWrapper>
        <StyledCaption>
          I'm a <StyledSpan className="positions"></StyledSpan>
        </StyledCaption>
      </StyledWrapper>
  );
};

export default Header;
