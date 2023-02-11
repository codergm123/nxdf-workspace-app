import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Button } from '../styled/Button';
import { ViewRow } from '../styled/View';
import { Image } from '../styled/Image';
import { Text } from '../styled/Text';
import { isEmpty } from '../../utils/functions';
import icon_back_white from '../../assets/common/icon_back_white.png';

// isLeftButton : 좌측 버튼 활성화
// leftButtonImage : 좌측 버튼 이미지
// onPressLeft : 좌측 버튼 리턴 함수
// isRightButton : 우측 버튼 활성화
// rightButtonImage : 우측 버튼 이미지
// onPressRight : 우측 버튼 리턴 함수
// title : 타이틀
// titleColor : 타이틀색
// isLine : 라인
// lineColor : 라인색
// backGroundColor : 배경색

const Topbar = (props) => {
  const lineColor = props.lineColor || { brIceBlue: true };
  const titleColor = props.titleColor || { ftDarkNavy: true };

  // 뒤로가기
  const onPressLeft = () => {
    if (isEmpty(props.onPressLeft)) {
      Actions.pop();
    } else {
      props.onPressLeft();
    }
  };

  return (
    <>
      <ViewRow
        width={'100%'}
        alignItems={'center'}
        paddingTop={20}
        paddingBottom={10}
        bgNavyTheme
      >
        <Button
          paddingLeft={30}
          paddingRight={30}
          width={26}
          height={'150%'}
          disabled={!props.isLeftButton}
          onPress={onPressLeft}
          alignSelf={'center'}
        >
          {props.isLeftButton && (
            <Image
              width={25}
              height={25}
              source={
                isEmpty(props.leftButtonImage)
                  ? icon_back_white
                  : props.leftButtonImage
              }
            />
          )}
        </Button>
        <Text ftWhite fontSize={18}>
          {props.title}
        </Text>
      </ViewRow>
    </>
  );
};

export default Topbar;
