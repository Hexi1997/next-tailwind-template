import { useNProgress } from '@tanem/react-nprogress';
import cn from 'classnames';
import React from 'react';
interface LoadingBarProps {
  className?: string;
  isRouteChanging: boolean;
}

export function LoadingBar(props: LoadingBarProps) {
  const { className, isRouteChanging } = props;
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging
  });

  return (
    <>
      <style jsx={true}>{`
        .container {
          opacity: ${isFinished ? 0 : 1};
          pointerevents: none;
          transition: opacity ${animationDuration}ms linear;
        }
        .bar {
          background: #03d34a;
          height: 2px;
          left: 0;
          margin-left: ${(-1 + progress) * 100}%;
          position: fixed;
          top: 0;
          transition: margin-left ${animationDuration}ms linear;
          width: 100%;
          z-index: 1000;
        }
        .spinner {
          box-shadow: 0 0 10px #03d34a, 0 0 5px #03d34a;
          display: block;
          height: 100%;
          opacity: 1;
          position: absolute;
          right: 0;
          transform: rotate(3deg) translate(0px, -4px);
          width: 100px;
        }
      `}</style>
      <div className={cn('container', className)}>
        <div className="bar">
          <div className="spinner" />
        </div>
      </div>
    </>
  );
}
