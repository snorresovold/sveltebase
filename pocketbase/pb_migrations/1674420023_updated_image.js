migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k3if50wi3hugy94")

  // remove
  collection.schema.removeField("bpshr37z")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k3if50wi3hugy94")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bpshr37z",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
