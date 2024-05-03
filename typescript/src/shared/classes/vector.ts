type Vector3Coords = { x: number; y: number; z: number };

var _parseVectors: WeakSet<object>;
var parseVectors_fn: (x: any, y: any, z: any) => Vector3Coords;

class _Vector3 {
  x: number;
  y: number;
  z: number;

  constructor(x: any, y?: any, z?: any) {
    _parseVectors.add(this);
    const vectors = parseVectors_fn.call(this, x, y, z);
    this.x = vectors.x;
    this.y = vectors.y;
    this.z = vectors.z;
  }

  equals(x: any, y: any, z: any): boolean {
    const vectors = parseVectors_fn.call(this, x, y, z);
    return this.x === vectors.x && this.y === vectors.y && this.z === vectors.z;
  }

  add(x: any, y: any, z: any, s?: number): _Vector3 {
    let vectors = parseVectors_fn.call(this, x, y, z);
    this.x += s ? vectors.x * s : vectors.x;
    this.y += s ? vectors.y * s : vectors.y;
    this.z += s ? vectors.z * s : vectors.z;
    return this;
  }

  addScalar(scalar: number): _Vector3 {
    if (typeof scalar !== "number") {
      throw new Error("Invalid scalar");
    }
    this.x += scalar;
    this.y += scalar;
    this.z += scalar;
    return this;
  }

  sub(x: any, y: any, z: any, s?: number): _Vector3 {
    const vectors = parseVectors_fn.call(this, x, y, z);
    this.x -= s ? vectors.x * s : vectors.x;
    this.y -= s ? vectors.y * s : vectors.y;
    this.z -= s ? vectors.z * s : vectors.z;
    return this;
  }

  subScalar(scalar: number): _Vector3 {
    if (typeof scalar !== "number") {
      throw new Error("Invalid scalar");
    }
    this.x -= scalar;
    this.y -= scalar;
    this.z -= scalar;
    return this;
  }

  multiply(x: any, y: any, z: any): _Vector3 {
    const vectors = parseVectors_fn.call(this, x, y, z);
    this.x *= vectors.x;
    this.y *= vectors.y;
    this.z *= vectors.z;
    return this;
  }

  multiplyScalar(scalar: number): _Vector3 {
    if (typeof scalar !== "number") {
      throw new Error("Invalid scalar");
    }
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    return this;
  }

  divide(x: any, y: any, z: any): _Vector3 {
    const vectors = parseVectors_fn.call(this, x, y, z);
    this.x /= vectors.x;
    this.y /= vectors.y;
    this.z /= vectors.z;
    return this;
  }

  divideScalar(scalar: number): _Vector3 {
    if (typeof scalar !== "number") {
      throw new Error("Invalid scalar");
    }
    this.x /= scalar;
    this.y /= scalar;
    this.z /= scalar;
    return this;
  }

  round(): _Vector3 {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  }

  floor(): _Vector3 {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  }

  ceil(): _Vector3 {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  }

  getCenter(x: any, y: any, z: any): _Vector3 {
    const vectors = parseVectors_fn.call(this, x, y, z);
    return new _Vector3((this.x + vectors.x) / 2, (this.y + vectors.y) / 2, (this.z + vectors.z) / 2);
  }

  getDistance(x: any, y: any, z: any): number {
    const [x1, y1, z1] = x instanceof Array ? x : typeof x === "object" ? [x.x, x.y, x.z] : [x, y, z];
    if (typeof x1 !== "number" || typeof y1 !== "number" || typeof z1 !== "number") {
      throw new Error("Invalid vector coordinates");
    }
    const [dX, dY, dZ] = [this.x - x1, this.y - y1, this.z - z1];
    return Math.sqrt(dX * dX + dY * dY + dZ * dZ);
  }

  toArray(fractionDigits?: number): number[] {
    if (typeof fractionDigits === "number") {
      return [
        parseFloat(this.x.toFixed(fractionDigits)),
        parseFloat(this.y.toFixed(fractionDigits)),
        parseFloat(this.z.toFixed(fractionDigits))
      ];
    }
    return [this.x, this.y, this.z];
  }

  toJSON(fractionDigits?: number): Vector3Coords {
    if (typeof fractionDigits === "number") {
      return {
        x: parseFloat(this.x.toFixed(fractionDigits)),
        y: parseFloat(this.y.toFixed(fractionDigits)),
        z: parseFloat(this.z.toFixed(fractionDigits))
      };
    }
    return { x: this.x, y: this.y, z: this.z };
  }

  toString(fractionDigits?: number): string {
    return JSON.stringify(this.toJSON(fractionDigits));
  }
}

_parseVectors = new WeakSet<object>();
parseVectors_fn = function(x, y, z) {
  let coords: Vector3Coords = { x: 0, y: 0, z: 0 };
  if (x instanceof _Vector3) {
    coords = x;
  } else if (x instanceof Array) {
    coords = { x: x[0], y: x[1], z: x[2] };
  } else if (typeof x === "object") {
    coords = x;
  } else {
    coords = { x, y, z };
  }
  if (typeof coords.x !== "number" || typeof coords.y !== "number" || typeof coords.z !== "number") {
    throw new Error("Invalid vector coordinates");
  }
  return coords;
};

export const Vector3 = _Vector3;
