import {TweenMax, Linear} from "gsap";

export function runTweenCycle(speed, radius) {
  TweenMax.staggerFromTo(
    ".blob",
    speed,
    {
      cycle: {
        attr: function (i) {
          var r = i * 90;
          return {
            transform:
              "rotate(" +
              r +
              ") translate(" +
              radius +
              ",0.1) rotate(" +
              -r +
              ")",
          };
        },
      },
    },
    {
      cycle: {
        attr: function (i) {
          var r = i * 90 + 360;
          return {
            transform:
              "rotate(" +
              r +
              ") translate(" +
              radius +
              ",0.1) rotate(" +
              -r +
              ")",
          };
        },
      },
      ease: Linear.easeNone,
      repeat: -1,
    }
  );
}
