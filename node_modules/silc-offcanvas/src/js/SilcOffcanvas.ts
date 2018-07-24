export default class {
	
    protected trigger: HTMLElement;
	protected target: Element;

	/**
	 * Constructor
	 * @param element 
	 */
    public constructor(element: HTMLElement)
    {
		// Shortcut to trigger
        this.trigger = element;

		// Get target element
		this.target = this.getTarget(this.trigger);

		// Event listener for trigger
		if(this.target !== undefined) {
			this.trigger.addEventListener('click', e => {
				this.toggle(e);
			});
		}
    }

	/**
	 * Get target element for trigger
	 * @param trigger 
	 */
	protected getTarget(trigger: HTMLElement) {

		if(!trigger.hasAttribute('href')) {
			console.log('silc offcanvas: Trigger is missing href attribute');
			return undefined;
		}
		
		let targetSelector = trigger.getAttribute('href');
		let targetEl = document.querySelector(targetSelector);

		if(targetEl === undefined) {
			console.log('silc offcanvas: Target element ' + targetSelector + ' does not exist');
		}

		return targetEl;
	}

	/**
	 * Stop target iframe videos from playing
	 * @param target 
	 */
	protected stopIframeVideo(target: Element) {
		[].forEach.call(target.querySelectorAll('iframe'), el => {
			let src = el.getAttribute('src');
			el.setAttribute('src', src);
		});
	}

	/**
	 * Toggle visibility of the target
	 * @param event 
	 */
	protected toggle(event) {

		event.preventDefault();

		if(this.target.classList.contains('silc-offcanvas--visible')) {
			this.stopIframeVideo(this.target);
		}

		this.target.classList.toggle('silc-offcanvas--visible');
	}
}
