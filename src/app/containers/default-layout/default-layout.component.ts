import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}
export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {

  public role: any;
  public navItems = [];
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(@Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
    // this.dashboardData.ngOnInit()
  }

  ngOnInit() {
    this.role = localStorage.getItem('role');
    this.getsideMenus();


  }

  getsideMenus() {

    if (this.role == 'HR') {
      this.navItems = [
        {
          name: 'Dashboard',
          url: '/dashboard',
          icon: 'icon-speedometer'
        },
        {
          name: 'demo',
          url: '/demo',
          icon: 'icon-drop'
        },
        {
          name: 'Employee',
          url: '/employee',
          icon: 'icon-drop'
        },
        {
          name: 'Designation',
          url: '/designation',
          icon: 'icon-drop'
        },
        {
          name: 'Department',
          url: '/department',
          icon: 'icon-drop'
        },
        {
          name: 'Shift',
          url: '/shift',
          icon: 'icon-drop'
        }
      ];
    } else {
      this.navItems = [
        {
          name: 'Dashboard',
          url: '/dashboard',
          icon: 'icon-speedometer'
        },
        {
          name: 'demo',
          url: '/demo',
          icon: 'icon-drop'
        }
      ]
    }

  }


  ngOnDestroy(): void {
    this.changes.disconnect();
  }


}
