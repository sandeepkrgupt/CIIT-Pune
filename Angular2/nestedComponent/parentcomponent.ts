import {Component} from 'angular2/core'
import {childClass} from './childcomponent'
@Component({
    selector:'parent-app',
    template:`
    <child-app></child-app>
    `,
    directives:[childClass]
})

export class parentClass {
    
}