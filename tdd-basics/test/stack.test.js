class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top++;
        this.items[this.top] = value;
    }

    pop() {
        const remove = this.items[this.top];
        delete this.items[this.top]
        this.top--;

        return remove;
    }
}

describe('My Stack', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    })

    it('is created empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to the top', () => {
        stack.push('Gui');

        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('Gui');
    });

    it('can pop off', () => {
        stack.push('Gui');
        stack.push('Fei');
        stack.push('Yul');

        const popped = stack.pop();

        expect(popped).toBe('Yul');
        expect(stack.top).toBe(1);
        expect(stack.peek).toBe('Fei');
        expect(stack.items).toEqual({0:'Gui', 1:'Fei'});

    });

    it.todo('if pop at empty stack, return undefined');
})
