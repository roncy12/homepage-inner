import PageManager from './page-manager';
import swatchPreview from './f/swatch-preview';
import sizePreview from './f/size-preview';

export default class Home extends PageManager {
    onReady() {
        // Load swatches onto product grid if enabled
        window.onload = () => {
            if (this.context.enableSwatches) {
                // window.onload is not being picked up by Safari,
                // but it is stopping the page delay at least for now.
                swatchPreview();
            }

            if (this.context.enableSizes) {
                // window.onload is not being picked up by Safari,
                // but it is stopping the page delay at least for now.
                sizePreview();
            }
        };
    }
}
