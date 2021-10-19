/* eslint-disable no-mixed-spaces-and-tabs */
/**
* A function to calculate a string without using `eval()`.
*
* @since v2.5.2-beta.2
* @category Math
*/

class Calculator {
	/**
  * Creates a calculator
	* @since v2.5.2-beta.2
  */
	constructor() {
		this._symbols = {};
		this.defineOperator('!', this.factorial, 'postfix', 6);
		this.defineOperator('^', Math.pow, 'infix', 5, true);
		this.defineOperator('*', this.multiplication, 'infix', 4);
		this.defineOperator('/', this.division, 'infix', 4);
		this.defineOperator('+', this.last, 'prefix', 3);
		this.defineOperator('-', this.negation, 'prefix', 3);
		this.defineOperator('+', this.addition, 'infix', 2);
		this.defineOperator('-', this.subtraction, 'infix', 2);
		this.defineOperator(',', Array.of, 'infix', 1);
		this.defineOperator('(', this.last, 'prefix');
		this.defineOperator(')', null, 'postfix');
		this.defineOperator('min', Math.min);
		this.defineOperator('sqrt', Math.sqrt);
	}
	// Method allowing to extend an instance with more operators and functions:
	defineOperator(symbol, f, notation = 'func', precedence = 0, rightToLeft = false) {
		// Store operators keyed by their symbol/name. Some symbols may represent
		// different usages: e.g. "-" can be unary or binary, so they are also
		// keyed by their notation (prefix, infix, postfix, func):
		if (notation === 'func') precedence = 0;
		this._symbols[symbol] = Object.assign({}, this._symbols[symbol], {
			[notation]: {
				symbol, f, notation, precedence, rightToLeft,
				argCount: 1 + (notation === 'infix'),
			},
			symbol,
			regSymbol: symbol.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
                + (/\w$/.test(symbol) ? '\\b' : ''), // add a break if it's a name
		});
	}
	last(...a) { return a[a.length - 1]; }
	negation(a) { return -a; }
	addition(a, b) { return a + b; }
	subtraction(a, b) { return a - b; }
	multiplication(a, b) { return a * b; }
	division(a, b) { return a / b; }
	factorial(a) {
		if (a % 1 || !(+a >= 0)) return NaN;
		if (a > 170) return Infinity;
		let b = 1;
		while (a > 1) b *= a--;
		return b;
	}
	/**
	* Calculates an expression.
	* @example
	* const calculator = new Calculator();
	* calculator.calculate("min(-1,0)+((sqrt(16)+(-4+7)!*---4)/2)^2^3")
	*/
	calculate(expression) {
		let match;
		const values = [],
			operators = [this._symbols['('].prefix],
			exec = () => {
				const op = operators.pop();
				values.push(op.f(...[].concat(...values.splice(-op.argCount))));
				return op.precedence;
			},
			error = (msg) => {
				const notation = match ? match.index : expression.length;
				return `${msg} at ${notation}:\n${expression}\n${' '.repeat(notation)}^`;
			},
			pattern = new RegExp(
				// Pattern for numbers
				'\\d+(?:\\.\\d+)?|'
                // ...and patterns for individual operators/function names
                + Object.values(this._symbols).sort((a, b) => b.symbol.length - a.symbol.length).map(val => val.regSymbol).join('|')
                + '|(\\S)', 'g',
			);
		let afterValue = false;
		pattern.lastIndex = 0; // Reset regular expression object
		do {
			match = pattern.exec(expression);
			const [token, bad] = match || [')', undefined],
				notNumber = this._symbols[token],
				notNewValue = notNumber && !notNumber.prefix && !notNumber.func,
				notAfterValue = !notNumber || !notNumber.postfix && !notNumber.infix;
			// Check for syntax errors:
			if (bad || (afterValue ? notAfterValue : notNewValue)) return error('Syntax error');
			if (afterValue) {
				// We either have an infix or postfix operator (they should be mutually exclusive)
				const curr = notNumber.postfix || notNumber.infix;
				do {
					const prev = operators[operators.length - 1];
					if (((curr.precedence - prev.precedence) || prev.rightToLeft) > 0) break;
					// Apply previous operator, since it has precedence over current one
				} while (exec()); // Exit loop after executing an opening parenthesis or function
				afterValue = curr.notation === 'postfix';
				if (curr.symbol !== ')') {
					operators.push(curr);
					// Postfix always has precedence over any operator that follows after it
					if (afterValue) exec();
				}
			}
			else if (notNumber) { // prefix operator or function
				operators.push(notNumber.prefix || notNumber.func);
				if (notNumber.func) { // Require an opening parenthesis
					match = pattern.exec(expression);
					if (!match || match[0] !== '(') return error('Function needs parentheses');
				}
			}
			else { // number
				values.push(+token);
				afterValue = true;
			}
		} while (match && operators.length);
		return operators.length ? error('Missing closing parenthesis')
			: match ? error('Too many closing parentheses')
				: values.pop(); // All done!
	}
}

export { Calculator };
