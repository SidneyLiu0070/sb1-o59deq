export class LoadingHandler {
    constructor(svgObject, loadingSpinner) {
        this.svgObject = svgObject;
        this.loadingSpinner = loadingSpinner;
        this.initialize();
    }

    initialize() {
        this.svgObject.addEventListener('load', () => this.hideLoading());
        this.svgObject.addEventListener('error', () => this.hideLoading());
    }

    hideLoading() {
        this.loadingSpinner.style.display = 'none';
    }
}