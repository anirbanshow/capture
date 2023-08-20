import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimationControls } from 'framer-motion';

export const useScroll = () => {

    const controls = useAnimationControls();
    const [element, view] = useInView({ threshold: 0.3 });

    useEffect(() => {
        if (view) {
            controls.start("show");
        } else {
            controls.start("hidden");
        }
    }, [view]);

    return [element, controls];
}