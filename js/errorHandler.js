export class ErrorHandler {
    constructor(svgObject) {
        this.svgObject = svgObject;
        this.errorMessage = document.querySelector('.error-message');
        this.initialize();
    }

    initialize() {
        this.svgObject.addEventListener('error', () => this.handleError());
        window.addEventListener('offline', () => this.handleOffline());
    }

    handleError() {
        this.errorMessage.style.display = 'block';
        console.error('Failed to load SVG workflow diagram');
    }

    handleOffline() {
        this.errorMessage.style.display = 'block';
        this.errorMessage.innerHTML = `
            <h3>Network Connection Lost</h3>
            <p>Please check your internet connection and try again.</p>
            <button onclick="window.location.reload()">Retry</button>
        `;
    }
}