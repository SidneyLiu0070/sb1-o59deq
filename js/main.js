import { ZoomController } from './zoomController.js';
import { PanController } from './panController.js';
import { TouchController } from './touchController.js';
import { ErrorHandler } from './errorHandler.js';
import { LoadingHandler } from './loadingHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('svgWrapper');
    const svgObject = document.getElementById('svgObject');
    const loadingSpinner = document.getElementById('loadingSpinner');

    // Initialize controllers
    const zoomController = new ZoomController(wrapper);
    const panController = new PanController(wrapper);
    const touchController = new TouchController(wrapper, zoomController);
    const errorHandler = new ErrorHandler(svgObject);
    const loadingHandler = new LoadingHandler(svgObject, loadingSpinner);

    // Set up button controls
    document.getElementById('zoomInBtn').addEventListener('click', () => zoomController.zoomIn());
    document.getElementById('zoomOutBtn').addEventListener('click', () => zoomController.zoomOut());
    document.getElementById('resetBtn').addEventListener('click', () => {
        zoomController.reset();
        panController.reset();
    });
});