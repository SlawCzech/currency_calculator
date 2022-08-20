export function generateTag({tagName = 'div', tagText, tagClass, tagAttrs, tagId, tagEvents} = {}) {

    const node = document.createElement(tagName);

    if (tagText !== undefined) {
        const nodeText = document.createTextNode(tagText);
        node.appendChild(nodeText);
    }

    if (tagId !== undefined) {
        node.id = tagId;
    }

    if (tagClass !== undefined) {
        if (Array.isArray(tagClass)) {
            tagClass.forEach((cls) => {
                node.classList.add(cls);
            })
        } else {
            node.classList.add(tagClass);
        }
    }

    if (tagAttrs !== undefined) {
        tagAttrs.forEach(({type, value}) => {
            node.setAttribute(type, value);
        })
    }

    if (tagEvents !== undefined) {
        tagEvents.forEach(({type, cb}) => {
            node.addEventListener(type, cb);
        })
    }

    return node;
}