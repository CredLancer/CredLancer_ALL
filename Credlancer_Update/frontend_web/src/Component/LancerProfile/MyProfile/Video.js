import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFile } from '@fortawesome/free-regular-svg-icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: Hug(300px);
  width: 80%;
  color: #fff;
  border: 7px solid rgb(0, 0, 0);
  margin: 0px;
  font-size: 1em;
`;

export const SubDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 40px;
width: 100%;
background-color: #000000;
color: #fff;
font-size: 1em;
`;

export const LeftDiv = styled.div`
display: flex;
justify-content: start;
align-items: center;
height: 25px;
gap: 5px;
width: Hug(100p);
color: #FFFFFF;
margin: 0 0px 0px 10px;
font-size: 13px;
`;

export const RightDiv = styled.div`
display: flex;
justify-content:end;
align-items: center;
height: Hug(100px);
width: Hug(100px);
color: #FFFFFF;
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
background-color: #CE4CDF;
padding: 15px 15px 15px 15px;
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


function Video({IMG}) {
    return (
        <Container>
            <SubDiv>
                <LeftDiv><FontAwesomeIcon icon={faCircle} /><FontAwesomeIcon icon={faCircle} /><FontAwesomeIcon icon={faCircle} /></LeftDiv>
                <div>Video intro</div>
                <RightDiv><FontAwesomeIcon icon={faFile} /></RightDiv>
            </SubDiv>
            <ImgDiv><img style={{width: '98%', height:'auto', border: '1px solid rgb(0, 0, 0)'}} src={IMG} alt='' /></ImgDiv>
        </Container>
    );
  }
  
  export default Video;