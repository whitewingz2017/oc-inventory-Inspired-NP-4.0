export const Permissions = {
    async hasPermission(name, optionals = {}) {
      return await exports["permissions"].hasPermission(name, optionals);
    },
    async getUserPermissions() {
      return await exports["permissions"].getUserPermissions();
    },
    async getCharPermissions(characterId) {
      return await exports["permissions"].getCharPermissions();
    },
    async getTotalPermissions() {
      return await exports["permissions"].getTotalPermissions();
    }
  };
  