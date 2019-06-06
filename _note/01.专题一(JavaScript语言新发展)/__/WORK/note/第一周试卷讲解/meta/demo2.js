// Proxy
// Reflect.apply


function Tree() {
    return new Proxy({}, handler);
}

const handler = {
    get(target, key, receiver) {
        if (!(key in target)) {
            target[key] = Tree();
        }
        return Reflect.get(target, key, receiver);
    }
}

let tree = new Tree;
tree.yideng.student = "小驴";
console.log(tree);