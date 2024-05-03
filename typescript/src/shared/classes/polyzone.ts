import { Utils } from "../utils";
import { Vector2 } from "./vector2";
import { ZoneGrid } from "./zoneGrid";

class PolyZone {
    private _getMin: any;
    private _getMax: any;
    private _getCenter: any;
    private _getSize: any;
    private _getArea: any;
  
    private _id: any;
    private _points2: any;
    private _min2: any;
    private _max2: any;
    private _area2: any;
    private _size2: any;
    private _center: any;
    private _grid: any;
  
    options: any;
    data: any;
  
    constructor(pPoints: any, pOptions: any = {}, pData = {}) {
      this._getMin = new WeakSet();
      this._getMax = new WeakSet();
      this._getCenter = new WeakSet();
      this._getSize = new WeakSet();
      this._getArea = new WeakSet();
  
      this._id = new WeakMap();
      this._points2 = new WeakMap();
      this._min2 = new WeakMap();
      this._max2 = new WeakMap();
      this._area2 = new WeakMap();
      this._size2 = new WeakMap();
      this._center = new WeakMap();
      this._grid = new WeakMap();
  
      this._id.set(this, Utils.getUUID());
      this._points2.set(this, pPoints);
      this._min2.set(this, this._getMin.call(this, pPoints));
      this._max2.set(this, this._getMax.call(this, pPoints));
      this._area2.set(this, this._getArea.call(this, pPoints));
      this._size2.set(this, this._getSize.call(this, this._min2.get(this), this._max2.get(this)));
      this._center.set(this, this._getCenter.call(this, this._min2.get(this), this._max2.get(this)));
  
      this.options = pOptions;
      this.data = pData;
  
      if (!this.options.useGrid && !this.options.useLazyGrid) return;
  
      this._grid.set(
        this,
        new ZoneGrid(
          this._points2.get(this),
          this._min2.get(this),
          this._max2.get(this),
          this._size2.get(this),
          this._area2.get(this),
          pOptions.gridCellSize,
          pOptions.useLazyGrid
        )
      );
    }
  
    get id() {
      return this._id.get(this);
    }
  
    get center() {
      return this._center.get(this);
    }
  
    get min() {
      return this._min2.get(this);
    }
  
    get max() {
      return this._max2.get(this);
    }
  
    get points() {
      return [...this._points2.get(this)];
    }
  
    isPointInside(pPoint: any) {
      if (pPoint.x < this._min2.get(this).x || pPoint.x > this._max2.get(this).x) {
        return false;
      } else if (pPoint.y < this._min2.get(this).y || pPoint.y > this._max2.get(this).y) {
        return false;
      }
  
      if ((this.options.minZ || this.options.maxZ) && pPoint) {
        const minZ = this.options.minZ ?? -Infinity;
        const maxZ = this.options.maxZ ?? Infinity;
  
        if (pPoint.z < minZ || pPoint.z > maxZ) {
          return false;
        }
      }
  
      if ((this.options.useGrid || this.options.useLazyGrid) && this._grid.get(this)) {
        return this._grid.get(this).isPointInsideGrid(pPoint);
      }
  
      const windingNumber2 = Utils.windingNumber(pPoint, this._points2.get(this));
      return windingNumber2 !== 0;
    }
  
    addPoint(pPoint: any) {
      this._points2.get(this).push(pPoint);
    }
  
    removePoint(pPoint: any) {
      const index = this._points2.get(this).findIndex(
        (point: any) => point.x === pPoint.x && point.y === pPoint.y
      );
  
      if (index === -1) return;
  
      this._points2.get(this).splice(index, 1);
    }
  
    removeLastPoint() {
      this._points2.get(this).pop();
    }
  
    recalculate() {
      this._min2.set(this, this._getMin.call(this, this._points2.get(this)));
      this._max2.set(this, this._getMax.call(this, this._points2.get(this)));
      this._area2.set(this, this._getArea.call(this, this._points2.get(this)));
      this._size2.set(this, this._getSize.call(this, this._min2.get(this), this._max2.get(this)));
      this._center.set(this, this._getCenter.call(this, this._min2.get(this), this._max2.get(this)));
  
      if (!this.options.useGrid) return;
  
      this._grid.set(
        this,
        new ZoneGrid(
          this._points2.get(this),
          this._min2.get(this),
          this._max2.get(this),
          this._size2.get(this),
          this._area2.get(this),
          this.options.gridCellSize,
          this.options.useLazyGrid
        )
      );
    }
  }

export { PolyZone };