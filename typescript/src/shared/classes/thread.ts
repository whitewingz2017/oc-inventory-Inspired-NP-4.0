type HookCallback = () => Promise<void>;

class Thread {
  private callback: () => Promise<void>;
  private delay: number;
  private mode: "interval" | "timeout" | "tick";
  private scheduled: { [key: string]: number } = {};
  private tick: number = 0;
  private data: any = {};
  private active: boolean = false;
  private aborted: boolean = false;
  private hooks: Map<string, HookCallback[]> = new Map([
    ["active", []],
    ["preStop", []],
    ["preStart", []],
    ["afterStop", []],
    ["afterStart", []],
    ["stopAborted", []],
    ["startAborted", []],
  ]);
  private threadId: any;

  get isActive(): boolean {
    return this.active;
  }

  constructor(pCallback: () => Promise<void>, pDelay: number, pMode: "interval" | "timeout" | "tick" = "interval") {
    this.callback = pCallback;
    this.delay = pDelay;
    this.mode = pMode;
  }

  async start(): Promise<void> {
    if (this.active) return;

    this.aborted = false;
    this.scheduled = {};

    const preStart = this.hooks.get("preStart") || [];
    try {
      for (const hook of preStart) {
        if (!this.aborted) await hook.call(this);
      }
    } catch (e) {
      this.aborted = true;
      console.log("Error while calling pre-start hook", e.message);
    }

    if (this.aborted) {
      try {
        const startAborted = this.hooks.get("startAborted") || [];
        for (const hook of startAborted) {
          await hook.call(this);
        }
      } catch (e) {
        console.log("Error while calling start-aborted hook", e.message);
      }
      return;
    }

    this.active = true;
    const chain = this.hooks.get("active") || [];

    switch (this.mode) {
      case "tick": {
        this.threadId = setTick(async () => {
          this.tick += 1;
          try {
            await this.callback.call(this);
            for (const hook of chain) {
              await hook.call(this);
            }
          } catch (e) {
            console.log("Error while calling active hook", e.message);
          }
          if (this.delay > 0) {
            await new Promise((resolve) => setTimeout(resolve, this.delay));
          }
        });
        break;
      }
      case "interval": {
        this.threadId = setInterval(async () => {
          this.tick += 1;
          try {
            await this.callback.call(this);
            for (const hook of chain) {
              await hook.call(this);
            }
          } catch (e) {
            console.log("Error while calling active hook", e.message);
          }
        }, this.delay);
        break;
      }
      case "timeout": {
        const f = () => {
          if (this.active) {
            this.threadId = setTimeout(async () => {
              this.tick += 1;
              try {
                await this.callback.call(this);
                for (const hook of chain) {
                  await hook.call(this);
                }
              } catch (e) {
                console.log("Error while calling active hook", e.message);
              }
              return f();
            }, this.delay);
          }
        };
        f();
        break;
      }
    }

    const afterStart = this.hooks.get("afterStart") || [];
    try {
      for (const hook of afterStart) {
        await hook.call(this);
      }
    } catch (e) {
      console.log("Error while calling after-start hook", e.message);
    }
  }

  async stop(): Promise<void> {
    if (!this.active) return;

    const preStop = this.hooks.get("preStop") || [];
    try {
      for (const hook of preStop) {
        if (!this.aborted) await hook.call(this);
      }
    } catch (e) {
      this.aborted = true;
      console.log("Error while calling pre-stop hook", e.message);
    }

    this.active = false;

    switch (this.mode) {
      case "tick": {
        clearTick(this.threadId);
        break;
      }
      case "interval": {
        clearInterval(this.threadId);
        break;
      }
      case "timeout": {
        clearTimeout(this.threadId);
        break;
      }
    }

    if (this.aborted) {
      try {
        const stopAborted = this.hooks.get("stopAborted") || [];
        for (const hook of stopAborted) {
          await hook.call(this);
        }
      } catch (e) {
        console.log("Error while calling stop-aborted hook", e.message);
      }
      return;
    }

    const afterStop = this.hooks.get("afterStop") || [];
    try {
      for (const hook of afterStop) {
        await hook.call(this);
      }
    } catch (e) {
      console.log("Error while calling after-stop hook", e.message);
    }
  }

  abort(): void {
    this.aborted = true;
  }

  addHook(pHook: string, pCallback: HookCallback): void {
    const hookList = this.hooks.get(pHook);
    hookList?.push(pCallback);
  }

  setNextTick(pTickId: string, pTicks: number): void {
    this.scheduled[pTickId] = this.tick + pTicks;
  }

  canTick(pTickId: string): boolean {
    return this.scheduled[pTickId] === undefined || this.tick >= this.scheduled[pTickId];
  }
}

export {
    Thread,
}