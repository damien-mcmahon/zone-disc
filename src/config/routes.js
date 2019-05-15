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

export const SERVICE_PARTY = {
    path: '/party/:id',
    label: 'Service Account',
    icon: 'wrench'
}

const ROUTES = {
    HOME,
    CREATE_PARTY,
    SERVICE_PARTY,
    CREATE_PARTY_CONFIRMATION
};

    

export default ROUTES;