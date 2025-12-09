import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
let NavbarComponent = class NavbarComponent {
    router;
    themeModeService;
    currentTheme;
    constructor(router, themeModeService) {
        this.router = router;
        this.themeModeService = themeModeService;
    }
    ngOnInit() {
        this.themeModeService.currentTheme.subscribe((theme) => {
            this.currentTheme = theme;
            this.showActiveTheme(this.currentTheme);
        });
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
     * Toggle the sidebar when the hamburger button is clicked
     */
    toggleSidebar(e) {
        e.preventDefault();
        document.body.classList.add('sidebar-open');
        document.querySelector('.sidebar .sidebar-toggler')?.classList.add('active');
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
};
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        imports: [
            NgbDropdownModule,
            RouterLink
        ],
        templateUrl: './navbar.component.html',
        styleUrl: './navbar.component.scss'
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map