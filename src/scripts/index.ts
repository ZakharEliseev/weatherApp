import { Calendar } from "./calendarManager";
class App {

  private calendar = new Calendar();

  init() {
    this.calendar.renderCalendar();
  }
}


const app = new App();
app.init();