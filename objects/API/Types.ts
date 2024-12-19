﻿/**
 * "#rrggbb" | "rgb(r, g, b)" | "rgba(r, g, b, a)";
 **/
export type colour = string;
/**
 * lowercase-letters-numbers-and-single-hyphens-only
 **/
export type codified = string;

/**
 * 
 **/
export type JSONValue = string | number | boolean
                        | JSONValue[]
                        | { [key: string]: JSONValue };

/**
 * 
 **/
export type byte = number;
/**
 * 
 **/
export type int = number;
/**
 * 
 **/
export type uint = number;
/**
 * 
 **/
export type short = number;
/**
 * 
 **/
export type ushort = number;
/**
 * 
 **/
export type long = number;
/**
 * 
 **/
export type ulong = number;
/**
 * 
 **/
export type float = number;
/**
 * 
 **/
export type single = number;
/**
 * 
 **/
export type double = number;