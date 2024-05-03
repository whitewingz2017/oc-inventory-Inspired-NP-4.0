import { Utils } from "../utils";
import { Vector2 } from "./vector2";
  class ZoneGrid {
    private _points: any;
    private _size: any;
    private _area: any;
    private _min: any;
    private _max: any;
    private _lazy: any;
    private _cellSize: any;
    private _cellArea: any;
    private _cellWidth: any;
    private _cellHeight: any;
    private _cells: any;
    private _gridArea: any;
  
    constructor(
      pPoints: any,
      pMin: any,
      pMax: any,
      pSize: any,
      pArea: any,
      pCellSize: number = 30,
      pLazy: boolean = false
    ) {
      this._points = new WeakMap();
      this._size = new WeakMap();
      this._area = new WeakMap();
      this._min = new WeakMap();
      this._max = new WeakMap();
      this._lazy = new WeakMap();
      this._cellSize = new WeakMap();
      this._cellArea = new WeakMap();
      this._cellWidth = new WeakMap();
      this._cellHeight = new WeakMap();
      this._cells = new WeakMap();
      this._gridArea = new WeakMap();
  
      this._points.set(this, pPoints);
      this._size.set(this, pSize);
      this._area.set(this, pArea);
      this._min.set(this, pMin);
      this._max.set(this, pMax);
      this._lazy.set(this, pLazy);
      this._cellSize.set(this, pCellSize);
      this._cellWidth.set(this, this._size.get(this).x / pCellSize);
      this._cellHeight.set(this, this._size.get(this).y / pCellSize);
      this._cellArea.set(this, this._cellWidth.get(this) * this._cellHeight.get(this));
      this._cells.set(
        this,
        this._getGridCells.call(
          this,
          this._points.get(this),
          this._cellSize.get(this),
          this._cellWidth.get(this),
          this._cellHeight.get(this),
          this._lazy.get(this)
        )
      );
      this._gridArea.set(
        this,
        this._getGridArea.call(this, this._cells.get(this), this._cellArea.get(this))
      );
    }
  
    get cells() {
      return this._cells.get(this);
    }
  
    get cellSize() {
      return this._cellSize.get(this);
    }
  
    get cellWidth() {
      return this._cellWidth.get(this);
    }
  
    get cellHeight() {
      return this._cellHeight.get(this);
    }
  
    get gridArea() {
      return this._gridArea.get(this);
    }
  
    get gridCoverage() {
      return (this._gridArea.get(this) / this._area.get(this)) * 100;
    }
  
    isPointInsideGrid(pPoint: any) {
      const posX = pPoint.x - this._min.get(this).x;
      const posY = pPoint.y - this._min.get(this).y;
      const cellX = Math.floor((posX * this._cellSize.get(this)) / this._size.get(this).x);
      const cellY = Math.floor((posY * this._cellSize.get(this)) / this._size.get(this).y);
      let isInside = this._cells.get(this)[cellX]?.[cellY];
  
      if (!isInside && this._lazy.get(this)) {
        isInside = this._isCellInsidePoly.call(
          this,
          cellX,
          cellY,
          this._cellWidth.get(this),
          this._cellHeight.get(this),
          this._points.get(this)
        );
        this._cells.get(this)[cellX][cellY] = isInside;
  
        if (!isInside) return false;
  
        this._gridArea.set(this, this._gridArea.get(this) + this._cellArea.get(this));
      }
  
      return isInside ?? false;
    }
  
    private _getGridCells(pPoints: any, pSize: any, pWidth: any, pHeight: any, pLazy: any) {
      const cells: any = {};
  
      for (let x = 0; x < pSize; x++) {
        cells[x] = {};
  
        if (pLazy) continue;
  
        for (let y = 0; y < pSize; y++) {
          const inside = this._isCellInsidePoly.call(this, x, y, pWidth, pHeight, pPoints);
          if (!inside) continue;
  
          cells[x][y] = true;
        }
      }
  
      return cells;
    }
  
    private _getGridArea(pCells: any, pCellArea: any) {
      let gridArea = 0;
  
      for (const x in pCells) {
        for (const y in pCells[x]) {
          gridArea += pCellArea;
        }
      }
  
      return gridArea;
    }
  
    private _getCellPoints(pX: any, pY: any, pWidth: any, pHeight: any) {
      const points: any[] = [];
      const x = pX * pWidth + this._min.get(this).x;
      const y = pY * pHeight + this._min.get(this).y;
  
      points.push(new Vector2(x, y));
      points.push(new Vector2(x + pWidth, y));
      points.push(new Vector2(x + pWidth, y + pHeight));
      points.push(new Vector2(x, y + pHeight));
  
      return points;
    }
  
    private _isCellInsidePoly(pX: any, pY: any, pWidth: any, pHeight: any, pPoints: any) {
      const cellPoints = this._getCellPoints.call(this, pX, pY, pWidth, pHeight);
      let isInsidePoly = false;
  
      for (const point of cellPoints) {
        const windingNumber2 = Utils.windingNumber(point, pPoints);
  
        if (windingNumber2 !== 0) {
          isInsidePoly = true;
          break;
        }
      }
  
      if (!isInsidePoly) return false;
  
      for (let i = 0; i < cellPoints.length; i++) {
        const p0 = cellPoints[i];
        const p1 = cellPoints[(i + 1) % cellPoints.length];
  
        for (let j = 0; j < pPoints.length; j++) {
          const p2 = pPoints[j];
          const p3 = pPoints[(j + 1) % pPoints.length];
  
          if (this._isIntersecting.call(this, p0, p1, p2, p3)) return false;
        }
      }
  
      return true;
    }
  
    private _isIntersecting(pA: any, pB: any, pC: any, pD: any) {
      const denominator = (pB.x - pA.x) * (pD.y - pC.y) - (pB.y - pA.y) * (pD.x - pC.x);
      const numerator1 = (pA.y - pC.y) * (pD.x - pC.x) - (pA.x - pC.x) * (pD.y - pC.y);
      const numerator2 = (pA.y - pC.y) * (pB.x - pA.x) - (pA.x - pC.x) * (pB.y - pA.y);
  
      if (denominator === 0) return numerator1 === 0 && numerator2 === 0;
  
      const r = numerator1 / denominator;
      const s = numerator2 / denominator;
  
      return r >= 0 && r <= 1 && s >= 0 && s <= 1;
    }
  }

export { ZoneGrid };