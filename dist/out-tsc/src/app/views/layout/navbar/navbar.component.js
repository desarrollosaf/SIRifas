import { __decorate } from "tslib";
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgClass } from '@angular/common';
import { MENU } from './menu';
import { FeatherIconDirective } from '../../../core/feather-icon/feather-icon.directive';
let NavbarComponent = class NavbarComponent {
    router;
    themeModeService;
    currentTheme;
    menuItems = [];
    currentlyOpenedNavItem;
    constructor(router, themeModeService) {
        this.router = router;
        this.themeModeService = themeModeService;
    }
    ngOnInit() {
        this.themeModeService.currentTheme.subscribe((theme) => {
            this.currentTheme = theme;
            this.showActiveTheme(this.currentTheme);
        });
        this.menuItems = MENU;
        /**
         * Close the header menu after a route change on tablet and mobile devices
         */
        // if (window.matchMedia('(max-width: 991px)').matches) {
        this.router.events.forEach((event) => {
            if (event instanceof NavigationEnd) {
                document.querySelector('.horizontal-menu .bottom-navbar')?.classList.remove('header-toggled');
                document.querySelector('[data-toggle="horizontal-menu-toggle"]')?.classList.remove('open');
                document.body.classList.remove('header-open');
            }
        });
        // }
    }
    showActiveTheme(theme) {
        const themeSwitcher = document.querySelector('#theme-switcher');
        const box = document.querySelector('.box');
        if (!themeSwitcher) {
            return;
        }
        // Toggle the custom checkbox based on the theme
        if (theme === 'dark') {
            themeSwitcher.checked = true;
            box.classList.remove('light');
            box.classList.add('dark');
        }
        else if (theme === 'light') {
            themeSwitcher.checked = false;
            box.classList.remove('dark');
            box.classList.add('light');
        }
    }
    /**
     * Change the theme on #theme-switcher checkbox changes
     */
    onThemeCheckboxChange(e) {
        const checkbox = e.target;
        const newTheme = checkbox.checked ? 'dark' : 'light';
        this.themeModeService.toggleTheme(newTheme);
        this.showActiveTheme(newTheme);
    }
    /**
     * Logout
     */
    onLogout(e) {
        e.preventDefault();
        localStorage.setItem('isLoggedin', 'false');
        if (localStorage.getItem('isLoggedin') === 'false') {
            this.router.navigate(['/auth/login']);
        }
    }
    /**
     * Fixed header menu on scroll
     */
    getScrollHeight() {
        if (window.matchMedia('(min-width: 992px)').matches) {
            let header = document.querySelector('.horizontal-menu');
            if (window.pageYOffset >= 60) {
                header.parentElement.classList.add('fixed-on-scroll');
            }
            else {
                header.parentElement.classList.remove('fixed-on-scroll');
            }
        }
    }
    /**
     * Returns true or false depending on whether the given menu item has a child
     * @param item menuItem
     */
    hasItems(item) {
        return item.subMenus !== undefined ? item.subMenus.length > 0 : false;
    }
    /**
     * Toggle the header menu on tablet and mobile devices
     */
    toggleHeaderMenu() {
        // document.querySelector('.horizontal-menu .bottom-navbar')!.classList.toggle('header-toggled');
        const horizontalMenuToggleButton = document.querySelector('[data-toggle="horizontal-menu-toggle"]');
        const bottomNavbar = document.querySelector('.horizontal-menu .bottom-navbar');
        if (!bottomNavbar?.classList.contains('header-toggled')) {
            bottomNavbar?.classList.add('header-toggled');
            horizontalMenuToggleButton?.classList.add('open');
            document.body.classList.add('header-open'); // Used to create a backdrop"
        }
        else {
            bottomNavbar?.classList.remove('header-toggled');
            horizontalMenuToggleButton?.classList.remove('open');
            document.body.classList.remove('header-open');
        }
    }
    // Show or hide the submenu on mobile and tablet devices when a nav-item is clicked
    toggleSubmenuOnSmallDevices(navItem) {
        if (window.matchMedia('(max-width: 991px)').matches) {
            if (this.currentlyOpenedNavItem === navItem) {
                this.currentlyOpenedNavItem = undefined;
            }
            else {
                this.currentlyOpenedNavItem = navItem;
            }
        }
    }
};
__decorate([
    HostListener('window:scroll', ['$event'])
], NavbarComponent.prototype, "getScrollHeight", null);
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        standalone: true,
        imports: [
            NgbDropdownModule,
            FeatherIconDirective,
            RouterLink,
            RouterLinkActive,
            NgClass
        ],
        templateUrl: './navbar.component.html',
        styleUrl: './navbar.component.scss'
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map