import styled from 'styled-components/native';
import * as Common from './Common';

export const Text = styled.Text((props) => ({
  width: props.width || 'auto',
  height: props.height || 'auto',

  // font
  fontSize: Common.FONT_SIZE(props),
  fontWeight: Common.FONT_WEIGHT(props),

  // color
  backgroundColor: Common.BACKGROUND_COLOR(props),
  color: Common.FONT_COLOR(props),
  borderColor: Common.BORDER_COLOR(props),

  // margin
  marginLeft: Common.MARGIN_LEFT(props),
  marginRight: Common.MARGIN_RIGHT(props),
  marginTop: Common.MARGIN_TOP(props),
  marginBottom: Common.MARGIN_BOTTOM(props),

  // padding
  paddingLeft: Common.PADDING_LEFT(props),
  paddingRight: Common.PADDING_RIGHT(props),
  paddingTop: Common.PADDING_TOP(props),
  paddingBottom: Common.PADDING_BOTTOM(props),

  // align
  textAlign: props.textAlign || 'left',

  // text Line
  textDecoration: props.textDecoration || 'none',

  // lineHeight
  lineHeight: props.lineHeight || null,

  //borderRadius
  borderRadius: props.borderRadius || 0,

  borderTopWidth: props.borderTopWidth,
  borderRightWidth: props.borderRightWidth,
  borderBottomWidth: props.borderBottomWidth,
}));
