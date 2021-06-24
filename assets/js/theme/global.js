import $ from 'jquery';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import compareProducts from './global/compare-products';
import privacyCookieNotification from './global/cookieNotification';
import maintenanceMode from './global/maintenanceMode';
import carousel from './common/carousel';
import 'lazysizes';
import loadingProgressBar from './global/loading-progress-bar';
import sweetAlert from './global/sweet-alert';
import svgInjector from './global/svg-injector';
import newsletterPopup from './f/newsletter-popup';
import imageHover from './f/image-hover';
import 'simplebar';
import AOS from 'aos';

export default class Global extends PageManager {
    onReady() {
        // Only load visible elements until the onload event fires,
        // after which preload nearby elements.
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 1;

        cartPreview(this.context.secureBaseUrl);
        quickSearch();
        currencySelector();
        foundation($(document));
        quickView(this.context);
        compareProducts(this.context.urls);
        carousel();
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        maintenanceMode(this.context.maintenanceMode);
        loadingProgressBar();
        sweetAlert();
        if (this.context.enableNewsletterPopup) {
            newsletterPopup(this.context.newsletterPopupDelay, this.context.reappearAfter, this.context.pageType);
        }
        if (this.context.enableImageHoverSwitcher) {
            imageHover();
        }
        if (this.context.enableAnimations) {
            AOS.init();
        }
        svgInjector();

        $(document).scroll(() => {
            if ($(window).scrollTop() === 0) {
                $(document).foundation('topbar', 'reflow');
            }
        });

        $(document).foundation('equalizer', 'reflow');
    }
}
