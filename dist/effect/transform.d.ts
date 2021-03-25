import { Visual } from '../layer/index';
import Movie from '../movie';
import Base from './base';
/**
 * Transforms a layer or movie using a transformation matrix. Use {@link
 * Transform.Matrix} to either A) calculate those values based on a series of
 * translations, scalings and rotations) or B) input the matrix values
 * directly, using the optional argument in the constructor.
 */
declare class Transform extends Base {
    matrix: Transform.Matrix;
    private _tmpMatrix;
    private _tmpCanvas;
    private _tmpCtx;
    /**
     * @param {module:effect.Transform.Matrix} matrix - how to transform the
     * target
     */
    constructor(matrix: Transform.Matrix);
    apply(target: Movie | Visual, reltime: number): void;
}
declare namespace Transform {
    /**
     * @class
     * A 3x3 matrix for storing 2d transformations
     */
    class Matrix {
        /**
         * The identity matrix
         */
        static IDENTITY: Matrix;
        private static _TMP_MATRIX;
        data: number[];
        constructor(data?: number[]);
        identity(): Matrix;
        /**
         * @param {number} x
         * @param {number} y
         * @param {number} [val]
         */
        cell(x: number, y: number, val?: number): number;
        get a(): number;
        get b(): number;
        get c(): number;
        get d(): number;
        get e(): number;
        get f(): number;
        /**
         * Combines <code>this</code> with another matrix <code>other</code>
         * @param other
         */
        multiply(other: Matrix): Matrix;
        /**
         * @param {number} x
         * @param {number} y
         */
        translate(x: number, y: number): Matrix;
        /**
         * @param {number} x
         * @param {number} y
         */
        scale(x: number, y: number): Matrix;
        /**
         * @param {number} a - the angle or rotation in radians
         */
        rotate(a: number): Matrix;
    }
}
export default Transform;
