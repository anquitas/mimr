/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_829357455")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = user.id",
    "deleteRule": "@request.auth.id = user.id",
    "listRule": "@request.auth.id = user.id",
    "name": "mims",
    "updateRule": "@request.auth.id = user.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_829357455")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "name": "Mims",
    "updateRule": null
  }, collection)

  return app.save(collection)
})
