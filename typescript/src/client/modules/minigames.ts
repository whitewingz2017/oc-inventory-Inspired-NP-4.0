var BankMinigame = async (options) => {
    return globalThis.exports["np-heists"].BankMinigame(options);
  };
  var DDRMinigame = async (options) => {
    return globalThis.exports["np-heists"].DDRMinigame(options);
  };
  var DirectionMinigame = async (options) => {
    return globalThis.exports["skillchecks"].DirectionMinigame(options);
  };
  var DrillingMinigame = async () => {
    return globalThis.exports["skillchecks"].DrillingMinigame();
  };
  var FlipMinigame = async (options) => {
    return globalThis.exports["skillchecks"].FlipMinigame(options);
  };
  var FloodMinigame = async (options) => {
    return globalThis.exports["skillchecks"].FloodMinigame(options);
  };
  export var TaskBarMinigame = async (options) => {
    return globalThis.exports["skillchecks"].TaskBarMinigame(options.difficulty, options.gap, options.iterations, options.useReverse);
  };
  var MazeMinigame = async (options) => {
    return globalThis.exports["np-heists"].MazeMinigame(options);
  };
  var CrackSafe = async (options) => {
    return globalThis.exports["skillchecks"].CrackSafe(options.locks);
  };
  var SameMinigame = async (options) => {
    return globalThis.exports["skillchecks"].SameMinigame(options);
  };
  var ThermiteMinigame = async (options) => {
    return globalThis.exports["np-heists"].ThermiteMinigame(options);
  };
  var UntangleMinigame = async (options) => {
    return globalThis.exports["skillchecks"].UntangleMinigame(options);
  };
  var VarMinigame = async (options) => {
    return globalThis.exports["np-heists"].VarMinigame(options);
  };
  var WordsMinigame = async (options) => {
    return globalThis.exports["skillchecks"].WordsMinigame(options);
  };
  var AlphabetMinigame = async (options) => {
    return globalThis.exports["skillchecks"].AlphabetMinigame(options);
  };
  var LockpickMinigame = async (options) => {
    return globalThis.exports["skillchecks"].LockpickMinigame(options);
  };

  export const Minigames = {
    BankMinigame,
    DDRMinigame,
    DirectionMinigame,
    DrillingMinigame,
    FlipMinigame,
    FloodMinigame,
    TaskBarMinigame,
    MazeMinigame,
    CrackSafe,
    SameMinigame,
    ThermiteMinigame,
    UntangleMinigame,
    VarMinigame,
    WordsMinigame,
    AlphabetMinigame,
    LockpickMinigame
  };
  