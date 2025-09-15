/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2170398495")

  // update collection data
  unmarshal({
    "name": "peek"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_AjMP")

  // remove field
  collection.fields.removeById("_clone_9JlI")

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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2170398495")

  // update collection data
  unmarshal({
    "name": "peak"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_AjMP",
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
    "id": "_clone_9JlI",
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
  collection.fields.removeById("_clone_lp8w")

  // remove field
  collection.fields.removeById("_clone_ujFQ")

  return app.save(collection)
})
