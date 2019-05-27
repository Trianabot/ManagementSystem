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

// var role = localStorage.getItem('role');    
// //console.log(role); 
// this.role = role;
// console.log(this.rule);


export const navItems: NavData[] = [
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
    name:'Employee',
    url:'/employee',
    icon: 'icon-drop'
  }, 
  {
    name : 'Designation',
    url: '/designation',
    icon: 'icon-drop'
  },
  {
    name : 'Department',
    url: '/department',
    icon: 'icon-drop'
  },
  {
    name : 'Shift',
    url: '/shift',
    icon: 'icon-drop'
  } 
];
