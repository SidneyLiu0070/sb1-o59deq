export class PanController {
    constructor(element) {
        this.element = element;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.translateX = 0;
        this.translateY = 0;

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.element.addEventListener('mousedown', (e) => this.startDragging(e));
        document.addEventListener('mousemove', (e) => this.drag(e));
        document.addEventListener('mouseup', () => this.stopDragging());
        
        // Prevent default drag behavior
        this.element.addEventListener('dragstart', (e) => e.preventDefault());
    }

    startDragging(e) {
        this.isDragging = true;
        this.startX = e.clientX - this.translateX;
        this.startY = e.clientY - this.translateY;
        this.element.style.cursor = 'grabbing';
    }

    drag(e) {
        if (!this.isDragging) return;

        e.preventDefault();
        this.translateX = e.clientX - this.startX;
        this.translateY = e.clientY - this.startY;
        
        const matrix = window.getComputedStyle(this.element).transform;
        const currentTransform = new DOMMatrix(matrix);
        const scale = currentTransform.a;
        
        this.element.style.transform = `scale(${scale}) translate(${this.translateX}px, ${this.translateY}px)`;
    }

    stopDragging() {
        this.isDragging = false;
        this.element.style.cursor = 'grab';
    }

    reset() {
        this.translateX = 0;
        this.translateY = 0;
        const matrix = window.getComputedStyle(this.element).transform;
        const currentTransform = new DOMMatrix(matrix);
        const scale = currentTransform.a;
        this.element.style.transform = `scale(${scale}) translate(0px, 0px)`;
    }
}