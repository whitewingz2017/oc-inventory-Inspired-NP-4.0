import { Vector3 } from "./classes/vector";
import { Vector2 } from "./classes/vector2";

var clamp = (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max);
  };
  
  var getMapRange = (from: number[], to: number[], scale: number): number => {
    return to[0] + ((scale - from[0]) * (to[1] - to[0])) / (from[1] - from[0]);
  };
  
  var getDistance = ([aX, aY, aZ]: number[], [bX, bY, bZ]: number[]): number => {
    const [dX, dY, dZ] = [aX - bX, aY - bY, aZ - bZ];
    return Math.sqrt(dX * dX + dY * dY + dZ * dZ);
  };
  
  var getRandomNumber = (pMin: number, pMax: number): number => {
    return pMax ? Math.floor(Math.random() * (pMax - pMin + 1) + pMin) : Math.floor(Math.random() * pMin);
  };
  
  var parseVector2 = (x: any, y?: any): any => {
    if (x instanceof Vector2) {
      return x;
    } else if (x instanceof Vector3) {
      return new Vector2(x);
    } else if (x instanceof Array) {
      return new Vector2(x);
    } else if (typeof x === "object") {
      return new Vector2(x);
    }
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Invalid vector coordinates");
    }
    return new Vector2(x, y);
  };
  
  var parseVector3 = (x: any, y?: any, z?: any): any => {
    if (x instanceof Vector3) {
      return x;
    } else if (x instanceof Array) {
      return new Vector3(x);
    } else if (typeof x === "object") {
      return new Vector3(x);
    }
    if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
      throw new Error("Invalid vector coordinates");
    }
    return new Vector3(x, y, z);
  };
  
  var windingNumber = (pPoint: any, pVectors: any[]): number => {
    let windingNumber2 = 0;
    const isLeft = (p0: any, p1: any, p2: any): number => {
      return (p1.x - p0.x) * (p2.y - p0.y) - (p2.x - p0.x) * (p1.y - p0.y);
    };
    for (let i = 0; i < pVectors.length; i++) {
      const p0 = pVectors[i];
      const p1 = pVectors[(i + 1) % pVectors.length];
      if (p0.y <= pPoint.y) {
        if (p1.y > pPoint.y && isLeft(p0, p1, pPoint) > 0) {
          windingNumber2++;
        }
      } else if (p1.y <= pPoint.y && isLeft(p0, p1, pPoint) < 0) {
        windingNumber2--;
      }
    }
    return windingNumber2;
  };
  
  var _MathUtils = {
    clamp,
    getMapRange,
    getDistance,
    getRandomNumber,
    parseVector2,
    parseVector3,
    windingNumber,
  };

  export const MathUtils = {
    MathUtils: () => _MathUtils
  };