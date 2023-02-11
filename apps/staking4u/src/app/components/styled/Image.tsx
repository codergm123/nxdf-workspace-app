import styled from 'styled-components/native';
import * as Common from './Common';

export const Image = styled.Image((props) => ({
  // size
  width: props.width || '100%',
  height: props.height || '100%',

  // margin
  marginLeft: Common.MARGIN_LEFT(props),
  marginRight: Common.MARGIN_RIGHT(props),
  marginTop: Common.MARGIN_TOP(props),
  marginBottom: Common.MARGIN_BOTTOM(props),

  resizeMode: props.resizeMode ? props.resizeMode : 'cover',
  justifyContent: props.justifyContent || 'center',

  // background
  backgroundColor: Common.BACKGROUND_COLOR(props),

  //ftcolor
  color: Common.FONT_COLOR(props)
}));

export const ImageAbsolute = styled(Image)((props) => ({
  position: 'absolute',
  alignSelf: props.alignSelf || 'flex-start',
  top: props.top || 'auto',
  left: props.left || 'auto',
}));
