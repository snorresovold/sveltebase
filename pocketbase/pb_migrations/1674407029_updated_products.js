migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1ji4zfjf24d97yb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "icnczvgv",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1ji4zfjf24d97yb")

  // remove
  collection.schema.removeField("icnczvgv")

  return dao.saveCollection(collection)
})
