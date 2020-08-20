class Utils {
    constructor() { }

    private get WHITE_LIST() {
        return ['development', 'test'];
    }

    get isNoProd() {
        return this.WHITE_LIST.includes(process.env.NODE_ENV);
    }

    public EhNuloOuVazio(element: any): boolean {
        return (
            element === '' ||
            element === null ||
            element === undefined ||
            element.length === 0 ||
            Object.keys(element).length === 0
        ) ? true : false;
    }

    public hasStatusError(status: number) {
        return !(status >= 200 && status <= 299);
    }

    public flattenArray(array: any[]) {
        return [].concat(...array)
    };

    public flattenArrayDeep(array: any[], depth: number): any {
        if (!depth) { return array; }
        return Array.from({ length: depth }).reduce((newArray: any[]) => this.flattenArray(newArray), array);
    };

    public uniqueObject(arr: any[], comp: string) {
        const unique = arr
            .map(e => e[comp])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => arr[e])
            .map(e => arr[e]);
        return unique;
    };

    public uniqueArray(arr: Iterable<string[] | number[]>) {
        return [...new Set(arr)];
    }
}

export default new Utils();