import React, {useEffect} from "react";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { useWindowDimensions,ScrollView } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { useSelector, useDispatch } from 'react-redux';
import { getLessonDetail } from '../../redux/actions';

function Learning({ route, navigation }) {
 
  const { width } = useWindowDimensions();
  const { dataLessonShowNow, lessonDetaiLLyThuyet } = useSelector(state => state.mainReducer);
  const dispatch = useDispatch();

  const fetchLessonDetail = (lessonId) => dispatch(getLessonDetail(lessonId));

  const [lesson, setLesson] = React.useState(null);
  
  useEffect(() => {
    let { lesson } = route.params;
    setLesson(lesson);
    fetchLessonDetail(lesson);
  }, [route.params]);

  return (
    
    <Container>
        <Header style={{backgroundColor:'#d1a0a7'}}>
            <Left>
              <Button 
              onPress={() => ( navigation.goBack())}
              transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Trang học lý thuyết</Title>
            </Body>
            <Right>
              <Button
              onPress={() => ( navigation.openDrawer() )}
              transparent>
                <Icon name='menu' />
              </Button>
            </Right>
        </Header>
        
        <ScrollView>
          {
            lessonDetaiLLyThuyet.noidung_lythuyet?
            <RenderHtml
                contentWidth={width}
                source={{ html: lessonDetaiLLyThuyet.noidung_lythuyet }}
            />: null
          }
            
            {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop:10 }}>
                <Text style={{flex:1,fontSize: 26, color: "#000", alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                    {dataLessonShowNow.ten_lythuyet} 
                </Text> 
                <Text style={{flex:9 , fontSize: 18, marginHorizontal: '3%', color: "#000"}}>
                    {lessonDetaiLLyThuyet.noidung_lythuyet}
                </Text>
            </View> */}
        </ScrollView>
    </Container>
    
  );
}
export default Learning;
