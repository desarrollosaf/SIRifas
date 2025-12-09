import { __decorate, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { NavigationEnd, RouterLink } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import MetisMenu from 'metismenujs';
import { MENU } from './menu';
import { FeatherIconDirective } from '../../../core/feather-icon/feather-icon.directive';
let SidebarComponent = class SidebarComponent {
    document;
    renderer;
    sidebarToggler;
    menuItems = [];
    sidebarMenu;
    constructor(document, renderer, router) {
        this.document = document;
        this.renderer = renderer;
        router.events.forEach((event) => {
            if (event instanceof NavigationEnd) {
                /**
                 * Activating the current active item dropdown
                 */
                this._activateMenuDropdown();
                /**
                 * closing the sidebar
                 */
                if (window.matchMedia('(max-width: 991px)').matches) {
                    this.document.body.classList.remove('sidebar-open');
                }
            }
        });
    }
    ngOnInit() {
        this.menuItems = MENU;
        /**
         * Sidebar-folded on desktop (min-width:992px and max-width: 1199px)
         */
        const desktopMedium = window.matchMedia('(min-width:992px) and (max-width: 1199px)');
        desktopMedium.addEventListener('change', () => {
            this.iconSidebar;
        });
        this.iconSidebar(desktopMedium);
    }
    ngAfterViewInit() {
        // activate menu items
        new MetisMenu(this.sidebarMenu.nativeElement);
        this._activateMenuDropdown();
    }
    /**
     * Toggle the sidebar when the hamburger button is clicked
     */
    toggleSidebar(e) {
        this.sidebarToggler.nativeElement.classList.toggle('active');
        if (window.matchMedia('(min-width: 992px)').matches) {
            e.preventDefault();
            this.document.body.classList.toggle('sidebar-folded');
        }
        else if (window.matchMedia('(max-width: 991px)').matches) {
            e.preventDefault();
            this.document.body.classList.toggle('sidebar-open');
        }
    }
    /**
     * Open the sidebar on hover when it is in a folded state
     */
    operSidebarFolded() {
        if (this.document.body.classList.contains('sidebar-folded')) {
            this.document.body.classList.add("open-sidebar-folded");
        }
    }
    /**
     * Fold sidebar after mouse leave (in folded state)
     */
    closeSidebarFolded() {
        if (this.document.body.classList.contains('sidebar-folded')) {
            this.document.body.classList.remove("open-sidebar-folded");
        }
    }
    /**
     * Sidebar folded on desktop screens with a width between 992px and 1199px
     */
    iconSidebar(mq) {
        if (mq.matches) {
            this.document.body.classList.add('sidebar-folded');
        }
        else {
            this.document.body.classList.remove('sidebar-folded');
        }
    }
    /**
     * Returns true or false depending on whether the given menu item has a child
     * @param item menuItem
     */
    hasItems(item) {
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }
    /**
     * Reset the menus, then highlight the currently active menu item
     */
    _activateMenuDropdown() {
        this.resetMenuItems();
        this.activateMenuItems();
    }
    /**
     * Resets the menus
     */
    resetMenuItems() {
        const links = document.getElementsByClassName('nav-link-ref');
        for (let i = 0; i < links.length; i++) {
            const menuItemEl = links[i];
            menuItemEl.classList.remove('mm-active');
            const parentEl = menuItemEl.parentElement;
            if (parentEl) {
                parentEl.classList.remove('mm-active');
                const parent2El = parentEl.parentElement;
                if (parent2El) {
                    parent2El.classList.remove('mm-show');
                }
                const parent3El = parent2El?.parentElement;
                if (parent3El) {
                    parent3El.classList.remove('mm-active');
                    if (parent3El.classList.contains('side-nav-item')) {
                        const firstAnchor = parent3El.querySelector('.side-nav-link-a-ref');
                        if (firstAnchor) {
                            firstAnchor.classList.remove('mm-active');
                        }
                    }
                    const parent4El = parent3El.parentElement;
                    if (parent4El) {
                        parent4El.classList.remove('mm-show');
                        const parent5El = parent4El.parentElement;
                        if (parent5El) {
                            parent5El.classList.remove('mm-active');
                        }
                    }
                }
            }
        }
    }
    ;
    /**
     * Toggles the state of the menu items
     */
    activateMenuItems() {
        const links = document.getElementsByClassName('nav-link-ref');
        let menuItemEl = null;
        for (let i = 0; i < links.length; i++) {
            // tslint:disable-next-line: no-string-literal
            if (window.location.pathname === links[i]['pathname']) {
                menuItemEl = links[i];
                break;
            }
        }
        if (menuItemEl) {
            menuItemEl.classList.add('mm-active');
            const parentEl = menuItemEl.parentElement;
            if (parentEl) {
                parentEl.classList.add('mm-active');
                const parent2El = parentEl.parentElement;
                if (parent2El) {
                    parent2El.classList.add('mm-show');
                }
                const parent3El = parent2El.parentElement;
                if (parent3El) {
                    parent3El.classList.add('mm-active');
                    if (parent3El.classList.contains('side-nav-item')) {
                        const firstAnchor = parent3El.querySelector('.side-nav-link-a-ref');
                        if (firstAnchor) {
                            firstAnchor.classList.add('mm-active');
                        }
                    }
                    const parent4El = parent3El.parentElement;
                    if (parent4El) {
                        parent4El.classList.add('mm-show');
                        const parent5El = parent4El.parentElement;
                        if (parent5El) {
                            parent5El.classList.add('mm-active');
                        }
                    }
                }
            }
        }
    }
    ;
};
__decorate([
    ViewChild('sidebarToggler')
], SidebarComponent.prototype, "sidebarToggler", void 0);
__decorate([
    ViewChild('sidebarMenu')
], SidebarComponent.prototype, "sidebarMenu", void 0);
SidebarComponent = __decorate([
    Component({
        selector: 'app-sidebar',
        imports: [
            RouterLink,
            // RouterLinkActive,
            NgScrollbar,
            // NgClass,
            FeatherIconDirective,
        ],
        templateUrl: './sidebar.component.html',
        styleUrl: './sidebar.component.scss'
    }),
    __param(0, Inject(DOCUMENT))
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map