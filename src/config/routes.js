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

export const SERVICE_PARTY_ID = {
    path: '/party/:id',
    label: 'Account Maintenance',
    icon: 'wrench'
};

export const replaceParam = (path, val, REPLACE_REG_EX = /:([\w]+)/gim) => path.replace(REPLACE_REG_EX, val);

const ROUTES = {
    HOME,
    CREATE_PARTY,
    SERVICE_PARTY_ID,
    CREATE_PARTY_CONFIRMATION
};

    

export default ROUTES;