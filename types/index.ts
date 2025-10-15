export interface User {
    id: string
    name: string
    role: 'Buyer' | 'Seller' | 'QC Agent' | 'Admin'
    status: 'Active' | 'Locked' | 'Pending' | 'Suspended'
    lastLogin: string
  }
  
  export interface NewUser {
    name: string
    email: string
    role: string
    phone: string
  }
  
  export interface Stat {
    label: string
    value: string
    icon: any
    trend: 'up' | 'down'
    trendValue: string
    color: 'warning' | 'success' | 'info' | 'danger'
  }
  
  export interface NotificationState {
    show: boolean
    message: string
    type: 'success' | 'error' | 'warning'
  }
  
  export interface QuickAction {
    icon: any
    title: string
    desc: string
    color: string
  }