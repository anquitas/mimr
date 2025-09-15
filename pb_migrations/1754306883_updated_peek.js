/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2170398495")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n  (user || ':' || subject || ':' || tag) AS id,  -- wrap in parentheses!\n  user,\n  subject,\n  tag\nFROM (\n  SELECT DISTINCT user, subject, tag\n  FROM mims\n);"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "json2375276105",
    "maxSize": 1,
    "name": "user",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2170398495")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n  (subject || ':' || tag) AS id,  -- wrap in parentheses!\n  subject,\n  tag\nFROM (\n  SELECT DISTINCT subject, tag\n  FROM mims\n);"
  }, collection)

  // remove field
  collection.fields.removeById("json2375276105")

  return app.save(collection)
})
