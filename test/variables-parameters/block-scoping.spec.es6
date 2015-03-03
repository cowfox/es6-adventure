/**
 * Test script for "Variables & Parameters" -> Block Scoping
 */

describe('ES6 - Variables & Parameters -> Block Scoping ->', function(){

    //----
    // 'let' Declarations
    //
    // Syntactically similar to var, but defines a variable in the current block
    //
    // @see http://tc39wiki.calculist.org/es6/block-scoping/
    //======================
    describe("New syntax - 'let' provides block scoping unlike 'var' ->", function(){

        it("How 'var' works", function(){

            var oneFunction = function(flag) {

                if(flag){

                    var x = 6;
                }

                return x;
            }

            var retWithTrue = oneFunction(true);
            // The code went through the "if", so "x" has been initialized.
            expect(retWithTrue).toBe(6);

            var retWithFalse = oneFunction(false);
            // The code did not go through the "if", so "x" has NOT been initialized.
            expect(retWithFalse).toBeUndefined();

        });

        it("How 'let' works", function() {

            var oneFunction = function(flag) {

                var x = undefined;

                if(flag){

                    // If you know Swift from Apple, then you may be confused here... :)
                    let x = 6;   // ONLY valid within the "if" scope

                }

                return x;
            };

            var retWithTrue = oneFunction(true);
            // The code went through the "if", so "x" has been initialized.
            // However, since returning "x" if out of scope.
            expect(retWithTrue).toBeUndefined();
        });

        it("Working with 'for'", function(){

            var oneFunction = function(flag) {

                var idx = undefined;

                if(flag){

                    for(let idx = 0; idx < 10; idx++){

                    }

                }

                return idx;
            };

            var retWithTrue = oneFunction(true);
            // The code went through the "if" as well as "for", so "idx" has been initialized.
            // However, since returning "idx" if out of scope.
            expect(retWithTrue).toBeUndefined();

        })

    });

    //----
    // 'const' Declarations
    //
    // like let, but for read-only constant declarations
    //
    // @see http://tc39wiki.calculist.org/es6/block-scoping/
    //======================
    describe("New Syntax - 'const' provides the same 'block scoping' as 'let', but a read-only constant ->", function() {

        it("The value of 'const' is read-only", function(){

            const MAX_VALUE = 100;

            //const MIN_VALUE; // SyntaxError: const variables must have an initializer.

            //MAX_VALUE = 200; // SyntaxError: MAX_VALUE is read-only'

            expect(MAX_VALUE).toBe(100);

        });

        it("In-scope value can shadow outer declaration", function(){

            const x = 100;

            var oneFunction = function(flag) {

                if(flag){

                    //const x = 100; // SyntaxError: Duplicate declaration
                    var x = 200;

                }

                return x;
            };

            var retWithTrue = oneFunction(true);
            // The code went through the "if" as well as "for", so "idx" has been initialized.
            // However, since returning "idx" if out of scope.
            expect(retWithTrue).toBe(200);

        });

    });

});