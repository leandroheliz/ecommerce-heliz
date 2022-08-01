import { StatusBar, SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import { Card } from 'react-native-paper'
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

export const BarSearch = styled(View)`
padding: ${(props) => props.theme.space[3]};
`;

export const StoreList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  }
})`
`;

export const StoreCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
margin-bottom: ${(props) => props.theme.space[4]};
`;

export const StoreCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[4]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Title = styled.Text`
font-family: ${(props) => props.theme.fonts.heading};
font-size: ${(props) => props.theme.fontSizes.body};
color: ${(props) => props.theme.colors.text.primary};
`;

export const Address = styled(Text)`
font-family: ${(props) => props.theme.fonts.body};
font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled(View)`
padding-left: ${(props) => props.theme.space[3]};
padding-rigth: ${(props) => props.theme.space[3]};
padding-bottom: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(View)`
flex-direction: row;
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled(View)`
flex-direction: row;
align-items: center;
`;

export const SectionEnd = styled(View)`
flex: 1;
flex-direction: row;
justify-content: flex-end;
`;

export const Icon = styled(Image)`
width: 25px;
height: 25px;
margin-left: ${(props) => props.theme.space[3]};
`;