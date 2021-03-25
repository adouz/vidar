import Movie from '../movie';
import { Visual } from '../layer/index';
import BaseObject from '../object';
/**
 * Modifies the visual contents of a layer.
 *
 * <em>Note: At this time, simply use the <code>actx</code> property of the movie to add audio nodes to a
 * layer's media. TODO: add more audio support, including more types of audio nodes, probably in a
 * different module.</em>
 */
declare class Base implements BaseObject {
    type: string;
    publicExcludes: string[];
    propertyFilters: Record<string, <T>(value: T) => T>;
    enabled: boolean;
    private _target;
    constructor();
    attach(target: Movie | Visual): void;
    detach(): void;
    /**
     * Apply this effect to a target at the given time
     *
     * @param {module:movie|module:layer.Base} target
     * @param {number} reltime - the movie's current time relative to the layer
     * (will soon be replaced with an instance getter)
     * @abstract
     */
    apply(target: Movie | Visual, reltime: number): void;
    /**
     * The current time of the target
     * @type number
     */
    get currentTime(): number;
    get parent(): Movie | Visual;
    get movie(): Movie;
    getDefaultOptions(): Record<string, unknown>;
}
export default Base;
