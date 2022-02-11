import styled from 'styled-components';

const ModalWrapper = styled.div`
position: fixed;
top: 0;
left: 0; 
background-color: rgba(0, 0, 0, 0.5);
z-index: 1000;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export default ModalWrapper;