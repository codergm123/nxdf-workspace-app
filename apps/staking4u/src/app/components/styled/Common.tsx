export const colors = {
  NavyTheme: '#121232',
  YellowTheme: '#ffcc00',
  Gray: '#808080',
  LightGray: '#bcbfcf', // rgb 188 191 207
  BlueGray: '#9196af', // rgb 145 150 175
  White: '#ffffff',
  LightWhite: '#fffef8',
  PurpleWhite: '#fdf8ff',
  LightNavy: '#2c315f',
  FontNavy: '#242955', // font에서 사용하는 navy : rgb 36 41 85
  Mint: '#00cda2', // rgb 0 205 162
  Black: '#2d2433',
  LightBlack: '#363243',
  Danger: '#CC0000',
  Success: '#007E33',
  Warning: '#ffbb33',
  LineNavy: '#1d2049', // Line용 Navy : rgb 29 32 73
  DeepBlue: '#313867', // rgb 49 56 103
  LightGreen: '#00c893',
  LightRed: '#ff5b4b',
  LightPurple: '#5629fb', // rgb 86 41 251
  RedeemBox: 'rgba(255, 76, 57, 0.52)',
  RewardsBox: 'rgba(255, 204, 0, 0.52)',
  StakeBox: 'rgba(0, 200, 145, 0.52)',
  // Theme: '#272433',
  // White: '#ffffff',
  // WhiteAlpha: '#ffffff60',
  // DarkNavy: '#162037',
  // LightGray: '#7d798b',
  // LightBlueyGray: '#c8cfd9',
  // DarkYellow: '#ffa050',
  // BlueyGray: '#9fa6b2',
  // WhiteGray: '#f8f9fc',
  // PressedGray: '#d7deea',
  Green: '#00d3a7',
  WhiteBlue: '#d6e0ff',
  PastelBlue: '#a9b3ff',
  // Gray: '#767b80',
  // DarkGray: '#494556',
  // IceBlue: '#edeff2',
  // ErrorRed: '#fa3e4b',
  // BackgroundGray: '#f6f8fa',
  // LightPink: '#ffd9dc',
  // Purple: '#6b5dff',
  // LightPurple: '#fdf8ff',
  // DeepBlue: '#0024a2',
  // Brown: '#b26035',
  // RrighGray: '#a7a2b6',
};

// colors 적용 함수 프레임
const colorFrame = (props, keyword, defaultColor) => {
  const colorsKeys = Object.keys(colors);
  const propsKeys = Object.keys(props);

  const filter = colorsKeys.filter((data) => {
    // props로 받은 색상이 colors에 존재하는지 검증
    if (propsKeys.includes(`${keyword}${data}`)) {
      // props 해당 컬러 value값이 true일 경우에만 colors색상 반환
      return props[`${keyword}${data}`];
    }
  });

  return filter.length ? colors[filter[0]] : defaultColor;
};

// background color
export const BACKGROUND_COLOR = (props) => {
  return colorFrame(props, 'bg', 'transparent');
};

// border color
export const BORDER_COLOR = (props) => {
  return colorFrame(props, 'br', 'transparent');
};

// font color
export const FONT_COLOR = (props) => {
  return colorFrame(props, 'ft', '#000000');
};

//margin
export const MARGIN_TOP = (props) => {
  return props.marginTop || '0';
};
export const MARGIN_LEFT = (props) => {
  return props.marginLeft || '0';
};
export const MARGIN_RIGHT = (props) => {
  return props.marginRight || '0';
};
export const MARGIN_BOTTOM = (props) => {
  return props.marginBottom || '0';
};

//padding
export const PADDING_TOP = (props) => {
  return props.paddingTop || '0';
};
export const PADDING_LEFT = (props) => {
  return props.paddingLeft || '0';
};
export const PADDING_RIGHT = (props) => {
  return props.paddingRight || '0';
};
export const PADDING_BOTTOM = (props) => {
  return props.paddingBottom || '0';
};

//border width
export const BORDER_LEFT_WIDTH = (props) => {
  return props.borderLeftWidth || '1px';
};
export const BORDER_RIGHT_WIDTH = (props) => {
  return props.borderRightWidth || '1px';
};
export const BORDER_BOTTOM_WIDTH = (props) => {
  return props.borderBottomWidth || '1px';
};
export const BORDER_TOP_WIDTH = (props) => {
  return props.borderTopWidth || '1px';
};

//font
export const FONT_SIZE = (props) => {
  if (props.ftVerySmall) {
    return '9px';
  } else if (props.ftSmall) {
    return '13px';
  } else if (props.ftLarge) {
    return '18px';
  } else if (props.ftBigLarge) {
    return '28px';
  } else if (props.fontSize) {
    return props.fontSize;
  } else {
    return '15px';
  }
};
export const FONT_WEIGHT = (props) => {
  if (props.bold) {
    return 'bold';
  } else {
    return 'normal';
  }
};
