export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) {
        throw Error('Cannot process');
    }
    for (const elems of map) {
        if (elems[1] === 1) {
            map.set(elems[0], 100);
        }
    }
    return map;
}
