import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

import styles from './Transition.module.scss';

type AnimtaionName =
  | 'zoom-in-top'
  | 'zoom-in-left'
  | 'zoom-in-bottom'
  | 'zoom-in-right';

type TransitionProps = CSSTransitionProps & {
  animation?: AnimtaionName;
  wrapper?: boolean;
  className?: string;
};

const Transition = (props: TransitionProps) => {
  const { className, children, animation, wrapper, ...restProps } = props;

  return (
    <CSSTransition
      classNames={cn(styles.Transition, className, animation)}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
};

export default Transition;
