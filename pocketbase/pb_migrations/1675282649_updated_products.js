migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1ji4zfjf24d97yb")

  // remove
  collection.schema.removeField("ysamwd9q")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1ji4zfjf24d97yb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ysamwd9q",
    "name": "link",
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
