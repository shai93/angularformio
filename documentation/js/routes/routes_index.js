var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","component":"AppComponent","children":[{"path":"","redirectTo":"/notification-control-panel/notificationdemo","pathMatch":"full"},{"path":"notification-control-panel","loadChildren":"./emailnotification/emailnotification.module#EmailnotificationModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/emailnotification/emailnotification-routing.module.ts","module":"EmailnotificationRoutingModule","children":[{"path":"","component":"EmailnotificationComponent"}],"kind":"module"}],"module":"EmailnotificationModule"}]},{"path":"notification-control-panel/createagent","loadChildren":"./agents/agents.module#AgentsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/agents/agents-routing.module.ts","module":"AgentsRoutingModule","children":[{"path":"","component":"AgentsComponent"}],"kind":"module"}],"module":"AgentsModule"}]},{"path":"notification-control-panel/agentslist","loadChildren":"./agents/agentlist/agentlist.module#AgentslistModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/agents/agentlist/agentlist-routing.module.ts","module":"AgentslistRoutingModule","children":[{"path":"","component":"AgentslistComponent"}],"kind":"module"}],"module":"AgentslistModule"}]},{"path":"notification-control-panel/updateagent","loadChildren":"./agents/agentupdate/agentupdate.module#AgentupdateModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/agents/agentupdate/agentupdate-routing.module.ts","module":"AgentupdateRoutingModule","children":[{"path":"","component":"AgentupdateComponent"}],"kind":"module"}],"module":"AgentupdateModule"}]},{"path":"notification-control-panel/updateagent/:alertName","loadChildren":"./agents/agentupdate/agentupdate.module#AgentupdateModule","children":[{"kind":"module","children":[],"module":"AgentupdateModule"}]},{"path":"notification-control-panel/serviceconf","loadChildren":"./serviceconf/serviceconf.module#ServiceconfModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/serviceconf/serviceconf-routing.module.ts","module":"ServiceconfRoutingModule","children":[{"path":"","component":"ServiceconfComponent"}],"kind":"module"}],"module":"ServiceconfModule"}]},{"path":"notification-control-panel/notificationdemo","loadChildren":"./emailnotification/emailnotification.module#EmailnotificationModule","children":[{"kind":"module","children":[],"module":"EmailnotificationModule"}]}]}],"kind":"module"}]}