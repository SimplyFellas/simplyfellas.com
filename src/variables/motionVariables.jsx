import { delay, stagger } from "motion";
import { feGaussianBlur } from "motion/react-client";

export let containerAnimation = {
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(.25),
    },
  },
  hide: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  }
};

export let sectionsAnimation = {
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.5),
      type: "spring",
      duration: 3
    },
  },
  hide: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  }
};

export let itemAnimation = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
    }
  },
  hide: {
    opacity: 0,
    y: -24,
  },
  exit: {
    opacity: 0,
    y: 24,
  }
};

export let delayedItemAnimation = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: .5
    }
  },
  hide: {
    opacity: 0,
    y: -12,
  },
};

export const viewportConfig = { once: false, amount: "some" };
