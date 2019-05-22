export const HOME = {
    path: "/",
    label: "Dashboard",
    icon: 'grip-horizontal',
}

export const CREATE_PARTY = {
    path: '/party/create',
    label: 'Create Account',
    icon: 'plus-square'
};

export const CREATE_PARTY_CONFIRMATION = {
    path: '/party/create/success',
    label: 'Account Created',
    icon: 'plus-square'
};

export const ACCOUNT_MAINTENANCE = {
    path: '/maintenance',
    icon: 'wrench',
    label: 'Account Maintenance'
};

export const ACCOUNT_MAINTENANCE_ID = {
    path: '/maintenance/:id',
    label: 'Account Maintenance',
    icon: 'wrench'
};

export const ACCOUNT_EDIT = {
    path: '/maintenance/:id/edit',
};

export const ACCOUNT_PRODUCTS = {
    path: '/maintenance/:id/products',
}

export const ACCOUNT_TEMPLATE_CONFIG = {
    path: '/maintenance/:id/products/config',
};

export const PRODUCT_CHECKLIST = {
    path: '/maintenance/:id/checklist'
};

export const replaceParam = (path, val, REPLACE_REG_EX = /:([\w]+)/gim) => path.replace(REPLACE_REG_EX, val);

const ROUTES = {
    ACCOUNT_MAINTENANCE,
    ACCOUNT_MAINTENANCE_ID,
    HOME,
    CREATE_PARTY,
    CREATE_PARTY_CONFIRMATION
};

    

export default ROUTES;