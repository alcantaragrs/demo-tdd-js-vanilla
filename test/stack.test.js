class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    get isEmpty() {
        return this.top === -1;
    }

    push = (value) => {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop = () => {
        if (!this.isEmpty) {
            this.items[this.top] = undefined;
            this.top -= 1;
        }
    }
}

//Describe what is being tested
describe('My Stack', () => {

    //Make the test pass (temporary)
    // it.todo('is created empty');

    let stack;

    beforeEach(() => {
        stack = new Stack();
    })

    it('is created empty', () => {
        //EXPECTATION - make sure that the codes does what is expected
        //toBe is a matcher that will test the actual value to the correct value
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to the top', () => {
        stack.push('🍕');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🍕');
    });

    it('can pop off', () => {
        stack.push('🍔');

        const actualTop = stack.top.valueOf();

        stack.pop();

        const updatedTop = actualTop - 1;

        expect(stack.top).toBe(updatedTop);
        expect(stack.items[actualTop]).toEqual(undefined);
    });

    it("can pop only if have items", () => {
        stack.pop();

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    })
});
