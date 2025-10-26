import { Route } from '@angular/router';
import { Home } from './home/home';

export const appRoutes: Route[] = [
    {
        path: "",
        title: "Home",
        component: Home,
    },
    {
        path: "customers",
        title: "Customers",
        loadComponent: () =>
            import("@angular-nx/customers").then((m) => m.Customers),
    },
    {
        path: "products",
        title: "Products",
        loadComponent: () =>
            import("@angular-nx/products").then((m) => m.Products),
    },
];
