import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  width: 100%;
  color: #fff;
  font-size: 1em;
`;

export const SubDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
text-align: start;
color: #ffffff;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 10px;
width: 100%;
height: 100%;
background:  linear-gradient(180deg, #789CC8 0%, #2E5781 100%);
border-radius: 40px;
border: 8px solid rgba(128, 104, 255, 1);
`;

export const DivLogo = styled.div`
display: flex;
width: 100%;
align-items: center;
margin-top: 40px;
height: 60px;
justify-content: center;
`;

export const CardButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 80px;
`;

export const SubButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0px 0px 0px 10px;
width: 88%;
height: 100%;
gap: 5px;
text-align: center;
border-radius: 40px;
background: linear-gradient(90deg, rgba(143, 110, 255, 0.56) 1.31%, #6459FF 98.71%);
@media (max-width: 450px) {
    width: 100%;
    padding: 0px 0px 0px 5px;
  }

`;

const LogoButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
width: Hug(60px);
height: 50px;
border-radius: 500px;
background-color: #ffffff;
`;

const TitleButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 80%;
height: 50px;
border-radius: 40px;
font-size: 12px;
background-color: #E8EDF6;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
@media (max-width: 744px) {
    font-size: 10px;
  }
  @media (max-width: 420px) {
    font-size: 8px;
  }
`;

const   ParaDiv = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
margin-bottom:20px;
gap: 10px;
width: 100%;
height: 50px;
font-size: 13px;
@media (max-width: 420px) {
    margin-bottom:30px;
  }
`;


function CardsItem({ button, issue, hours, skills}) {
    return (
        <Container>
            <SubDiv>
                <DivLogo>
                <img style={{width:'100%', flexDirection: 'row' , height: 'Hug(80px)'}} src='./Images/LogoCC.svg' alt='' />
                </DivLogo>
                <CardButton>
                    <SubButton>
                        <LogoButton>
                            <img src='./Images/Picto.svg' alt='' style={{width: '100%', height: '100%'}}/>
                        </LogoButton>
                        <TitleButton>
                        <h1 style={{color: '#321975'}}>{button}</h1>
                        </TitleButton>
                    </SubButton>
                </CardButton>
                <ParaDiv>
                <p>Issued by: {issue}</p>
                            <p>Hours Completed: {hours}</p>
                            <p>Skills: {skills}</p>
                </ParaDiv>
            </SubDiv>
        </Container>
    );
  }
  
  export default CardsItem;