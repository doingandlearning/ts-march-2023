import { EffectCallback, useEffect } from "react";

const useEffectOnce = (effect: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
};

type Effect = (...args: unknown[]) => void;

export const useMount = (fn: Effect) => {
  useEffectOnce(() => {
    fn();
  });
};
