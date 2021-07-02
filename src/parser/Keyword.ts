class Keyword {
    constructor(
        public keyword: string,
        public base: string
    ) {
        this.keyword = keyword || base;
    }
}
export class List {
    /**
     * A list of possible keywords
     */
    public static List = [
        new Keyword('using', ' '),
        new Keyword('immutable', 'const'),
        new Keyword('import', 'import'),
        new Keyword('new', 'new'),
        new Keyword('this', 'this'),
        new Keyword('void', 'function'),
        new Keyword('int', 'let'),
        new Keyword('float', 'let'),
        new Keyword('string', 'let'),
        new Keyword('for', 'for'),
        new Keyword('while', 'while'),
        new Keyword('super', 'super'),
        new Keyword('async', 'async'),
        new Keyword('await', 'await'),
        new Keyword('default', 'default'),
        new Keyword('break', 'break'),
        new Keyword('continue', 'continue'),
        new Keyword('class', 'class'),
        new Keyword('const', 'const'),
        new Keyword('return', 'return'),
        new Keyword('else', 'else'),
        new Keyword('throw', 'throw'),
        new Keyword('debugger', 'debugger'),
        new Keyword('if', 'if'),
        new Keyword('do', 'do'),
        new Keyword('switch', 'switch'),
        new Keyword('case', 'case'),
        new Keyword('default', 'default'),
        new Keyword('delete', 'delete'),
        new Keyword('typeof', 'typeof'),
        new Keyword('default', 'default'),
        new Keyword('in', 'in'),
        new Keyword('of', 'of'),
        new Keyword('true', 'true'),
        new Keyword('false', 'false'),
        new Keyword('instanceof', 'instanceof'),
        new Keyword('try', 'try'),
        new Keyword('catch', 'catch'),
        new Keyword('finally', 'finally'),
        new Keyword('{', '{'),
        new Keyword('}', '}'),
        new Keyword('[', '['),
        new Keyword(']', ']'),
        new Keyword(':', ':'),
        new Keyword(',', ','),
        new Keyword('.', '.'),
        new Keyword(';', ';'),
        new Keyword('++', '++'),
        new Keyword('>=', '>='),
        new Keyword('+=', '+='),
        new Keyword('-=', '-='),
        new Keyword('*=', '*='),
        new Keyword('/=', '/='),
        new Keyword('%=', '%='),
        new Keyword('**=', '**='),
        new Keyword('<<=', '<<='),
        new Keyword('??=', '??='),
        new Keyword('&&=', '&&='),
        new Keyword('&=', '&='),
        new Keyword('^=', '^='),
        new Keyword('^', '^'),
        new Keyword('||=', '||='),
        new Keyword('|=', '|='),
        new Keyword('>>>=', '>>>='),
        new Keyword('>>=', '>>='),
        new Keyword('<=', '<='),
        new Keyword('=>', '=>'),
        new Keyword('--', '--'),
        new Keyword('**', '**'),
        new Keyword('+', '+'),
        new Keyword('-', '-'),
        new Keyword('*', '*'),
        new Keyword('/', '/'),
        new Keyword('%', ''),
        new Keyword('||', '||'),
        new Keyword('|', '|'),
        new Keyword('&&', '&&'),
        new Keyword('&', '&'),
        new Keyword('~', '~'),
        new Keyword('>>', '>>'),
        new Keyword('>>>', '>>>'),
        new Keyword('<<', '<<'),
        new Keyword('\\', '\\'),
        new Keyword('?', '?'),
        new Keyword('!', '!'),
        new Keyword('>', '>'),
        new Keyword('<', '<'),
        new Keyword('==', '=='),
        new Keyword('!=', '!='),
        new Keyword('=', '='),
        new Keyword('@', '@'),
        new Keyword('//', '//'),
        new Keyword('/*', '/*'),
        new Keyword('*/', '*/'),
        new Keyword('0', '0'),
        new Keyword('1', '1'),
        new Keyword('2', '2'),
        new Keyword('3', '3'),
        new Keyword('4', '4'),
        new Keyword('5', '5'),
        new Keyword('6', '6'),
        new Keyword('7', '7'),
        new Keyword('8', '8'),
        new Keyword('9', '9'),
        //new Keyword(' ', ' '),
    ];
}
