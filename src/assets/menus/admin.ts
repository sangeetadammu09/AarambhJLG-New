export const AdminList = {

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
            name: 'Admin Master',
            icon: 'fa-users',
            isActive: true,
            url: 'admin',
            subMenus: [
                {
                    id: 0,
                    name: 'City',
                    url: '/admin/city',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 1,
                    name: 'Branch',
                    url: '/admin/branch',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 2,
                    name: 'Unit',
                    url: '/admin/unit',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 3,
                    name: 'Tax Slot',
                    url: '/admin/tax-slot',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 4,
                    name: 'Installments',
                    url: '/admin/installments',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 5,
                    name: 'Expense Type',
                    url: '/admin/expense-type',
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
                    name: 'Product Category',
                    url: '/product/product-category',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 1,
                    name: 'Product Brand',
                    url: '/product/product-brand',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 2,
                    name: 'Product List',
                    url: '/product/product-list',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 3,
                    name: 'Product Price',
                    url: '/product/product-price',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 4,
                    name: 'Product Details',
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
                    name: 'User List',
                    url: '/users/user-list',
                    icon: 'fa-user',
                    isActive: true,
                },
                {
                    id: 1,
                    name: 'User Role',
                    url: '/users/user-role',
                    icon: 'fa-user',
                    isActive: true,
                },
                {
                    id: 2,
                    name: 'User Contacts',
                    url: '/users/user-contacts',
                    icon: 'fa-phone',
                    isActive: true,
                },
                {
                    id: 2,
                    name: 'KYC',
                    url: '/users/user-kyc',
                    icon: 'fa-check',
                    isActive: true,
                },
                {
                    id: 2,
                    name: 'Kyc Failed Users',
                    url: '/users/kyc-failed-users',
                    icon: 'fa-phone',
                    isActive: true,
                }
            ]
        },
        {
            id: 4,
            name: 'Center',
            icon: 'fa-building',
            isActive: true,
            url: 'center',
            subMenus: [
                {
                    id: 0,
                    name: 'Center List',
                    url: 'center-list',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 0,
                    name: 'Assign Leader',
                    url: 'assign-leader',
                    icon: 'fa-user',
                    isActive: true,
                },
                {
                    id: 1,
                    name: 'Group-List',
                    url: 'group-list',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 2,
                    name: 'Member List',
                    url: 'member-list',
                    icon: 'fa-users',
                    isActive: true,
                },
                {
                    id: 2,
                    name: 'Member Contacts',
                    url: 'member-contacts',
                    icon: 'fa-phone',
                    isActive: true,
                }
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
                    name: 'Dispatched Orders',
                    url: 'dispatched-orders',
                    icon: 'fa-book',
                    isActive: true,
                },
                {
                    id: 1,
                    name: 'Completed Orders',
                    url: 'completed-orders',
                    icon: 'fa-book',
                    isActive: true,
                }
            ]
        },
        {
            id: 6,
            name: 'Payment',
            icon: 'fa-pencil',
            isActive: true,
            url: 'payment',
            subMenus: [
                {
                    id: 0,
                    name: 'Collection History',
                    url: 'collection-history',
                    icon: 'fa-money',
                    isActive: true,
                },
                {
                    id: 1,
                    name: 'Centerwise Collection',
                    url: 'centerwise-collection',
                    icon: 'fa-money',
                    isActive: true,
                }
            ]
        },
        {
            id: 7,
            name: 'Setting',
            icon: 'fa-cog',
            isActive: true,
            url: 'setting',
            subMenus: [
                {
                    id: 0,
                    name: 'Change Password',
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
            url: 'dashboard/',
            subMenus: []
        },
        {
            id: 1,
            name: 'Admin Master',
            icon: 'fa-users',
            isActive: true,
            url: 'admin',
            subMenus: [
                {
                    id: 0,
                    name: 'City',
                    url: '/super-admin/city',
                    icon: 'fa-building',
                    isActive: true,
                },
                {
                    id: 1,
                    name: 'Branch',
                    url: '/super-admin/branch',
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
                    name: 'Product Category',
                    url: '/super-admin/product-category',
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
                    name: 'Collection History',
                    url: '/super-admin/collection-history',
                    icon: 'fa-money',
                    isActive: true,
                },
                {
                    id: 1,
                    name: 'Centerwise Collection',
                    url: '/super-admin/centerwise-collection',
                    icon: 'fa-money',
                    isActive: true,
                }
            ]
        }
    ],
    message: null,
};