import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';

const uri = 'http://localhost:3333/graphql';

// initialise cache configuration
export function createApollo(httpLink: HttpLink): ApolloClientOptions<unknown> {
  const linkObject =  {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
  return linkObject;
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})

export class GraphQLModule {}