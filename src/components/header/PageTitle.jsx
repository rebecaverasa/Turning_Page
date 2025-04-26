import { View } from "react-native";
import styled from "styled-components/native";

const TitleText = styled.Text`
  font-size: 15px;
  color: #FFF;
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
        <View>
            <TitleText>{title}</TitleText>
        </View>
    )
}

export default PageTitle;