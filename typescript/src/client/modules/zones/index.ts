import { Events } from "../events";

const ActiveZones: Set<string> = new Set();
const ZoneHandlers: Map<string, Function[]> = new Map();
const NetworkedZones: Set<string> = new Set();

on("np-polyzone:enter", (zone: string, data?: any) => {
  ActiveZones.add(zone);
  if (data?.id) ActiveZones.add(`${zone}-${data.id}`);
  if (NetworkedZones.has(zone)) Events.emitNet(`__sdk:zones:${zone}:enter`, data);

  const handlers = ZoneHandlers.get(`${zone}-enter`);
  if (handlers === undefined) return;

  for (const handler of handlers) {
    try {
      handler(data);
    } catch (e) {
      console.log(e);
    }
  }
});

on("np-polyzone:exit", (zone: string, data?: any) => {
  ActiveZones.delete(zone);
  if (data?.id) ActiveZones.delete(`${zone}-${data.id}`);
  if (NetworkedZones.has(zone)) Events.emitNet(`__sdk:zones:${zone}:exit`, data);

  const handlers = ZoneHandlers.get(`${zone}-exit`);
  if (handlers === undefined) return;

  for (const handler of handlers) {
    try {
      handler(data);
    } catch (e) {
      console.log(e);
    }
  }
});

const HasActiveZone = (zone: string, id?: string): boolean => {
  return ActiveZones.has(id ? `${zone}-${id}` : zone);
};

const AddOnEnterHandler = (zone: string, cb: Function): void => {
  const id = `${zone}-enter`;
  const handlers = ZoneHandlers.get(id) ?? [];
  if (!ZoneHandlers.has(id)) ZoneHandlers.set(id, handlers);
  handlers.push(cb);
};

const AddOnExitHandler = (zone: string, cb: Function): void => {
  const id = `${zone}-exit`;
  const handlers = ZoneHandlers.get(id) ?? [];
  if (!ZoneHandlers.has(id)) ZoneHandlers.set(id, handlers);
  handlers.push(cb);
};

const SetZoneAsNetworked = (zone: string): void => {
  NetworkedZones.add(zone);
};

const AddPolyZone = (id: string, zone: string, vectors: number[][], options: any, data: any = {}): void => {
    const opt = { ...options, data, id };
    opt.data["id"] = id;
    
    exports["np-polyzone"].AddPolyZone(zone, vectors, opt);
  };
  
  const AddBoxZone = (id: string, zone: string, vectors: any, length: number, width: number, options: any, data: any = {}): void => {
    const opt = { ...options, data, id };
    opt.data["id"] = id;
    
    exports["np-polyzone"].AddBoxZone(zone, vectors, length, width, opt);
  };
  
  const AddBoxTarget = (id: string, zone: string, vectors: number[][], length: number, width: number, options: any, data: any = {}): void => {
    const opt = { ...options, data, id };
    opt.data["id"] = id;
    
    exports["np-polytaget"].AddBoxZone(zone, vectors, length, width, opt);
  };
  
  const AddCircleZone = (id: string, zone: string, vectors: number[][], radius: number, options: any, data: any = {}): void => {
    const opt = { ...options, data, id };
    opt.data["id"] = id;

    exports["np-polyzone"].AddCircleZone(zone, vectors, radius, opt);
  };
  
  const AddCircleTarget = (id: string, zone: string, vectors: number[][], radius: number, options: any, data: any = {}): void => {
    const opt = { ...options, data, id };
    opt.data["id"] = id;
    exports["np-polytarget"].AddCircleZone(zone, vectors, radius, opt);
  };
  
  const AddEntityZone = (id: string, zone: string, entity: number, options: any, data: any = {}): void => {
    const opt = { ...options, data };
    opt.data["id"] = id;
    exports["np-polyzone"].AddEntityZone(zone, entity, opt);
  };
  
  const RemoveZone = (zone: string, id: string): void => {
    exports["np-polyzone"].RemoveZone(zone, id);
    ActiveZones.delete(`${zone}-${id}`);
    NetworkedZones.delete(zone);
  };

export const Zones = {
    isActive: HasActiveZone,
    onEnter: AddOnEnterHandler,
    onExit: AddOnExitHandler,
    addPolyZone: AddPolyZone,
    addBoxZone: AddBoxZone,
    addBoxTarget: AddBoxTarget,
    addCircleZone: AddCircleZone,
    addCircleTarget: AddCircleTarget,
    addEntityZone: AddEntityZone,
    removeZone: RemoveZone,
    setAsNetworked: SetZoneAsNetworked
};