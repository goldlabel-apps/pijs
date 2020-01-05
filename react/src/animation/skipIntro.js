import { TimelineMax, Power2 } from "gsap";

const baseDuration = 1;

export function skipIntro(div) {
    const div = document.getElementById(div);
    const timeline = new TimelineMax();
    timeline.to(div, baseDuration * 0.5, {
        opacity: '0.5',
        ease: Power2.easeOut
    });

}
