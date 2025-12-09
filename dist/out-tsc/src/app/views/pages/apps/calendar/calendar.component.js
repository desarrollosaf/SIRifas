import { __decorate } from "tslib";
import { NgStyle } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { Draggable } from '@fullcalendar/interaction'; // for dateClick
import { INITIAL_EVENTS, createEventId } from './event-utils';
let CalendarComponent = class CalendarComponent {
    externalEvents;
    calendarOptions = {
        plugins: [
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            interactionPlugin
        ],
        headerToolbar: {
            left: 'prev,today,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        select: this.handleDateSelect.bind(this),
        eventClick: this.handleEventClick.bind(this),
        eventsSet: this.handleEvents.bind(this)
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
    };
    currentEvents = [];
    constructor() { }
    ngOnInit() {
        // For external-events dragging
        new Draggable(this.externalEvents.nativeElement, {
            itemSelector: '.fc-event',
            eventData: function (eventEl) {
                return {
                    title: eventEl.innerText,
                    backgroundColor: eventEl.getAttribute('bgColor'),
                    borderColor: eventEl.getAttribute('bdColor')
                };
            }
        });
    }
    handleDateSelect(selectInfo) {
        const title = prompt('Please enter a new title for your event');
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // clear date selection
        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
                backgroundColor: 'rgba(0,204,204,.25)',
                borderColor: '#00cccc'
            });
        }
    }
    handleEventClick(clickInfo) {
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove();
        }
    }
    handleEvents(events) {
        this.currentEvents = events;
    }
};
__decorate([
    ViewChild('externalEvents', { static: true })
], CalendarComponent.prototype, "externalEvents", void 0);
CalendarComponent = __decorate([
    Component({
        selector: 'app-calendar',
        imports: [
            NgStyle,
            FullCalendarModule
        ],
        templateUrl: './calendar.component.html',
        styleUrl: './calendar.component.scss'
    })
], CalendarComponent);
export { CalendarComponent };
//# sourceMappingURL=calendar.component.js.map