migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k3if50wi3hugy94")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zqy7olnb",
    "name": "thumbnail",
    "type": "bool",
    "required": false,
    "unique": true,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k3if50wi3hugy94")

  // remove
  collection.schema.removeField("zqy7olnb")

  return dao.saveCollection(collection)
})
