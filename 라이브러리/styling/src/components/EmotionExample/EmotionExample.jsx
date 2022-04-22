/** @jsxImportSource @emotion/react */
import {css, Global, keyframes, ClassNames} from '@emotion/react'
import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const style = css`
  color: hotpink;
`

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
)

const anotherStyle = css({
  textDecoration: 'underline'
})

const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
)

const P = props => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: '1.5',
      fontFamily: 'Sans-Serif',
      color: 'black'
    }}
    {...props} // <- props contains the `className` prop
  />
)

const ArticleText = props => (
  <P
    css={{
      fontSize: 14,
      fontFamily: 'Georgia, serif',
      color: 'darkgray',
      border : "1px solid black"
    }}
    {...props} // <- props contains the `className` prop
  />
)
// 이미 만들어진 P를 확장해서 그 안에서 몇개의 스타일만 바꿀 수 있음

const danger = css`
  color: red;
`

const base = css`
  background-color: darkgreen;
  color: turquoise;
`
// 이렇게 style={}에 넣을 수 있는 변수로 만드는 법도 있다

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

let SComponent = props => (
  <div className={props.wrapperClassName}>
    in the wrapper!
    <div className={props.className}>{props.children}</div>
  </div>
)

export default function EmotionExample() {

  const color = 'white'

  return (
    <>
    <ClassNames>
    {({ css, cx }) => (
      <SComponent
        wrapperClassName={css({ color: 'green' })}
        className={css`
          color: hotpink;
        `}
      >
        from children!!
      </SComponent>
    )}
  </ClassNames>
    <Global
      styles={css`
        .some-class {
          color: blue !important;
        }
      `}
    />
    <div className="some-class">This is hotpink now!</div>
    <div
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    이모션으로 만든 거
  </div>
  <Button>스타일드로 만든 버튼</Button>
  <div
    css={css`
      animation: ${bounce} 1s ease infinite;
    `}
  >
    some bouncing text!
  </div>
  <SomeComponent>
    <AnotherComponent />
  </SomeComponent>
  <P>ㅋㅋ</P>
  <ArticleText>ㅋㅋ</ArticleText>
  <>
    <div css={base}>This will be turquoise</div>
    <div css={[danger, base]}>
      This will be also be turquoise since the base styles overwrite the danger
      styles.
    </div>
    <div css={[base, danger]}>This will be red</div>
  </>
  <p
    css={css`
      font-size: 30px;
      transition : 2000ms;
      @media (min-width: 720px) {
        font-size: 50px;
      }
    `}
  >
    Some text!
  </p>
  </>
  )
}
