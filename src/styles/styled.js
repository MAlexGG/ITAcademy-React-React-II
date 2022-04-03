import styled from 'styled-components';

export const CtClientBudget = styled.div`
    display: flex;
`;

export const CtBudget = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 0px 0px 100px;
    width: 30vw;
`;

export const InputClient = styled.input`
    width: 285px;
    height: 25px;
    margin-bottom: 15px;
`;

export const Panell = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid black;
    border-radius: 10px;
    padding: 30px;
    width: 275px;
    margin-top: 15px;
    margin-bottom: 15px;    
`;

export const InputPanell = styled.input`
    width: 25px;
    height: 25px;
    border: none;
    text-align: center;
    :focus {
        outline: none;
        border: 2px solid black;
        border-radius: 5px;
    }
`;

export const ButtonPanell = styled.button`
    width: 30px;
    height: 30px;
    background: #ff8c77;
    border: none;
    border-radius: 5px;
    color: white;
    margin: 5px;
    font-weight: bold;
    cursor: pointer;
`;

export const CtButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 195px;
`;

export const BtForm = styled.button`
    width: 90px;
    background-color: #ff8c77;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
`;


export const BtInfo = styled.button`
    width: 20px;
    background-color: #bfbcbc;
    height: 20px;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: .7rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
}
`;

export const CtPopUp = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #8080808c;
    top: 0%;
    left: 0%;
    cursor: pointer;
    display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
`;


export const Popup = styled.div`
    background-color: white;
    border: 3px solid black;
    padding: 20px;
    width: 45%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    position: absolute;
    top: 450px;
    left: 100px;
`;

