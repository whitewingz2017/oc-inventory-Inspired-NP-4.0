enum LOG_LEVELS {
    warning = 1,
    log = 2,
    error = 3,
    debug = 4,
}

const resourceLogLevel = GetConvar(`${GetCurrentResourceName()}_logLevel`, "");
let logLevel = GetConvar("sv_loglevel", "warning");

(() => {
    logLevel = (resourceLogLevel?.length ?? 0) > 0 ? resourceLogLevel : logLevel;

    if (!LOG_LEVELS[logLevel]) {
        throw new Error(`Invalid log level: ${logLevel}`);
    }
})();

const warning = () => LOG_LEVELS[logLevel] >= LOG_LEVELS.warning;
const log = () => LOG_LEVELS[logLevel] >= LOG_LEVELS.log;
const error = () => LOG_LEVELS[logLevel] >= LOG_LEVELS.error;
const debug = () => logLevel === "debug";

export const Logger = {
    warning: (text: string, ...input: any[]) => {
        if (!warning()) return;
        console.log(`^3[WARNING] ^7${text}`, ...input, "^0");
    },
    log: (text: string, ...input: any[]) => {
        if (!log()) return;
        console.log(`^5[nopixel] ^7${text}`, ...input, "^0");
    },
    debug: (text: string, ...input: any[]) => {
        if (!debug()) return;
        console.log(`^2[D] ${text}`, ...input, "^0");
    },
    error: (text: string, ...input: any[]) => {
        if (!error()) return;
        console.log(`^1[ERROR] ${text}`, ...input, "^0");
    },
};