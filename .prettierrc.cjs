module.exports = {
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@fastify/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
