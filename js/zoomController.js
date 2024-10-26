export class ZoomController {
    constructor(element) {
        this.element = element;
        this.currentZoom = 1;
        this.ZOOM_STEP = 0.1;
        this.MIN_ZOOM = 0.5;
        this.MAX_ZOOM = 2;

        // Add wheel zoom support
        this.element.addEventListener('wheel', (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
                const delta = e.deltaY > 0 ? -1 : 1;
                if (delta > 0) this.zoomIn();
                else this.zoomOut();
            }
        });
    }

    zoomIn() {
        if (this.currentZoom < this.MAX_ZOOM) {
            this.currentZoom += this.ZOOM_STEP;
            this.updateZoom();
        }
    }

    zoomOut() {
        if (this.currentZoom > this.MIN_ZOOM) {
            this.currentZoom -= this.ZOOM_STEP;
            this.updateZoom();
        }
    }

    reset() {
        this.currentZoom = 1;
        this.updateZoom();
    }

    updateZoom() {
        const matrix = window.getComputedStyle(this.element).transform;
        const currentTransform = new DOMMatrix(matrix);
        this.element.style.transform = `scale(${this.currentZoom}) translate(${currentTransform.e}px, ${currentTransform.f}px)`;
    }
}