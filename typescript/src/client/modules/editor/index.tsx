export const Editor = {
    RegisterEditorHandlerClient: async (handler) => {
        return await globalThis.exports["editor"].RegisterEditorHandlerClient(handler);
    }
};