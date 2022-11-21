import { debounce } from "lodash";
import { ElementType, useEffect, useState } from "react";

type TProps = {
  targetEl: any;
  cb: (mutationList: any[], observer: any) => void;
  options: {
    config: {
      subtree?: boolean;
      childList?: boolean;
      attributes?: boolean;
      characterData?: boolean;
      attributeFilter?: string[];
      attributeOldValue?: boolean;
      characterDataOldValue?: boolean;
    };
    debounceTime?: number;
  };
};

export const useMutationObservable = ({ targetEl, cb, options }: TProps) => {
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const { debounceTime } = options;
    const obs = new MutationObserver(
      debounceTime ? debounce(cb, debounceTime) : cb
    );
    setObserver(obs);
  }, [cb, options, setObserver]);

  useEffect(() => {
    if (!observer) return;
    const { config } = options;
    try {
      observer.observe(targetEl, config);
    } catch (e) {
      console.error(e);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [observer, targetEl, options]);
};
