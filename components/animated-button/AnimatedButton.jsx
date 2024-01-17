import { animatedButton, clip, left, left1, left2, left3 } from './AnimatedButton.module.scss';

function AnimatedButton({ className, text, ...contexts }) {
    return <button className={[animatedButton, className].join(' ')} { ...contexts }>
        <span className={[clip, left, left1].join(' ')}>{text}</span>
        <span className={[clip, left, left2].join(' ')}>{text}</span>
        <span className={[clip, left, left3].join(' ')}>{text}</span>
        <p>{text}</p>
    </button>
};

export default AnimatedButton;