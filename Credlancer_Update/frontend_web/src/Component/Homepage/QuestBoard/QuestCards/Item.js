import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: Hug(300px);
  width: 100%;
  color: #fff;
  margin: 0px;
  font-size: 1em;
`;

export const SubDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
width: 100%;
background-color: #E8EDF6;
color: #fff;
padding: 0 0px;
font-size: 1em;
`;

export const LeftDiv = styled.div`
display: flex;
justify-content: start;
align-items: center;
height: 25px;
width: 80%;
color: #321975;
margin: 0 0px 0px 10px;
font-size: 13px;
`;

export const RightDiv = styled.div`
display: flex;
justify-content:end;
align-items: center;
height: 25px;
width: 80%;
color: #321975;
margin: 0 10px 0px 0px;
font-size: 13xpx;
`;

export const ImgDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: Hug(350px);
width: 100%;
background-color: #E8EDF6;
color: #C7CA3C;
padding: 0px 0px 3px 0px;
font-size: 10px;
`;

const Titre = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
border: none;
color: #FFFF;
font-size: 10px;
`;


function Item({ Children, titre, IMG}) {
    return (
        <Container>
            <SubDiv>
                <LeftDiv>{Children} FIL</LeftDiv>
                <RightDiv>|   GMT</RightDiv>
            </SubDiv>
            <ImgDiv><img style={{width: '98%', height:'auto'}} src={IMG} alt='' /></ImgDiv>
            <Titre>
                <h2>{titre}</h2>
            </Titre>
        </Container>
    );
  }
  
  export default Item;