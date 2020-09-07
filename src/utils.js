
// 由⼀个组件，向上找到最近的指定组件；
export const findNearUpperComponent = function (componentName, context) {
    if (componentName == undefined || componentName == "") return Err('没有名称');

    let parent = context.$parent;
    let name = parent.$options.name;

    while (parent && name !== componentName) {
        parent = parent.$parent;
        parent && (name = parent.$options.name);
    }

    return parent;
}
// 由⼀个组件，向上找到所有的指定组件；
export const findAllUpperComponent = function (componentName, context) {
    if (componentName == undefined || componentName == "") return Err('没有名称');

    let parent = context.$parent;
    let name = parent.$options.name;
    let componentList = [];

    while (parent) {
        if (name === componentName) {
            componentList.push(parent)
        }
        parent = parent.$parent;
        parent && (name = parent.$options.name);
    }

    return componentList;
}
// 由⼀个组件，向下找到最近的指定组件；（广度遍历）
export const findNearDownComponent = function (componentName, context) {
    if (componentName == undefined || componentName == "") return Err('没有名称');

    let children = null;
    let dep = [context.$children];

    outer: for (let i = 0; i < dep.length; i++) {

        for (let j = 0; j < dep[i].length; j++) {
            if (dep[i][j].$options.name === componentName) {
                children = dep[i][j];
                break outer;
            }
            // 如果 children 有子组件就推到队列中
            if (dep[i][j].$children.length > 0) {
                dep.push(dep[i][j].$children)
            }
        }
    }
    return children;
}
// 由⼀个组件，向下找到所有指定的组件；(深度遍历)
export const findAllDownComponent = function (componentName, context) {
    if (componentName == undefined || componentName == "") return Err('没有名称');

    let childrens = context.$children;
    let childrenList = [];

    childrens.forEach(res => {
        if (res.$options.name === componentName) {
            childrenList.push(res);
        }
        if (res.$children.length > 0) {
            let nextChild = findAllDownComponent(componentName, res);
            childrenList = childrenList.concat(nextChild);
        }
    })
    return childrenList;
}
// 由⼀个组件，找到指定组件的兄弟组件。
export const findSbiling = function (context) {
    const parent = context.$parent;
    let childList = parent.$children;
    childList.splice(childList.indexOf(context) > -1, 1);
    return childList
}

function Err(content) {
    new Error(`WARN: ${content}`);
}