export class TouchController {
    constructor(element, zoomController) {
        this.element = element;
        this.zoomController = zoomController;
        this.touchDistance = 0;
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.element.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        this.element.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        this.element.addEventListener('touchend', () => this.handleTouchEnd());
    }

    handleTouchStart(e) {
        if (e.touches.length === 2) {
            this.touchDistance = this.getTouchDistance(e.touches);
        }
    }

    handleTouchMove(e) {
        if (e.touches.length === 2) {
            e.preventDefault();
            const newDistance = this.getTouchDistance(e.touches);
            const delta = newDistance - this.touchDistance;
            
            if (Math.abs(delta) > 10) {
                if (delta > 0) {
                    this.zoomController.zoomIn();
                } else {
                    this.zoomController.zoomOut();
                }
                this.touchDistance = newDistance;
            }
        }
    }

    handleTouchEnd() {
        this.touchDistance = 0;
    }

    getTouchDistance(touches) {
        return Math.hypot(
            touches[0].clientX - touches[1].clientX,
            touches[0].clientY - touches[1].clientY
        );
    }
}