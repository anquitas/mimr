/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2170398495")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n  (subject || ':' || tag) AS id,  -- wrap in parentheses!\n  subject,\n  tag\nFROM (\n  SELECT DISTINCT subject, tag\n  FROM mims\n);"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_lp8w")

  // remove field
  collection.fields.removeById("_clone_ujFQ")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "json4224597626",
    "maxSize": 1,
    "name": "subject",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "json59357059",
    "maxSize": 1,
    "name": "tag",
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
    "viewQuery": "SELECT DISTINCT id, subject, tag\nFROM mims;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_lp8w",
    "max": 0,
    "min": 0,
    "name": "subject",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_ujFQ",
    "max": 0,
    "min": 0,
    "name": "tag",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("json4224597626")

  // remove field
  collection.fields.removeById("json59357059")

  return app.save(collection)
})
