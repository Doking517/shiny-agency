import DefaultPicture from '../../assets/DefaultPicture.png'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'UX Designer',
    picture: DefaultPicture,
  },
  {
    name: 'Alexandra Dupont',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'Just-Donald',
    jobTitle: 'Développeur Fullstack',
    picture: DefaultPicture,
  },
]

const CardsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 70px;
  grid-row-gap: 52px;
  margin-bottom: 278px;
`
const StyledFreelanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledFreelanceHeader = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.lightTextColor};
  text-align: center;
  line-height: 39.75px;
`

const StyledTextWrapper = styled.div`
  display: flex;
  margin-top: 129px;
  flex-direction: column;
  margin-bottom: 97px;
  gap: 52px;
  justify-content: center;
  align-items: center;
`
const Paragraph = styled.p`
  color: #8186a0;
  font-size: 20px;
  font-weight: 700;
  widht: 1002px;
  line-height: 26.5px;
`

function Freelances() {
  return (
    <StyledFreelanceWrapper>
      <StyledTextWrapper>
        <StyledFreelanceHeader>Trouvez votre prestataire</StyledFreelanceHeader>
        <Paragraph style={{ color: '#8186A0' }}>
          Chez Shiny nous réunissons les meilleurs profils pour vous.
        </Paragraph>
      </StyledTextWrapper>
      <CardsContainer>
        {freelanceProfiles.map((freelance, index) => (
          <Card
            title={freelance.name}
            label={freelance.jobTitle}
            picture={freelance.picture}
            key={`${freelance.name}-${index}`}
          />
        ))}
      </CardsContainer>
    </StyledFreelanceWrapper>
  )
}

export default Freelances
