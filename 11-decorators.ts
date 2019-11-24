/**
 * Decorators are a new feature of Typescript
 * They may be implemented in ES7
 * Customize classes at design-time
 * They are functions that add meta-data
 * You can decorate class, methods, constructors
 * More examples here: https://www.typescriptlang.org/docs/handbook/decorators.html
 * @param target
 */
function aAdecorator(target) {
    console.log('running decorator');
    Object.defineProperty(target.prototype, 'course', {value: () => "Angular Course"});
}

@aAdecorator
class StudentObj {
    protected firstName: string;

    constructor(firstName: string) {
        this.firstName = firstName;
    }
}

let adrian = new StudentObj("Adrian");
console.log(adrian.course());

/**
 * decoratars like in Angular
 */
function Component(config) {
    return (target) => {
        console.log('running Angular-like decorator');
        Object.defineProperty(target.prototype, 'whatIsThis', {value: () => config.value}); 
    }
}

@Component({
    value: "This is a decorator"
})
class AComponent {

}
let c = new AComponent;
console.log(c.whatIsThis());