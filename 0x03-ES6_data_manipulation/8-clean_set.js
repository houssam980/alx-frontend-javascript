export default function cleanSet(set, startString) {
    let resu = '';
    if (!startString || !startString.length) {
        return resu;
    }
    set.forEach((element) => {
        if (element && element.startsWith(startString)) {
            resu += `${element.slice(startString.length)}-`;
        }
    });
    return resu.slice(0, resu.length - 1);
}
