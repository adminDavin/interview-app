class Utils {
    test() {
        console.log('this is test.');
    }
    eleFindInArray(li, name, value) {
        for (let ele of li) {
            let result = ele[name] == value ? ele['value'] : null;
            if (result) {
                return result;
            }
        }
    }
}
export default Utils;