export const AdminList = {

    statusCode: 200,

    data: [
        {
            id: 1,
            name: 'Dashboard',
            icon: 'fa-cog',
            isActive: true,
            url: 'dashboard/',
            subMenus: []
        },
        {
            id: 1,
            name: 'Admin Master',
            icon: 'fa-users',
            isActive: true,
            url: 'admin-master',
            subMenus: [
                {
                    id: 0,
                    menu: 'City',
                    url: '/admin-master/city',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 1,
                    menu: 'Branch',
                    url: '/admin-master/branch',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 2,
                    menu: 'Unit',
                    url: '/admin-master/unit',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 3,
                    menu: 'Tax Slot',
                    url: '/admin-master/tax-slot',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 4,
                    menu: 'Installments',
                    url: '/admin-master/installments',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 5,
                    menu: 'Expense Type',
                    url: '/admin-master/expense-type',
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
                    id: 0,
                    menu: 'Product Category',
                    url: '/product/product-category',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 1,
                    menu: 'Product Brand',
                    url: '/product/product-brand',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 2,
                    menu: 'Product List',
                    url: '/product/product-list',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 3,
                    menu: 'Product Price',
                    url: '/product/product-price',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 4,
                    menu: 'Product Details',
                    url: '/product/product-details',
                    icon: 'fa-building',
                    isActive: true,
                },
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
                    id: 0,
                    menu: 'User List',
                    url: '/users/user-list',
                    icon: 'fa-user',
                    isActive: true,
                },
                {
                    id: 1,
                    menu: 'User Role',
                    url: '/users/user-role',
                    icon: 'fa-user',
                    isActive: true,
                },
                {
                    id: 2,
                    menu: 'User Contacts',
                    url: '/users/user-contacts',
                    icon: 'fa-phone',
                    isActive: true,
                },
                {
                    id: 2,
                    menu: 'KYC',
                    url: '/users/user-kyc',
                    icon: 'fa-check',
                    isActive: true,
                },
                {
                    id: 2,
                    menu: 'Kyc Failed Users',
                    url: '/users/kyc-failed-users',
                    icon: 'fa-phone',
                    isActive: true,
                }
            ]
        },
        {
            id: 3,
            name: 'Center',
            icon: 'fa-building',
            isActive: true,
            url: 'center',
            subMenus: [
                {
                    id: 0,
                    menu: 'Center List',
                    url: 'center-list',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 0,
                    menu: 'Assign Leader',
                    url: 'assign-leader',
                    icon: 'fa-user',
                    isActive: true,
                },
                {
                    id: 1,
                    menu: 'Group-List',
                    url: 'group-list',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 2,
                    menu: 'Member List',
                    url: 'member-list',
                    icon: 'fa-users',
                    isActive: true,
                },
                {
                    id: 2,
                    menu: 'Member Contacts',
                    url: 'member-contacts',
                    icon: 'fa-phone',
                    isActive: true,
                }
            ]
        },
        {
            id: 1,
            name: 'Order',
            icon: 'fa-pencil',
            isActive: true,
            url: 'order',
            subMenus: [
                {
                    id: 0,
                    menu: 'Dispatched Orders',
                    url: 'dispatched-orders',
                    icon: 'fa-book',
                    isActive: true,
                },
                {
                    id: 1,
                    menu: 'Completed Orders',
                    url: 'completed-orders',
                    icon: 'fa-book',
                    isActive: true,
                }
            ]
        },
        {
            id: 1,
            name: 'Payment',
            icon: 'fa-pencil',
            isActive: true,
            url: 'payment',
            subMenus: [
                {
                    id: 0,
                    menu: 'Collection History',
                    url: 'collection-history',
                    icon: 'fa-money',
                    isActive: true,
                },
                {
                    id: 1,
                    menu: 'Centerwise Collection',
                    url: 'centerwise-collection',
                    icon: 'fa-money',
                    isActive: true,
                }
            ]
        },
        {
            id: 1,
            name: 'Setting',
            icon: 'fa-cog',
            isActive: true,
            url: 'setting',
            subMenus: [
                {
                    id: 0,
                    menu: 'Change Password',
                    url: 'change-password',
                    icon: 'fa-wrench',
                    isActive: true,
                }
            ]
        }
    ],
    message: null,
};


export const SuperAdminList = {

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
            id: 1,
            name: 'Admin Master',
            icon: 'fa-users',
            isActive: true,
            url: 'admin-master',
            subMenus: [
                {
                    id: 0,
                    menu: 'City',
                    url: 'city',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 1,
                    menu: 'Branch',
                    url: 'branch',
                    icon: 'fa-building',
                    isActive: true,
                }

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
                    id: 0,
                    menu: 'Product Category',
                    url: 'product-category',
                    icon: 'fa-building',
                    isActive: true,
                }

            ]
        },
        {
            id: 1,
            name: 'Payment',
            icon: 'fa-pencil',
            isActive: true,
            url: 'payment',
            subMenus: [
                {
                    id: 0,
                    menu: 'Collection History',
                    url: 'collection-history',
                    icon: 'fa-money',
                    isActive: true,
                },
                {
                    id: 1,
                    menu: 'Centerwise Collection',
                    url: 'centerwise-collection',
                    icon: 'fa-money',
                    isActive: true,
                }
            ]
        }
    ],
    message: null,
};