export const SalesList = {

  statusCode: 200,

  data: [
    {
      id: 0,
      name: 'Dashboard',
      icon: 'fa-cog',
      isActive: true,
      url: 'dashboard',
      subMenus: []
    },
    {
      id: 1,
      name: 'Center',
      icon: 'fa-building',
      isActive: true,
      url: 'center',
      subMenus: [
        {
          id: 0,
          name: 'Center List',
          url: '/sales-relation-officer/center-list',
          icon: 'fa-building',
          isActive: true,
        },
       
      ]
    },
    {
      id: 2,
      name: 'Product',
      icon: 'fa-list',
      isActive: true,
      url: 'product',
      subMenus: [
        {
          id: 1,
          name: 'Product Details',
          url: '/sales-relation-officer/product-details',
          icon: 'fa-building',
          isActive: true,
        },
      ]
    },
    {
      id: 3,
      name: 'Member',
      icon: 'fa-user',
      isActive: true,
      url: 'member',
      subMenus: [
        {
          id: 0,
          name: 'Member List',
          url: '/sales-relation-officer/member-list',
          icon: 'fa-users',
          isActive: true,
        },
        {
          id: 1,
          name: 'Member Contacts',
          url: '/sales-relation-officer/member-contacts',
          icon: 'fa-phone',
          isActive: true,
        },
        {
          id: 2,
          name: 'Kyc Failed Members',
          url: '/sales-relation-officer/kyc-failed-members',
          icon: 'fa-phone',
          isActive: true,
        },
        {
          id: 3,
          name: 'Validity Expiring',
          url: '/sales-relation-officer/validity-expiring-members',
          icon: 'fa-check',
          isActive: true,
        },
        {
          id: 4,
          name: 'Membership',
          url: '/sales-relation-officer/membership',
          icon: 'fa-check',
          isActive: true,
        },
        {
          id: 5,
          name: 'Membership History',
          url: '/sales-relation-officer/membership-history',
          icon: 'fa-check',
          isActive: true,
        },
        {
          id: 6,
          name: 'Renew Membership',
          url: '/sales-relation-officer/renew-membership',
          icon: 'fa-check',
          isActive: true,
        }
      ]
    },
    {
      id: 4,
      name: 'Order',
      icon: 'fa-pencil',
      isActive: true,
      url: 'order',
      subMenus: [
        {
          id: 0,
          name: 'New Order',
          url: '/sales-relation-officer/new-order',
          icon: 'fa-book',
          isActive: true,
        },
        {
          id: 1,
          name: 'Approval Pending Orders',
          url: '/sales-relation-officer/pending-orders',
          icon: 'fa-book',
          isActive: true,
        },
        {
          id: 2,
          name: 'Approved Order',
          url: '/sales-relation-officer/approved-order',
          icon: 'fa-book',
          isActive: true,
        },
        {
          id: 3,
          name: 'Dispatched Orders',
          url: '/sales-relation-officer/dispatched-orders',
          icon: 'fa-book',
          isActive: true,
        },
        {
          id: 4,
          name: 'Completed Orders',
          url: '/sales-relation-officer/completed-orders',
          icon: 'fa-book',
          isActive: true,
        }
      ]
    },
    {
      id: 5,
      name: 'Payment',
      icon: 'fa-money',
      isActive: true,
      url: 'payment',
      subMenus: [
        {
          id: 0,
          name: 'Payment Collection',
          icon: 'fa-money',
          url: '/sales-relation-officer/collections',
          isActive: true,
        },
        {
          id: 1,
          name: 'Collection History',
          url: '/sales-relation-officer/collection-history',
          icon: 'fa-money',
          isActive: true,
        },
        {
          id: 2,
          name: 'Centerwise Collection',
          url: '/sales-relation-officer/centerwise-collection',
          icon: 'fa-money',
          isActive: true,
        }
      ]
    },
    {
      id: 6,
      name: 'Return',
      icon: 'fa-undo',
      isActive: true,
      url: 'return',
      subMenus: [
        {
          id: 0,
          name: 'Start Return',
          url: '/sales-relation-officer/returnorder',
          icon: 'fa-undo',
          isActive: true,
        },
        {
          id: 1,
          name: 'Return History',
          url: '/sales-relation-officer/returnhistory',
          icon: 'fa-undo',
          isActive: true,
        },
      ]
    },
    {
      id: 7,
      name: 'Setting',
      icon: 'fa-cog',
      isActive: true,
      url: '/sales-relation-officer/setting',
      subMenus: []
    }
  ],
  message: null,
};



export const SalesManagerList = {

  statusCode: 200,

  data: [
    {
      id: 1,
      name: 'Dashboard',
      icon: 'fa-cog',
      isActive: true,
      url: 'dashboard',
      subMenus: []
    },
    {
      id: 2,
      name: 'Member',
      icon: 'fa-user',
      isActive: true,
      url: 'member',
      subMenus: [
        {
          id: 1,
          name: 'KYC',
          url: '/sales-manager-officer/member-kyc',
          icon: 'fa-check',
          isActive: true,
        },
        {
          id: 2,
          name: 'Validity Expiring',
          url: '/sales-manager-officer/validity-expiring-members',
          icon: 'fa-check',
          isActive: true,
        }
      ]
    },
    {
      id: 3,
      name: 'Users',
      icon: 'fa-user-circle',
      isActive: true,
      url: 'users',
      subMenus: [
        {
          id: 1,
          name: 'Kyc Failed Users',
          url: '/sales-manager-officer/kyc-failed-users',
          icon: 'fa-phone',
          isActive: true,
        }
      ]
    },
    {
      id: 4,
      name: 'Product',
      icon: 'fa-list',
      isActive: true,
      url: 'product',
      subMenus: [
        {
          id: 1,
          name: 'Product Details',
          url: '/sales-manager-officer/product-details',
          icon: 'fa-building',
          isActive: true,
        },
      ]
    },
    {
      id: 5,
      name: 'Order',
      icon: 'fa-pencil',
      isActive: true,
      url: 'order',
      subMenus: [
        {
          id: 0,
          name: 'Order Details',
          url: '/sales-manager-officer/order-details',
          icon: 'fa-book',
          isActive: true,
        },
        {
          id: 1,
          name: 'Approved Orders',
          url: '/sales-manager-officer/approved-order',
          icon: 'fa-book',
          isActive: true,
        },
        {
          id: 2,
          name: 'Dispatched Orders',
          url: '/sales-manager-officer/dispatched-orders',
          icon: 'fa-book',
          isActive: true,
        },
        {
          id: 3,
          name: 'Completed Orders',
          url: '/sales-manager-officer/completed-orders',
          icon: 'fa-book',
          isActive: true,
        }
      ]
    },
    {
      id: 6,
      name: 'Payment',
      icon: 'fa-money',
      isActive: true,
      url: 'payment',
      subMenus: [
        {
          id: 0,
          name: 'Collection History',
          url: '/sales-manager-officer/collection-history',
          icon: 'fa-money',
          isActive: true,
        },
        {
          id: 1,
          name: 'Centerwise Collection',
          url: '/sales-manager-officer/centerwise-collection',
          icon: 'fa-money',
          isActive: true,
        }
      ]
    },
    {
      id: 7,
      name: 'Return',
      icon: 'fa-undo',
      isActive: true,
      url: 'return',
      subMenus: [
        {
          id: 0,
          name: 'Returned Orders',
          url: '/sales-manager-officer/returned-orders',
          icon: 'fa-undo',
          isActive: true,
        },
        {
          id: 1,
          name: 'Return History',
          url: '/sales-manager-officer/returnhistory',
          icon: 'fa-undo',
          isActive: true,
        },
      ]
    }
  ],
  message: null,
};