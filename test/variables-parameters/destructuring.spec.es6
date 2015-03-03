/**
 * Test script for "Variables & Parameters" -> Destructing
 */

describe('ES6 - Variables & Parameters -> Destructing ->', function(){

    // Destructuring in the ES6 refers to the use of patterns to effectively match values to variables or properties.

    it("Match values in 'array'", function(){

        // Matching is starting from "left", and only picks up the same numbers of elements.
        var [x, y, z] = [1, 2, 3, 4];

        expect(x).toBe(1);
        expect(y).toBe(2);
        expect(z).toBe(3);

        // If the number of elements is not sufficient, all of variables left will be "undefined".
        var [a, b, c] = [1, 2];

        expect(a).toBe(1);
        expect(b).toBe(2);
        expect(c).toBeUndefined();

        // The first comma (",") skips first array element.
        let [, v, t, s] = [1, 2, 3];

        expect(v).toBe(2);
        expect(t).toBe(3);
        expect(s).toBeUndefined();


        // Also working with 'nested' arrays
        let [x2, [y2]] = [1, [2, 3]];

        expect(x2).toBe(1);
        expect(y2).toBe(2);

    });

    it("Easy to do swapping on two variables", function () {

        let [x, y] = [2, 6];

        [x, y] = [y, x]; // Swap the values of x and y

        expect(x).toBe(6);
        expect(y).toBe(2);
        
    });

    it("Match values in 'object'", function () {

        let { a: x, b: y } = { a: 1, b: 2 };

        expect(x).toBe(1);
        expect(y).toBe(2);


        let { a: u, b: { c: v } } = { a: 1, b: { c: 2 } };

        expect(u).toBe(1);
        expect(v).toBe(2);

    })
    
    it("Match values in function's parameters", function () {
        
        var oneFunction = function (url, {data, options}) {
            return data;
        }

        let ret = oneFunction(
            'api/getData',
            {
                data: "I'm data",
                options: {

                }
            }
        );

        expect(ret).toBe("I'm data");
        
    })

});