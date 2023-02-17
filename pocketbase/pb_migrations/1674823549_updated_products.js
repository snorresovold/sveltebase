migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1ji4zfjf24d97yb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sexyo4gh",
    "name": "image",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "k3if50wi3hugy94",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1ji4zfjf24d97yb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sexyo4gh",
    "name": "image",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "k3if50wi3hugy94",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
