import {Component} from 'angular2/core'
import {Pipeclass} from './powerPipe'
@Component({
    selector:'pipe-app',
    template:`
    <h1>Pipe</h1>
    {{msg |uppercase}}<br/>
    {{msg1 |lowercase}}<br/>
    {{msg2 |percent:2.2}}<br/><!-- will show two digit from decimal -->
    {{msg3 |json}}<br/>
    {{msg4 |date}}<br/>
    {{a|Power:b}}
    `,
    pipes:[Pipeclass]
})

export class Pipe {
    msg = "welcome"
    msg1 = "WELCOME"
    msg2 = .589
    msg3 = [{"id":233213,"name":"ram"}, {"id":3325325,"name":"amar"}]
    msg4 = new Date()
    a=20
    b=3

}