import React from 'react';
import { 
  createRouter, 
  createRoute, 
  createRootRoute, 
  RouterProvider, 
  Outlet 
} from '@tanstack/react-router';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/home/Footer';
import { Home } from './pages/Home';
import { InvestmentProgram } from './pages/InvestmentProgram';

// Create a root route
const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  ),
});

// Create routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const investirRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/invertir',
  component: InvestmentProgram,
});

// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute, investirRoute]);

// Create the router
const router = createRouter({ routeTree });

// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
