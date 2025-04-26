import styled from "styled-components/native";

const Container = styled.View`
    background-color: #F9F7F3;
`

const TitleText = styled.Text`
    text-align: left;
    justify-content: center;
    align-self: flex-start;
    margin: 10px;
    margin-left: 20px;
    border-radius: 50px;
    padding: 4px 16px;
    font-family: 'YesevaOne';
    font-size: 16px;
    color: #F9F7F3;
    background-color: #A9A1A7;
`;

const PageTitle = ({ title }) => {
    return (
        <Container>
            <TitleText>{title}</TitleText>
        </Container>
    )
}

export default PageTitle;