import React from 'react';
import debounce from 'lodash.debounce';
import { isEmpty } from '../../utils/functions';

const preventDoubleClick = (WrappedComponent): any => {
  class preventDoubleClick extends React.PureComponent {
    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress();
    };

    // isFast props가 존재 할 경우 빠른 버튼
    timeSet = () => {
      return isEmpty(this.props.isFast) ? 300 : 0;
    };

    onPress = debounce(this.debouncedOnPress, this.timeSet(), {
      leading: true,
      trailing: false,
    });
    static displayName: string; // added for ts

    render() {
      return <WrappedComponent {...this.props} onPress={this.onPress} />;
    }
  }
  preventDoubleClick.displayName = `withPreventDoubleClick(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;
  return preventDoubleClick;
};

export default preventDoubleClick;
