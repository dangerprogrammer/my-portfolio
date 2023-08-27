import { backgroundCanvas } from './BackgroundCanvas.module.scss';

function BackgroundCanvas() {
    return <main className={backgroundCanvas}>
        <canvas id="background-canvas"/>
    </main>
};

export default BackgroundCanvas;