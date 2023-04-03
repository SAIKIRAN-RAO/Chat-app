import styled from "styled-components";
import ContactListComponent from "./components/ContactListComponent";
import ConversationComponent from "./components/ConversationComponent";


const Conainer = styled.div`
display : flex;
flex-direction: row;
height: 100vh;
width: 100%
background: #f8f9fb;
`;


function App() {
  return (
    <Conainer>
    <ContactListComponent/>
    <ConversationComponent/>
    </Conainer>
  );
}

export default App;
