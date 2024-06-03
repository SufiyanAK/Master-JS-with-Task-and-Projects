function balancedBracket(string) {
    const array = [];
    for (let i = 0; i < string.length; i++) {
        let bracket = string[i];

        if (bracket === '(' || bracket === '{' || bracket === '[') {
            array.push(bracket);
            continue;
        }

        let check;
        switch (bracket) {
            case ')':
                check = array.pop();
                if (check !== '(') {
                    return false;
                }
                break;

            case '}':
                check = array.pop();
                if (check !== '{') {
                    return false;
                }
                break;

            case ']':
                check = array.pop();
                if (check !== '[') {
                    return false;
                }
                break;

            default:
                break;
        }
    }
    return array.length === 0;
}

let isBalanced = balancedBracket('{[]()}');
console.log(isBalanced);
