const targetDate = '2023-09-27T19:00:00';

function getTimeSegmentElements(segmentElement){
    const segmentDisplay = segmentElement.querySelector(
        '.segment-display'
    );
    const segmentDisplayTop = segmentDisplay.querySelector(
    '.segment-display__top'
    );
    const segmentDisplayBottom = segmentDisplay.querySelector(
        '.segment-display__bottom'
        );
    const segmentOverlay = segmentDisplay.querySelector(
        '.segment-overlay'
    );
    const segmentOverlayTop = segmentOverlay.querySelector(
    '.segment-overlay__top'
    );
    const segmentOverlayBottom = segmentOverlay.querySelector(
        '.segment-overlay__bottom'
        );

        return {
            segmentDisplayTop,
            segmentDisplayBottom,
            segmentOverlay,
            segmentOverlayTop,
            segmentOverlayBottom
        };
}

function updateSegmentValues(displayElement, overlayElement, value) {
    displayElement.textContent = value;
    overlayElement.textContent = value;
}

function updateTimeSegment(segmentElement, timeValue) {
     const segmentElements = getTimeSegmentElements(segmentElement)

     segmentElements.segmentOverlay.classList.add('flip');


};