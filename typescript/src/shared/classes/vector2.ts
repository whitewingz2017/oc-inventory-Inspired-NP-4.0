import { Vector3 } from "./vector";

type Vector2Coords = { x: number; y: number };

var _parseVectors2: WeakSet<object>;
var parseVectors_fn2: (x: any, y: any) => Vector2Coords;

class _Vector2 {
    x: number;
    y: number;

  constructor(x: any, y?: any) {
    _parseVectors2.add(this);
    const vectors = parseVectors_fn2.call(this, x, y);
    this.x = vectors.x;
    this.y = vectors.y;
  }

  equals(x: any, y: any): boolean {
    const vectors = parseVectors_fn2.call(this, x, y);
    return this.x === vectors.x && this.y === vectors.y;
  }

  add(x: any, y: any, s?: number): _Vector2 {
    const vectors = parseVectors_fn2.call(this, x, y);
    const rX = this.x + (s ? vectors.x * s : vectors.x);
    const rY = this.y + (s ? vectors.y * s : vectors.y);
    return new _Vector2(rX, rY);
  }

  addScalar(scalar: number): _Vector2 {
    if (typeof scalar !== "number") {
      throw new Error("Invalid scalar");
    }
    const rX = this.x + scalar;
    const rY = this.y + scalar;
    return new _Vector2(rX, rY);
  }

  sub(x: any, y: any, s?: number): _Vector2 {
    const vectors = parseVectors_fn2.call(this, x, y);
    const rX = this.x - (s ? vectors.x * s : vectors.x);
    const rY = this.y - (s ? vectors.y * s : vectors.y);
    return new _Vector2(rX, rY);
  }

  subScalar(scalar: number): _Vector2 {
    if (typeof scalar !== "number") {
      throw new Error("Invalid scalar");
    }
    const rX = this.x - scalar;
    const rY = this.y - scalar;
    return new _Vector2(rX, rY);
  }

  multiply(x: any, y: any): _Vector2 {
    const vectors = parseVectors_fn2.call(this, x, y);
    const rX = this.x * vectors.x;
    const rY = this.y * vectors.y;
    return new _Vector2(rX, rY);
  }

  multiplyScalar(scalar: number): _Vector2 {
    if (typeof scalar !== "number") {
      throw new Error("Invalid scalar");
    }
    const rX = this.x * scalar;
    const rY = this.y * scalar;
    return new _Vector2(rX, rY);
  }

  divide(x: any, y: any): _Vector2 {
    const vectors = parseVectors_fn2.call(this, x, y);
    const rX = this.x / vectors.x;
    const rY = this.y / vectors.y;
    return new _Vector2(rX, rY);
  }

  divideScalar(scalar: number): _Vector2 {
    if (typeof scalar !== "number") {
      throw new Error("Invalid scalar");
    }
    const rX = this.x / scalar;
    const rY = this.y / scalar;
    return new _Vector2(rX, rY);
  }

  round(): _Vector2 {
    const rX = Math.round(this.x);
    const rY = Math.round(this.y);
    return new _Vector2(rX, rY);
  }

  floor(): _Vector2 {
    const rX = Math.floor(this.x);
    const rY = Math.floor(this.y);
    return new _Vector2(rX, rY);
  }

  ceil(): _Vector2 {
    const rX = Math.ceil(this.x);
    const rY = Math.ceil(this.y);
    return new _Vector2(rX, rY);
  }

  getCenter(x: any, y: any): _Vector2 {
    const vectors = parseVectors_fn2.call(this, x, y);
    return new _Vector2((this.x + vectors.x) / 2, (this.y + vectors.y) / 2);
  }

  getDistance(x: any, y: any): number {
    const [x1, y1] = x instanceof Array ? x : typeof x === "object" ? [x.x, x.y] : [x, y];
    if (typeof x1 !== "number" || typeof y1 !== "number") {
      throw new Error("Invalid vector coordinates");
    }
    const [dX, dY] = [this.x - x1, this.y - y1];
    return Math.sqrt(dX * dX + dY * dY);
  }

  toArray(fractionDigits?: number): number[] {
    if (typeof fractionDigits === "number") {
      return [parseFloat(this.x.toFixed(fractionDigits)), parseFloat(this.y.toFixed(fractionDigits))];
    }
    return [this.x, this.y];
  }

  toJSON(fractionDigits?: number): { x: number; y: number } {
    if (typeof fractionDigits === "number") {
      return {
        x: parseFloat(this.x.toFixed(fractionDigits)),
        y: parseFloat(this.y.toFixed(fractionDigits)),
      };
    }
    return { x: this.x, y: this.y };
  }

  toString(fractionDigits?: number): string {
    return JSON.stringify(this.toJSON(fractionDigits));
  }
}

_parseVectors2 = new WeakSet();
parseVectors_fn2 = function (x: any, y: any): Vector2Coords {
  let coords: Vector2Coords = { x: 0, y: 0 };
  if (x instanceof _Vector2 || x instanceof Vector3) {
    coords = x;
  } else if (x instanceof Array) {
    coords = { x: x[0], y: x[1] };
  } else if (typeof x === "object") {
    coords = x;
  } else {
    coords = { x, y };
  }
  if (typeof coords.x !== "number" || typeof coords.y !== "number") {
    throw new Error("Invalid vector coordinates");
  }
  return coords;
};

export const Vector2 = _Vector2;