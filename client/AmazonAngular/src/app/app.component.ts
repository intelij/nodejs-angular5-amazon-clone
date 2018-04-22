import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    searchTerm = '';
    isCollapsable = true;

    get token() {
        return localStorage.getItem('token');
    }

    collapse() {
        this.isCollapsable = true;
    }

    closeDropdown(dropdown) {
        dropdown.close();
    }

    logout() {}

    search() {}

}
