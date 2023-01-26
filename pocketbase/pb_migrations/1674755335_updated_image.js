migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k3if50wi3hugy94")

  // remove
  collection.schema.removeField("7moigmjn")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k3if50wi3hugy94")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7moigmjn",
    "name": "product",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "1ji4zfjf24d97yb",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
})
