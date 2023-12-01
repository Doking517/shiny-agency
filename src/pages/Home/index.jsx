import '../../App.css'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import HomeImage from '../../assets/HomeImage.png'
import { Link } from 'react-router-dom'

const StyledHomeWrapper = styled.div`
  margin-top: 25px;
  margin-left: 65px;
  margin-right: 62px;
  width: 1313px;
  height: 824px;
  display: flex;
  background-color: ${colors.backgroundLight};
`

const StyledImageContainer = styled.div`
  width: 541px;
  height: 506px;
  padding-right: 77px;
  padding-top: 139px;
  padding-bottom: 179px;
`
const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px;  
    background-color: ${colors.primary};
    padding: 0 18px;
    width: 261px;
    height: 40px;
    margin-left: 91px;
    margin-top: 131px;
    `}
`

const StyledHomeHeader = styled.h1`
  margin-left: 98px;
  margin-top: 176px;
  width: 552px;
  height: auto;
  flex-shrink: 0;
  color: ${colors.lightTextColor};
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 80.25px;
`

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StyledHomeWrapper>
        <div>
          <StyledHomeHeader>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </StyledHomeHeader>
          <span>
            <StyledLink to={'/survey/1'} $isFullLink>
              Faire le test
            </StyledLink>
          </span>
        </div>
        <StyledImageContainer>
          <img src={HomeImage} alt="home message" />
        </StyledImageContainer>
      </StyledHomeWrapper>
    </div>
  )
}

export default Home
