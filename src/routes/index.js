import { App, HelloWorldComponent, PageNotFoundComponent } from '../App';

export const routes = {
  path: '/',
  component: App,
  indexRoute: { component: HelloWorldComponent },
  childRoutes: [
    // "anything match"
    { path: '*', component: PageNotFoundComponent }
  ]
};

export default routes;