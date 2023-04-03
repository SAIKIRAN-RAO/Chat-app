import styled from "styled-components";

const Container = styled.div`
 display : flex;
 flex-direction : column;
 height: 100%;
 width: 100%;
 flex : 1.6;
`;

const ProfileInfo = styled.div`
display : flex;
flex-direction : row;
background: #ededed;
padding: 15px;
`;

const ProfileImage = styled.img`
width : 30px;
height: 30px;
border-radius : 50%;
`;

const SearchBox = styled.div`
background: #f61f6f6;
padding: 15px;

`;

const SearchContainer = styled.div`
 display: flex;
 flex-direction: row;
 background: white;
 border-radius: 16px;
 width: 100%;
 padding: 5px 10px;

`;

const SearchIcon = styled.img`
 width:30px;
 height:30px;
`;

const SearchInput = styled.input`
 width: 100%
 outline:none;
 border:none;
 font-size:15px;

`;

const ContactItem = styled.div`
display:flex;
flex-direction: row;
width: 100%;
border-bottom: 1px solid #f2f2f2;
background: white;
cursor: pointer;
padding: 15px 12px;
`;



const ContactComponent = () =>{
    return <ContactItem>"ContactComponent"</ContactItem>
};


const ContactListComponents = ()=>{
    return (
    <Container>
         <ProfileInfo>
         <ProfileImage src ="/profile/pic1.jpg"/>
         </ProfileInfo>

         <SearchBox>
         <SearchContainer>
         <SearchIcon src = "/profile/search img.jpg"/>   
         <SearchInput placeholder="Start new chat"/>
         </SearchContainer>
         </SearchBox>
         <ContactComponent/>
         </Container>


    );
    };
    export default ContactListComponents;