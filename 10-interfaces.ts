/**
 * inline interface
 * @param labeledObj 
 */
function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" }; 

printLabel(myObj);

/**
 * same example above using interface with a name
 */
interface LabeledObj {
    label: string;
}

function printLabelObject(label: LabeledObj) {
    console.log(label);
}

let label = {label: "This is a label", name: "This object respects the LabeledObj contract"};
printLabelObject(label);

/**
 * optional properties
 */
interface Config {
    color?: string;
    width?: number;
}

function getConfig(config: Config) : {color:string, width: number} {
    let defaultConfig = {color: "black", width: 100};

    if(config.color)
        defaultConfig.color = config.color;

    if(config.width)
        defaultConfig.width = config.width;

    console.log(defaultConfig);

    return defaultConfig;
}

let configuration = getConfig({color:"green"});

/**
 * readonly properties are modifieable when an object is first created
 */
interface Point {
    readonly x: number;
    readonly y: number;
}
let p: Point = {x:10, y:25};
console.log(p);
// p.x = 100; // this throws an error
