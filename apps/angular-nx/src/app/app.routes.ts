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
            import("libs/domains/customers/src").then((m) => m.Customers),
    },
    {
        path: "products",
        title: "Products",
        loadComponent: () =>
            import("libs/domains/products/src").then((m) => m.Products),
    },
];
