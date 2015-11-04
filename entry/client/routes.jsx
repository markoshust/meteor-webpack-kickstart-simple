ReactRouterSSR.Run({
  childRoutes: [
    require('FooApp/client'),
    require('FooAdminApp/client')
  ]
});
