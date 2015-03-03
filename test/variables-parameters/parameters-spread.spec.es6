/**
 * Test script for "Variables & Parameters" -> Parameters & Spread
 */

describe('ES6 - Variables & Parameters -> Parameters & Spread ->', function() {

    //----
    // Default Parameters
    //
    // Default function parameters allow formal parameters to be initialized with default values
    // if no value or undefined is passed.
    //
    // @see http://tc39wiki.calculist.org/es6/default-parameter-values/
    //======================
    describe("Default Parameters ->", function () {
        
        it("Provide 'defaults' in function declaration", function () {

            // ES5 way
            var es5Function = function (name) {
                // Use "||" to provide alternative value.
                name = name || "cowfox"; 

                return name;
            };
            var retES5 = es5Function();
            expect(retES5).toEqual("cowfox");
            
            
            // ES6 way
            var es6Function = function (name = "cowfox") {
                return name;
            };
            var retES6 = es5Function();
            expect(retES6).toEqual("cowfox");

            // Empty string ("") also means "using defaults"
            // TODO - Def Changed!!
            var retES6EmptyString = es5Function("");
            expect(retES6EmptyString).toEqual("cowfox");

            // 'undefined' also means "using defaults"
            var retES6Undefined = es5Function(undefined);
            expect(retES6Undefined).toEqual("cowfox");

            // 'null' also means "using defaults"
            var retES6Null = es5Function(null);
            expect(retES6Null).toEqual("cowfox");

        });

        it("Defaults can refer to previous params", function () {

            function singularAutoPlural(singular, plural = singular+"s",
                                        rallyingCry = plural + " ATTACK!!!") {
                return [singular, plural, rallyingCry];
            }

            var ret = singularAutoPlural("Gecko");
            expect(ret).toEqual(["Gecko","Geckos", "Geckos ATTACK!!!"]);

            var ret2 = singularAutoPlural("Fox","Foxes");
            expect(ret2).toEqual(["Fox","Foxes", "Foxes ATTACK!!!"]);

        });

        it("Use function as defaults", function () {

            function go() {
                return ":P"
            }

            function withDefaults(a = go()) {
                return a;
            }

            var ret = withDefaults();
            expect(ret).toBe(":P");
        });
        
    })

    //----
    // Rest Parameters
    //
    // Rest parameters provide a cleaner way of dealing with functions that takes
    // arbitrary number of parameters than using arguments.
    //
    // @see http://tc39wiki.calculist.org/es6/rest-parameters/
    //======================
    describe("Rest parameters ->", function () {

        it("Use 'arguments'", function () {

            let sum = function(){
                let result = 0;

                for (let i = 0; i < arguments.length; i++) {
                    result += arguments[i];
                }

                return result;
            }

            expect(sum(1,2,3)).toBe(6);
            expect(sum(1,2,3,4)).toBe(10);

        });

        it("Use 'rest parameters'", function () {

            let sum = function(...numbers){ // "numbers" is an array, not an object like "arguments".
                let result = 0;

                for (let i = 0; i < numbers.length; i++) {
                    result += numbers[i];
                }

                return result;
            }

            expect(sum(1,2,3)).toBe(6);
            expect(sum(1,2,3,4)).toBe(10);

        });

        it("Working with extra parameters", function () {

            // The first parameter is not included into the "number" array.
            let sum = function(first, ...numbers){
                let result = 0;

                for (let i = 0; i < numbers.length; i++) {
                    result += numbers[i];
                }

                return result;
            }

            expect(sum(1,2,3)).toBe(5);
            expect(sum(1,2,3,4)).toBe(9);


        })

    });

    //----
    // Spread
    //
    // The spread construct allows an expression to be expanded in places where multiple arguments
    // (for function calls) or multiple elements (for array literals) are expected.
    //
    // @see http://tc39wiki.calculist.org/es6/spread/
    //======================
    describe("Spread ->", function () {

        it("Working with function parameters", function () {

            function sum(x, y, z) {
                return x + y + z;
            }

            var ret = sum(...[1,2,3,4]);
            expect(ret).toBe(6);

            var ret2 = sum(1, ...[2,3,4]);
            expect(ret2).toBe(6);

        });

        it("Working with array", function () {

            var arr = [1, 2, 3, 4];
            var arrMerged = [0, ...arr, 5, 6, 7];
            expect(arrMerged).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);

            var arrMerged2 = [1, 2, 3, 4];
            var arr2 = [5, 6, 7];
            arrMerged2.push(...arr2); // Used in "push".
            expect(arrMerged2).toEqual([1, 2, 3, 4, 5, 6, 7]);

        })

    })



});