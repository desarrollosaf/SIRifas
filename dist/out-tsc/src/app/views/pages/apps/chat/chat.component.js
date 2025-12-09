import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NgbDropdownModule, NgbNavModule, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
let ChatComponent = class ChatComponent {
    defaultNavActiveId = 1;
    ngAfterViewInit() {
        // Show chat-content when clicking on chat-item for tablet and mobile devices
        document.querySelectorAll('.chat-list .chat-item').forEach(item => {
            item.addEventListener('click', event => {
                document.querySelector('.chat-content').classList.toggle('show');
            });
        });
    }
    // back to chat-list for tablet and mobile devices
    backToChatList() {
        document.querySelector('.chat-content').classList.toggle('show');
    }
    save() {
        console.log('passs');
    }
};
ChatComponent = __decorate([
    Component({
        selector: 'app-chat',
        imports: [
            NgbNavModule,
            NgbDropdownModule,
            NgScrollbarModule,
            NgbTooltip
        ],
        templateUrl: './chat.component.html',
        styleUrl: './chat.component.scss'
    })
], ChatComponent);
export { ChatComponent };
//# sourceMappingURL=chat.component.js.map