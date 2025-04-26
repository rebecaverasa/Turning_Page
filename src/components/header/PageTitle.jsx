import styled from "styled-components/native";

const Container = styled.View`
    background-color: #F9F7F3;
`

const TitleText = styled.Text`
    font-size: 16px;
    color: #F9F7F3;
    font-family: 'YesevaOne';
    text-align: left;
    justify-content: center;
    margin-left: 13px;
    background-color: #A9A1A7;
    padding: 4px 8px;
    border-radius: 6px;
    align-self: flex-start;
    margin: 10px;
    margin-left: 20px;
`;

const PageTitle = ({ title }) => {
    return (
        <Container>
            <TitleText>{title}</TitleText>
        </Container>
    )
}

export default PageTitle;