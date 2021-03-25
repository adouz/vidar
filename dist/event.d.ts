/**
 * @module event
 */
import VidarObject from './object';
interface Event {
    target: VidarObject;
    type: string;
}
/**
 * Emits an event to all listeners
 *
 * @param {object} target - a vidar object
 * @param {string} type - the id of the type (can contain subtypes, such as
 * "type.subtype")
 * @param {function} listener
 */
export declare function subscribe(target: VidarObject, type: string, listener: <T extends Event>(T: any) => void): void;
/**
 * Emits an event to all listeners
 *
 * @param {object} target - a vidar object
 * @param {string} type - the id of the type (can contain subtypes, such as
 * "type.subtype")
 * @param {object} event - any additional event data
 */
export declare function publish(target: VidarObject, type: string, event: Record<string, unknown>): Event;
export {};
