import React, { useState } from 'react'
import styled, {keyframes, ThemeProvider, createGlobalStyle} from "styled-components"

// const Title = styled.h1`
// font-size: 1.5em;
// text-align: center;
// color: palevioletred;
// `;
// // 클래스 명은 랜덤으로 지어준다. 사람이 신경 쓸 일이 아님.

// const Wrapper = styled.section`
// padding: 4em;
// background: papayawhip;
// `;

// const Button = styled.button`
// background: ${props => props.primary ? "palevioletred" : "white"};
// color: ${props => props.primary ? "white" : "palevioletred"};

// font-size: 1em;
// margin: 1em;
// padding: 0.25em 1em;
// border: 2px solid palevioletred;
// border-radius: 3px;
// `;
// // 조건문으로 특정 props가 존재할 때만 스타일을 줄 수 있다.

// const TomatoButton = styled(Button)`
// color: tomato;
// border-color: tomato;
// `;
// // styled(컴포넌트?명)으로 이미 만들어 놓은 것에서 또 확장 가능

// const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />
// // children을 split로 한 글자씩 나눠서 reverse해 주는 함수

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
color: blue;

&:hover {
color: red; // <Thing> & = 자기 자신을 의미
  }

  & ~ & {
  background: tomato; // 일반 형제 결합자. 같은 부모를 공유하면서 첫번째 요소를 뒤따르는 모든 것
  }

  & + & {
  background: lime; // 인접 형제 결합자. & + & 여러개 있다면 첫번째 Thing에 인접해있는 모든 Thing
  }

  &.something {
  background: orange; // <Thing> 안에 .shomething 클래스를 가진 애
    }

    .something-else & {
    border: 1px solid; // ".something-else" 클래스 안에 있는 <Thing>
      }
      `

      const Input = styled.input.attrs(props => ({
      type: "text",
      size: props.size || "1em",
      }))`
      border: 2px solid palevioletred;
      margin: ${props => props.size};
      padding: ${props => props.size};
      `;

      // Input's attrs will be applied first, and then this attrs obj
      const PasswordInput = styled(Input).attrs({
      type: "password",
      })`
      // similarly, border will override Input's border
      border: 2px solid aqua;
      `;

      const rotate = keyframes`
      from {
      transform: rotate(0deg);
      }

      to {
      transform: rotate(360deg);
      }
      `;

      const Rotate = styled.div`
      display: inline-block;
      animation: ${rotate} 2000ms linear infinite;
      padding: 2rem 1rem;
      font-size: 1.2rem;
      `;

      const Button = styled.button`
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border-radius: 3px;

      color: ${props => props.theme.color};
      border: 2px solid ${props => props.theme.borderColor};
      `;

      // We are borderColor a default theme for Buttons that arent wrapped in the ThemeProvider
      Button.defaultProps = {
      theme: {
      color: "red",
      borderColor : "blue"
      }
      }

      // Define what props.theme will look like
      const defaulttheme = {
      color: "blue",
      borderColor : "blue"
      };

      const redTheme = {
      color: "red",
      borderColor : "red"
      }

      const GlobalStyle = createGlobalStyle`
      button {
      background-color: pink;
      }
      `

      export default function StyledComponentExample() {
      const [theme , setTheme] = useState(defaulttheme)

      return (
      <>
        {/* <>
          <Thing>Hello world!</Thing>
          <Thing>How ya doing?</Thing>
          <Thing className="something">The sun is shining...</Thing>
          <div>Pretty nice day today.</div>
          <Thing>Don't you think?</Thing>
          <div className="something-else">
            <Thing>Splendid.</Thing>
          </div>
        </> */}
        <>
        <GlobalStyle />
        <button onClick={()=> setTheme(redTheme)}>red</button>
        <button onClick={()=> setTheme(defaulttheme)}>green</button>

        <ThemeProvider theme={theme}>
          <Button>Normal</Button>
          <Button>Themed</Button>
        </ThemeProvider>
        </>
        <>
        <button>zz</button></>
        {/* <Input placeholder="A bigger text input" size="2em" />
        <br />
        <PasswordInput placeholder="A bigger password input" size="2em" />
        <br />
        <Rotate>&lt; 💅🏾 &gt;</Rotate> */}
        {/* <Wrapper>
          <Title>
            Hello World!
          </Title>
        </Wrapper>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <TomatoButton>퉘메이러 버른</TomatoButton>
        <br />
        <Button as="a" href="#">Link with Button styles</Button> */}
        {/* as="a"를 주면 내용물이 a태그로 묶임 */}
        {/* <Button as={ReversedButton}>로꾸꺼</Button> */}
        {/* as에 태그뿐 아니라 함수도 넣을 수 있다 */}
      </>
      )
      }